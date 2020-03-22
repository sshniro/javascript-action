const fs = require('fs');
const _ = require('lodash');
const readline = require('readline');


function createReadStreamSafe(filename, options) {
    return new Promise((resolve, reject) => {
        const fileStream = fs.createReadStream(filename, options);
        fileStream.on('error', reject).on('open', () => {
            resolve(fileStream);
        });
    });
}


let actionHelper = {
    processLineByLine: (async (tsvFile) => {
        let plugins = [];
        try {
            const fileStream = await createReadStreamSafe(tsvFile);
            const rl = readline.createInterface({
                input: fileStream,
                crlfDelay: Infinity
            });
            for await (const line of rl) {
                if (line.charAt(0) !== '#') {
                    let tmp = line.split('\t');
                    if (tmp[0].trim() !== '' && tmp[1].trim().toUpperCase() === 'IGNORE') {
                        plugins.push(tmp[0].trim());
                    }
                }
            }
        } catch (err) {
            console.log(`Error when reading the rules file: ${tsvFile}`)
        }

        return plugins;
    }),

    createMessage: ((sites, runnerID) => {
        const NXT_LINE = '\n';
        const TAB = "\t";
        const BULLET = "-";
        let msg = '';

        sites.forEach((site => {
            msg = msg + `${BULLET} Site[${site["@name"]}] ${NXT_LINE}`
            if (site.hasOwnProperty('alerts')) {
                if (site.alerts.length !== 0) {
                    msg = `${msg} ${TAB} **New Alerts** ${NXT_LINE}`;
                    site.alerts.forEach((alert) => {
                        msg = msg + TAB + `${BULLET} Alert[${alert.pluginid}] count(${alert.instances.length}): ${alert.name} ${NXT_LINE}`
                    });
                }
            }

            if (site.hasOwnProperty('removedAlerts')) {
                if (site.removedAlerts.length !== 0) {
                    msg = `${msg} ${TAB} **Resolved Alerts** ${NXT_LINE}`;
                    site.removedAlerts.forEach((alert) => {
                        msg = msg + TAB + `${BULLET} Alert[${alert.pluginid}] count(${alert.instances.length}): ${alert.name} ${NXT_LINE}`
                    });
                }
            }

            msg = msg + NXT_LINE
        }));
        if (msg.trim() !== '') {
            msg = msg + NXT_LINE + `The report is attached as an artifact inside the workflow.`;
            msg = msg + NXT_LINE + runnerID;
        }
        return msg
    }),

    generateDifference: ((newReport, oldReport) => {
        newReport.updated = false;
        let siteClone = [];
        newReport.site.forEach((newReportSite) => {
            // Check if the new report site already exists in the previous report
            let previousSite = _.filter(oldReport.site, s => s['@name'] === newReportSite['@name']);
            // If does not exists add it to the array without further processing
            if (previousSite.length === 0) {
                newReport.updated = true;
                siteClone.push(newReportSite);
            } else {
                // deep clone the variable for further processing
                let newSite = JSON.parse(JSON.stringify(newReportSite));
                let alerts = newReportSite.alerts;
                let previousAlerts = previousSite[0].alerts;

                let updatedAlerts = [];
                let newAlerts = _.differenceBy(alerts, previousAlerts, 'pluginid');
                let removedAlerts = _.differenceBy(previousAlerts, alerts, 'pluginid');

                newSite.alerts = newAlerts;
                newSite.removedAlerts = removedAlerts;
                siteClone.push(newSite);

                if (newAlerts.length !== 0 || removedAlerts.length !== 0) {
                    newReport.updated = true;
                }
            }
        });
        return siteClone;
    }),

    readMDFile: (async (reportName)=>{
        let res = '';
        try {
            res = fs.readFileSync(reportName, {encoding: 'base64'});
        } catch (err) {
            console.log('error while reading the markdown file!')
        }
        return res;
    }),

    checkIfAlertsExists: ((jsonReport)=>{
        return jsonReport.site.some((s) => {
            return (s.hasOwnProperty('alerts') && s.alerts.length !== 0);
        });
    }),


    filterReport: (async (jsonReport, plugins)=>{
        jsonReport.site.forEach((s) => {
            if (s.hasOwnProperty('alerts') && s.alerts.length !== 0) {
                let newAlerts = s.alerts.filter(function(e) {
                    return !plugins.includes(e.pluginid)
                });
                let removedAlerts = s.alerts.filter(function(e) {
                    return plugins.includes(e.pluginid)
                });
                s.alerts = newAlerts;
                s.ignoredAlerts = removedAlerts;
            }
        });
        return jsonReport;
    })
};

module.exports = actionHelper;
