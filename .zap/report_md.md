
# ZAP Scanning Report




## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 3 |
| Low | 8 |
| Informational | 4 |

## Alert Detail


  
  
  
### PII Scanner
##### High (High)
  
  
  
  
#### Description
<p>The response contains Personally Identifiable Information, such as CC number, SSN and similar sensitive data.</p>
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/](https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/)
  
  
  * Method: `GET`
  
  
  * Evidence: `5264810966944441`
  
  
  
  
Instances: 1
  
### Solution
<p></p>
  
### Other information
<p>Credit Card Type detected: Mastercard</p>
  
### Reference
* 

  
#### CWE Id : 359
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
### Cross-Domain Misconfiguration
##### Medium (Medium)
  
  
  
  
#### Description
<p>Web browser data loading may be possible, due to a Cross Origin Resource Sharing (CORS) misconfiguration on the web server</p>
  
  
  
* URL: [https://www.zaproxy.org/img/faq/supportAddonVersion.png](https://www.zaproxy.org/img/faq/supportAddonVersion.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/websockets/images/105.png](https://www.zaproxy.org/docs/desktop/addons/websockets/images/105.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/blog/2020-03-04-dark-mode-in-the-weekly-release/images/zap-dark-desktop.png](https://www.zaproxy.org/blog/2020-03-04-dark-mode-in-the-weekly-release/images/zap-dark-desktop.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/fugue/forcedUserOff.png](https://www.zaproxy.org/docs/desktop/images/fugue/forcedUserOff.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/getting-started/images/alert-icons.png](https://www.zaproxy.org/getting-started/images/alert-icons.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/index.xml](https://www.zaproxy.org/index.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/blog/2016-02-19-zap-newsletter-2016-february/images/Contexts1.png](https://www.zaproxy.org/blog/2016-02-19-zap-newsletter-2016-february/images/Contexts1.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/blog/2015-12-15-zap-newsletter-2015-december/images/custom-http-breakpoint.png](https://www.zaproxy.org/blog/2015-12-15-zap-newsletter-2015-december/images/custom-http-breakpoint.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/fuzzdb-files/index.xml](https://www.zaproxy.org/docs/desktop/addons/fuzzdb-files/index.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/access-control-testing/index.xml](https://www.zaproxy.org/docs/desktop/addons/access-control-testing/index.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/16/141.png](https://www.zaproxy.org/docs/desktop/images/16/141.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/16/094.png](https://www.zaproxy.org/docs/desktop/images/16/094.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/blog/2016-02-19-zap-newsletter-2016-february/images/image04.png](https://www.zaproxy.org/blog/2016-02-19-zap-newsletter-2016-february/images/image04.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/json-view/index.xml](https://www.zaproxy.org/docs/desktop/addons/json-view/index.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/export-report/images/pdf.png](https://www.zaproxy.org/docs/desktop/addons/export-report/images/pdf.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/fugue/application-blue-export.png](https://www.zaproxy.org/docs/desktop/images/fugue/application-blue-export.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/16/076.png](https://www.zaproxy.org/docs/desktop/images/16/076.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/main.7d9e3.css](https://www.zaproxy.org/main.7d9e3.css)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/replacer/index.xml](https://www.zaproxy.org/docs/desktop/addons/replacer/index.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/browser-view/index.xml](https://www.zaproxy.org/docs/desktop/addons/browser-view/index.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Access-Control-Allow-Origin: *`
  
  
  
  
Instances: 259
  
### Solution
<p>Ensure that sensitive data is not available in an unauthenticated manner (using IP address white-listing, for instance).</p><p>Configure the "Access-Control-Allow-Origin" HTTP header to a more restrictive set of domains, or remove all CORS headers entirely, to allow the web browser to enforce the Same Origin Policy (SOP) in a more restrictive manner.</p>
  
### Other information
<p>The CORS misconfiguration on the web server permits cross-domain read requests from arbitrary third party domains, using unauthenticated APIs on this domain. Web browser implementations do not permit arbitrary third parties to read the response from authenticated APIs, however. This reduces the risk somewhat. This misconfiguration could be used by an attacker to access data that is available in an unauthenticated manner, but which uses some other form of security, such as IP address white-listing.</p>
  
### Reference
* http://www.hpenterprisesecurity.com/vulncat/en/vulncat/vb/html5_overly_permissive_cors_policy.html

  
#### CWE Id : 264
  
#### WASC Id : 14
  
#### Source ID : 3

  
  
  
### Application Error Disclosure
##### Medium (Medium)
  
  
  
  
#### Description
<p>This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.</p>
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules/](https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Internal Server Error`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/releases/2.7.0/](https://www.zaproxy.org/docs/desktop/releases/2.7.0/)
  
  
  * Method: `GET`
  
  
  * Evidence: `internal error`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/](https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Error Occurred While Processing Request`
  
  
  
  
Instances: 3
  
### Solution
<p>Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
### Reverse Tabnabbing
##### Medium (Medium)
  
  
  
  
#### Description
<p>At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the "noopener" and "noreferrer" keywords in the "rel" attribute, which allows the target page to take control of this page.</p>
  
  
  
* URL: [https://www.zaproxy.org/cdn-cgi/l/email-protection](https://www.zaproxy.org/cdn-cgi/l/email-protection)
  
  
  * Method: `GET`
  
  
  * Evidence: `<a href="https://www.cloudflare.com/5xx-error-landing?utm_source=error_footer" id="brand_link" target="_blank">Cloudflare</a>`
  
  
  
  
Instances: 1
  
### Solution
<p>Do not use a target attribute, or if you have to then also add the attribute: rel="noopener noreferrer".</p>
  
### Reference
* https://www.owasp.org/index.php/Reverse_Tabnabbing
* https://dev.to/ben/the-targetblank-vulnerability-by-example
* https://mathiasbynens.github.io/rel-noopener/
* https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c
* 

  
#### Source ID : 3

  
  
  
### Strict-Transport-Security Header Not Set
##### Low (High)
  
  
  
  
#### Description
<p>HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.</p>
  
  
  
* URL: [https://www.zaproxy.org/blog/2016-02-19-zap-newsletter-2016-february/images/image05.png](https://www.zaproxy.org/blog/2016-02-19-zap-newsletter-2016-february/images/image05.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/index.xml](https://www.zaproxy.org/faq/index.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/form-handler/images/formHandlerTable.PNG](https://www.zaproxy.org/docs/desktop/addons/form-handler/images/formHandlerTable.PNG)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/hud/index.xml](https://www.zaproxy.org/docs/desktop/addons/hud/index.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/websockets/images/106.png](https://www.zaproxy.org/docs/desktop/addons/websockets/images/106.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/img/faq/installedAddonVersion.png](https://www.zaproxy.org/img/faq/installedAddonVersion.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules/index.xml](https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules/index.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/10/137.png](https://www.zaproxy.org/docs/desktop/images/10/137.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/linux-webdrivers/index.xml](https://www.zaproxy.org/docs/desktop/addons/linux-webdrivers/index.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/fugue/ui-tab-show.png](https://www.zaproxy.org/docs/desktop/images/fugue/ui-tab-show.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/technology-detection/index.xml](https://www.zaproxy.org/docs/desktop/addons/technology-detection/index.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/16/149.png](https://www.zaproxy.org/docs/desktop/images/16/149.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/16/142.png](https://www.zaproxy.org/docs/desktop/images/16/142.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/blog/2016-02-19-zap-newsletter-2016-february/images/Johanna.jpg](https://www.zaproxy.org/blog/2016-02-19-zap-newsletter-2016-february/images/Johanna.jpg)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/img/addons/source.png](https://www.zaproxy.org/img/addons/source.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/blog/2016-01-04-zap-newsletter-2016-january/images/zapbot.png](https://www.zaproxy.org/blog/2016-01-04-zap-newsletter-2016-january/images/zapbot.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/requester/index.xml](https://www.zaproxy.org/docs/desktop/addons/requester/index.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/export-report/images/json.png](https://www.zaproxy.org/docs/desktop/addons/export-report/images/json.png)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/fuzzdb-web-backdoors/index.xml](https://www.zaproxy.org/docs/desktop/addons/fuzzdb-web-backdoors/index.xml)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/birt-reports/index.xml](https://www.zaproxy.org/docs/desktop/addons/birt-reports/index.xml)
  
  
  * Method: `GET`
  
  
  
  
Instances: 265
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to enforce Strict-Transport-Security.</p>
  
### Reference
* https://www.owasp.org/index.php/HTTP_Strict_Transport_Security
* https://www.owasp.org/index.php/List_of_useful_HTTP_headers
* http://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
* http://caniuse.com/stricttransportsecurity
* http://tools.ietf.org/html/rfc6797

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
### Cross-Domain JavaScript Source File Inclusion
##### Low (Medium)
  
  
  
  
#### Description
<p>The page includes one or more script files from a third-party domain.</p>
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/releases/2.9.0/](https://www.zaproxy.org/docs/desktop/releases/2.9.0/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=UA-71455536-1`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71455536-1"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/details/setting-up-zap-to-test-dvwa/](https://www.zaproxy.org/faq/details/setting-up-zap-to-test-dvwa/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/openapi-support/](https://www.zaproxy.org/docs/desktop/addons/openapi-support/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=UA-71455536-1`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71455536-1"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/start/features/globalexcludeurl/](https://www.zaproxy.org/docs/desktop/start/features/globalexcludeurl/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/save-xml-message/](https://www.zaproxy.org/docs/desktop/addons/save-xml-message/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=UA-71455536-1`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71455536-1"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/start/features/notes/](https://www.zaproxy.org/docs/desktop/start/features/notes/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=UA-71455536-1`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71455536-1"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/start/features/modes/](https://www.zaproxy.org/docs/desktop/start/features/modes/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/options/api/](https://www.zaproxy.org/docs/desktop/ui/dialogs/options/api/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/fuzzdb-web-backdoors/](https://www.zaproxy.org/docs/desktop/addons/fuzzdb-web-backdoors/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/evangelists/](https://www.zaproxy.org/evangelists/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=UA-71455536-1`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71455536-1"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/what-vulnerability-classifications-are-supported/](https://www.zaproxy.org/faq/what-vulnerability-classifications-are-supported/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=UA-71455536-1`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71455536-1"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/why-has-the-quick-scan-attack-reported-an-invalid-url/](https://www.zaproxy.org/faq/why-has-the-quick-scan-attack-reported-an-invalid-url/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/releases/2.2.1/](https://www.zaproxy.org/docs/desktop/releases/2.2.1/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=UA-71455536-1`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71455536-1"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/how-do-i-handle-a-false-positive/](https://www.zaproxy.org/faq/how-do-i-handle-a-false-positive/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=UA-71455536-1`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71455536-1"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/blog/2015-05-27-zap-as-a-service-zaas/](https://www.zaproxy.org/blog/2015-05-27-zap-as-a-service-zaas/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=UA-71455536-1`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71455536-1"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/addnote/](https://www.zaproxy.org/docs/desktop/ui/dialogs/addnote/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/ajax-spider/](https://www.zaproxy.org/docs/desktop/addons/ajax-spider/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=UA-71455536-1`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71455536-1"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/options/language/](https://www.zaproxy.org/docs/desktop/ui/dialogs/options/language/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/start/features/intercept/](https://www.zaproxy.org/docs/desktop/start/features/intercept/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js`
  
  
  * Evidence: `<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.6/lunr.min.js"></script>`
  
  
  
  
* URL: [https://www.zaproxy.org/addons/](https://www.zaproxy.org/addons/)
  
  
  * Method: `GET`
  
  
  * Parameter: `https://www.googletagmanager.com/gtag/js?id=UA-71455536-1`
  
  
  * Evidence: `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71455536-1"></script>`
  
  
  
  
Instances: 697
  
### Solution
<p>Ensure JavaScript source files are loaded from only trusted sources, and the sources can't be controlled by end users of the application.</p>
  
### Reference
* 

  
#### CWE Id : 829
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
### X-Content-Type-Options Header Missing
##### Low (Medium)
  
  
  
  
#### Description
<p>The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.</p>
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/browser-view/index.xml](https://www.zaproxy.org/docs/desktop/addons/browser-view/index.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/index.xml](https://www.zaproxy.org/docs/index.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/img/faq/windows-settings-high-dpi.png](https://www.zaproxy.org/img/faq/windows-settings-high-dpi.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/16/152.png](https://www.zaproxy.org/docs/desktop/images/16/152.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/fugue/application-blue-export.png](https://www.zaproxy.org/docs/desktop/images/fugue/application-blue-export.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/code-dx/index.xml](https://www.zaproxy.org/docs/desktop/addons/code-dx/index.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/reveal/index.xml](https://www.zaproxy.org/docs/desktop/addons/reveal/index.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/blog/2016-11-22-announcing-the-official-zap-jenkins-plugin/images/ZAP_CI_SMALLER.png](https://www.zaproxy.org/blog/2016-11-22-announcing-the-official-zap-jenkins-plugin/images/ZAP_CI_SMALLER.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/call-graph/index.xml](https://www.zaproxy.org/docs/desktop/addons/call-graph/index.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/vulncheck/index.xml](https://www.zaproxy.org/docs/desktop/addons/vulncheck/index.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/cdn-cgi/scripts/zepto.min.js](https://www.zaproxy.org/cdn-cgi/scripts/zepto.min.js)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/blog/2020-03-09-zap-ssrf-setup/images/callback-options-setup.png](https://www.zaproxy.org/blog/2020-03-09-zap-ssrf-setup/images/callback-options-setup.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/fuzzdb-files/index.xml](https://www.zaproxy.org/docs/desktop/addons/fuzzdb-files/index.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/getting-started/images/alert-icons.png](https://www.zaproxy.org/getting-started/images/alert-icons.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/blog/2016-02-19-zap-newsletter-2016-february/images/image04.png](https://www.zaproxy.org/blog/2016-02-19-zap-newsletter-2016-february/images/image04.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/fugue/broom.png](https://www.zaproxy.org/docs/desktop/images/fugue/broom.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/16/073.png](https://www.zaproxy.org/docs/desktop/images/16/073.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/getting-started/images/zap-qstart-learnmore.png](https://www.zaproxy.org/getting-started/images/zap-qstart-learnmore.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/images/16/141.png](https://www.zaproxy.org/docs/desktop/images/16/141.png)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/access-control-testing/index.xml](https://www.zaproxy.org/docs/desktop/addons/access-control-testing/index.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `X-Content-Type-Options`
  
  
  
  
Instances: 265
  
### Solution
<p>Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.</p><p>If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.</p>
  
### Other information
<p>This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.</p><p>At "High" threshold this scanner will not alert on client or server error responses.</p>
  
### Reference
* http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx
* https://www.owasp.org/index.php/List_of_useful_HTTP_headers

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
### Incomplete or No Cache-control and Pragma HTTP Header Set
##### Low (Medium)
  
  
  
  
#### Description
<p>The cache-control and pragma HTTP header have not been set properly or are missing allowing the browser and proxies to cache content.</p>
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/start/features/index.xml](https://www.zaproxy.org/docs/desktop/start/features/index.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/zap-in-ten/](https://www.zaproxy.org/zap-in-ten/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/start/features/users/](https://www.zaproxy.org/docs/desktop/start/features/users/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/access-control-testing/tab/](https://www.zaproxy.org/docs/desktop/addons/access-control-testing/tab/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/community-scripts/index.xml](https://www.zaproxy.org/docs/desktop/addons/community-scripts/index.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/](https://www.zaproxy.org/docs/desktop/addons/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/releases/1.3.1/](https://www.zaproxy.org/docs/desktop/releases/1.3.1/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/options/breakpoints/](https://www.zaproxy.org/docs/desktop/ui/dialogs/options/breakpoints/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/ajax-spider/index.xml](https://www.zaproxy.org/docs/desktop/addons/ajax-spider/index.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/](https://www.zaproxy.org/docs/desktop/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/how-do-i-see-what-version-of-an-add-on-extension-i-have-installed/](https://www.zaproxy.org/faq/how-do-i-see-what-version-of-an-add-on-extension-i-have-installed/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/fonts-in-zap-look-bad-on-my-system-what-should-i-do/](https://www.zaproxy.org/faq/fonts-in-zap-look-bad-on-my-system-what-should-i-do/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/releases/2.7.0/](https://www.zaproxy.org/docs/desktop/releases/2.7.0/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules-alpha/](https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules-alpha/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/plug-n-hack/index.xml](https://www.zaproxy.org/docs/desktop/addons/plug-n-hack/index.xml)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/tabs/breakpoints/](https://www.zaproxy.org/docs/desktop/ui/tabs/breakpoints/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/](https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/regular-expression-tester/](https://www.zaproxy.org/docs/desktop/addons/regular-expression-tester/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/options/ascaninput/](https://www.zaproxy.org/docs/desktop/ui/dialogs/options/ascaninput/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/how-can-zap-test-sites-that-use-certificate-pinning/](https://www.zaproxy.org/faq/how-can-zap-test-sites-that-use-certificate-pinning/)
  
  
  * Method: `GET`
  
  
  * Parameter: `Cache-Control`
  
  
  * Evidence: `max-age=600`
  
  
  
  
Instances: 447
  
### Solution
<p>Whenever possible ensure the cache-control HTTP header is set with no-cache, no-store, must-revalidate; and that the pragma HTTP header is set with no-cache.</p>
  
### Reference
* https://www.owasp.org/index.php/Session_Management_Cheat_Sheet#Web_Content_Caching

  
#### CWE Id : 525
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
### Content Security Policy (CSP) Header Not Set
##### Low (Medium)
  
  
  
  
#### Description
<p>Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.</p>
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/start/features/alerts/](https://www.zaproxy.org/docs/desktop/start/features/alerts/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/why-am-i-getting-blank-zap-windows-on-linux/](https://www.zaproxy.org/faq/why-am-i-getting-blank-zap-windows-on-linux/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/vulncheck/](https://www.zaproxy.org/docs/desktop/addons/vulncheck/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/addalert/](https://www.zaproxy.org/docs/desktop/ui/dialogs/addalert/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/forced-browse/](https://www.zaproxy.org/docs/desktop/addons/forced-browse/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/log-file-importer/](https://www.zaproxy.org/docs/desktop/addons/log-file-importer/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/tabs/response/](https://www.zaproxy.org/docs/desktop/ui/tabs/response/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/macos-webdrivers/](https://www.zaproxy.org/docs/desktop/addons/macos-webdrivers/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/releases/1.4.1/](https://www.zaproxy.org/docs/desktop/releases/1.4.1/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/amf-support/](https://www.zaproxy.org/docs/desktop/addons/amf-support/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/selenium/options/](https://www.zaproxy.org/docs/desktop/addons/selenium/options/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/session/](https://www.zaproxy.org/docs/desktop/ui/dialogs/session/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/start/features/anticsrf/](https://www.zaproxy.org/docs/desktop/start/features/anticsrf/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/how-can-i-run-zap-with-a-high-dpi-display/](https://www.zaproxy.org/faq/how-can-i-run-zap-with-a-high-dpi-display/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/](https://www.zaproxy.org/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/releases/2.8.0/](https://www.zaproxy.org/docs/desktop/releases/2.8.0/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/tlmenu/edit/](https://www.zaproxy.org/docs/desktop/ui/tlmenu/edit/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/directory-list-v2.3/](https://www.zaproxy.org/docs/desktop/addons/directory-list-v2.3/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/tltoolbar/](https://www.zaproxy.org/docs/desktop/ui/tltoolbar/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/what-causes-exception-in-thread-awt-eventqueue-0-when-loading-zap-on-docked-mac-osx/](https://www.zaproxy.org/faq/what-causes-exception-in-thread-awt-eventqueue-0-when-loading-zap-on-docked-mac-osx/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 352
  
### Solution
<p>Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header, to achieve optimal browser support: "Content-Security-Policy" for Chrome 25+, Firefox 23+ and Safari 7+, "X-Content-Security-Policy" for Firefox 4.0+ and Internet Explorer 10+, and "X-WebKit-CSP" for Chrome 14+ and Safari 6+.</p>
  
### Reference
* https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
* https://www.owasp.org/index.php/Content_Security_Policy
* http://www.w3.org/TR/CSP/
* http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.html
* http://www.html5rocks.com/en/tutorials/security/content-security-policy/
* http://caniuse.com/#feat=contentsecuritypolicy
* http://content-security-policy.com/

  
#### CWE Id : 16
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
### Information Disclosure - Debug Error Messages
##### Low (Medium)
  
  
  
  
#### Description
<p>The response appeared to contain common error messages returned by platforms such as ASP.NET, and Web-servers such as IIS and Apache. You can configure the list of common debug messages.</p>
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/](https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Error Occurred While Processing Request`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules/](https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Internal Server Error`
  
  
  
  
Instances: 2
  
### Solution
<p>Disable debugging messages before pushing to production.</p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
### Cookie Without Secure Flag
##### Low (Medium)
  
  
  
  
#### Description
<p>A cookie has been set without the secure flag, which means that the cookie can be accessed via unencrypted connections.</p>
  
  
  
* URL: [https://www.zaproxy.org/robots.txt](https://www.zaproxy.org/robots.txt)
  
  
  * Method: `GET`
  
  
  * Parameter: `__cfduid`
  
  
  * Evidence: `Set-Cookie: __cfduid`
  
  
  
  
* URL: [https://www.zaproxy.org/](https://www.zaproxy.org/)
  
  
  * Method: `GET`
  
  
  * Parameter: `__cfduid`
  
  
  * Evidence: `Set-Cookie: __cfduid`
  
  
  
  
Instances: 2
  
### Solution
<p>Whenever a cookie contains sensitive information or is a session token, then it should always be passed using an encrypted channel. Ensure that the secure flag is set for cookies containing such sensitive information.</p>
  
### Reference
* http://www.owasp.org/index.php/Testing_for_cookies_attributes_(OWASP-SM-002)

  
#### CWE Id : 614
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
### Private IP Disclosure
##### Low (Medium)
  
  
  
  
#### Description
<p>A private IP (such as 10.x.x.x, 172.x.x.x, 192.168.x.x) or an Amazon EC2 private hostname (for example, ip-10-0-56-78) has been found in the HTTP response body. This information might be helpful for further attacks targeting internal systems.</p>
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/](https://www.zaproxy.org/docs/desktop/addons/websockets/pscanrules/)
  
  
  * Method: `GET`
  
  
  * Evidence: `ip-10-0-56-78`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules/](https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules/)
  
  
  * Method: `GET`
  
  
  * Evidence: `ip-10-0-56-78`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/options/localproxy/](https://www.zaproxy.org/docs/desktop/ui/dialogs/options/localproxy/)
  
  
  * Method: `GET`
  
  
  * Evidence: `192.168.0.14:8080`
  
  
  
  
Instances: 3
  
### Solution
<p>Remove the private IP address from the HTTP response body.  For comments, use JSP/ASP/PHP comment instead of HTML/JavaScript comment which can be seen by client browsers.</p>
  
### Other information
<p>ip-10-0-56-78</p><p>10.01.09.16</p><p>10.255.255.255</p><p>10.0.0.0</p><p></p>
  
### Reference
* https://tools.ietf.org/html/rfc1918

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
### Retrieved from Cache
##### Informational (Medium)
  
  
  
  
#### Description
<p>The content was retrieved from a shared cache. If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance. </p>
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules-alpha/index.xml](https://www.zaproxy.org/docs/desktop/addons/passive-scan-rules-alpha/index.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/ajax-spider/tab/](https://www.zaproxy.org/docs/desktop/addons/ajax-spider/tab/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/support/](https://www.zaproxy.org/support/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/authentication-statistics/index.xml](https://www.zaproxy.org/docs/desktop/addons/authentication-statistics/index.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/plug-n-hack/clientstab/](https://www.zaproxy.org/docs/desktop/addons/plug-n-hack/clientstab/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/getting-started/images/zap-qstart-learnmore.png](https://www.zaproxy.org/getting-started/images/zap-qstart-learnmore.png)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 314`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/options/callback/](https://www.zaproxy.org/docs/desktop/ui/dialogs/options/callback/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/start/features/authentication/](https://www.zaproxy.org/docs/desktop/start/features/authentication/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/guides/zapping-the-top-10/](https://www.zaproxy.org/docs/guides/zapping-the-top-10/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/releases/index.xml](https://www.zaproxy.org/docs/desktop/releases/index.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/img/favicon.ico](https://www.zaproxy.org/img/favicon.ico)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 501`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/how-do-you-configure-zap-to-test-an-application-on-localhost/](https://www.zaproxy.org/faq/how-do-you-configure-zap-to-test-an-application-on-localhost/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/fuzzer/processors/](https://www.zaproxy.org/docs/desktop/addons/fuzzer/processors/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/somethings-not-working-what-should-i-do/](https://www.zaproxy.org/faq/somethings-not-working-what-should-i-do/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/session/context-struct/](https://www.zaproxy.org/docs/desktop/ui/dialogs/session/context-struct/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/releases/2.1.0/](https://www.zaproxy.org/docs/desktop/releases/2.1.0/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/websockets/api/](https://www.zaproxy.org/docs/desktop/addons/websockets/api/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/tabs/httpsessions/](https://www.zaproxy.org/docs/desktop/ui/tabs/httpsessions/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/releases/1.0.0/](https://www.zaproxy.org/docs/desktop/releases/1.0.0/)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/index.xml](https://www.zaproxy.org/docs/desktop/ui/dialogs/index.xml)
  
  
  * Method: `GET`
  
  
  * Evidence: `Age: 0`
  
  
  
  
Instances: 460
  
### Solution
<p>Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:</p><p>Cache-Control: no-cache, no-store, must-revalidate, private</p><p>Pragma: no-cache</p><p>Expires: 0</p><p>This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request.</p>
  
### Other information
<p>The presence of the 'Age' header indicates that that a HTTP/1.1 compliant caching server is in use.</p>
  
### Reference
* https://tools.ietf.org/html/rfc7234
* https://tools.ietf.org/html/rfc7231
* http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)

  
#### Source ID : 3

  
  
  
### Timestamp Disclosure - Unix
##### Informational (Low)
  
  
  
  
#### Description
<p>A timestamp was disclosed by the application/web server - Unix</p>
  
  
  
* URL: [https://www.zaproxy.org/blog/2014-03-10-hacking-zap-1-why-should-you/](https://www.zaproxy.org/blog/2014-03-10-hacking-zap-1-why-should-you/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/releases/2.3.0/](https://www.zaproxy.org/docs/desktop/releases/2.3.0/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/tlmenu/online/](https://www.zaproxy.org/docs/desktop/ui/tlmenu/online/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/import-urls/](https://www.zaproxy.org/docs/desktop/addons/import-urls/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/how-do-you-find-out-what-key-to-use-to-set-a-config-value-on-the-command-line/](https://www.zaproxy.org/faq/how-do-you-find-out-what-key-to-use-to-set-a-config-value-on-the-command-line/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/pdf/ZAPGettingStartedGuide-2.9.pdf](https://www.zaproxy.org/pdf/ZAPGettingStartedGuide-2.9.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000539482`
  
  
  
  
* URL: [https://www.zaproxy.org/blog/2016-01-04-zap-newsletter-2016-january/](https://www.zaproxy.org/blog/2016-01-04-zap-newsletter-2016-january/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/pdf/ZAPGettingStartedGuide-2.9.pdf](https://www.zaproxy.org/pdf/ZAPGettingStartedGuide-2.9.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000543198`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/what-options-exist-for-selective-proxying/](https://www.zaproxy.org/faq/what-options-exist-for-selective-proxying/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/forced-browse/options/](https://www.zaproxy.org/docs/desktop/addons/forced-browse/options/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/blog/2015-10-06-zap-q-a-session-tuesday-13th-october-2015/](https://www.zaproxy.org/blog/2015-10-06-zap-q-a-session-tuesday-13th-october-2015/)
  
  
  * Method: `GET`
  
  
  * Evidence: `0806180880`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/options/search/](https://www.zaproxy.org/docs/desktop/ui/dialogs/options/search/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/details/setting-up-zap-to-test-owasp-pixi/](https://www.zaproxy.org/faq/details/setting-up-zap-to-test-owasp-pixi/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/why-are-there-missing-history-ids/](https://www.zaproxy.org/faq/why-are-there-missing-history-ids/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/ui/dialogs/options/certificate/](https://www.zaproxy.org/docs/desktop/ui/dialogs/options/certificate/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/advanced-sqlinjection-scanner/](https://www.zaproxy.org/docs/desktop/addons/advanced-sqlinjection-scanner/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/addons/save-raw-message/](https://www.zaproxy.org/docs/desktop/addons/save-raw-message/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
* URL: [https://www.zaproxy.org/pdf/ZAPGettingStartedGuide-2.9.pdf](https://www.zaproxy.org/pdf/ZAPGettingStartedGuide-2.9.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000521163`
  
  
  
  
* URL: [https://www.zaproxy.org/pdf/ZAPGettingStartedGuide-2.9.pdf](https://www.zaproxy.org/pdf/ZAPGettingStartedGuide-2.9.pdf)
  
  
  * Method: `GET`
  
  
  * Evidence: `0000240890`
  
  
  
  
* URL: [https://www.zaproxy.org/docs/desktop/start/features/api/](https://www.zaproxy.org/docs/desktop/start/features/api/)
  
  
  * Method: `GET`
  
  
  * Evidence: `71455536`
  
  
  
  
Instances: 492
  
### Solution
<p>Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.</p>
  
### Other information
<p>71455536, which evaluates to: 1972-04-07 00:45:36</p>
  
### Reference
* https://www.owasp.org/index.php/Top_10_2013-A6-Sensitive_Data_Exposure
* http://projects.webappsec.org/w/page/13246936/Information%20Leakage

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3

  
  
  
### Loosely Scoped Cookie
##### Informational (Low)
  
  
  
  
#### Description
<p>Cookies can be scoped by domain or path. This check is only concerned with domain scope.The domain scope applied to a cookie determines which domains can access it. For example, a cookie can be scoped strictly to a subdomain e.g. www.nottrusted.com, or loosely scoped to a parent domain e.g. nottrusted.com. In the latter case, any subdomain of nottrusted.com can access the cookie. Loosely scoped cookies are common in mega-applications like google.com and live.com. Cookies set from a subdomain like app.foo.bar are transmitted only to that domain by the browser. However, cookies scoped to a parent-level domain may be transmitted to the parent, or any subdomain of the parent.</p>
  
  
  
* URL: [https://www.zaproxy.org/](https://www.zaproxy.org/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/robots.txt](https://www.zaproxy.org/robots.txt)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/](https://www.zaproxy.org/)
  
  
  * Method: `GET`
  
  
  
  
Instances: 3
  
### Solution
<p>Always scope cookies to a FQDN (Fully Qualified Domain Name).</p>
  
### Other information
<p>The origin domain used for comparison was: </p><p>www.zaproxy.org</p><p>__cfduid=d508e1fcab54e31e1a34f67cbf2218b9a1583933293</p><p></p>
  
### Reference
* https://tools.ietf.org/html/rfc6265#section-4.1
* https://www.owasp.org/index.php/Testing_for_cookies_attributes_(OTG-SESS-002)
* http://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_cookies

  
#### CWE Id : 565
  
#### WASC Id : 15
  
#### Source ID : 3

  
  
  
### Information Disclosure - Suspicious Comments
##### Informational (Low)
  
  
  
  
#### Description
<p>The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.</p>
  
  
  
* URL: [https://www.zaproxy.org/cdn-cgi/scripts/zepto.min.js](https://www.zaproxy.org/cdn-cgi/scripts/zepto.min.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/cdn-cgi/scripts/cf.common.js](https://www.zaproxy.org/cdn-cgi/scripts/cf.common.js)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/faq/](https://www.zaproxy.org/faq/)
  
  
  * Method: `GET`
  
  
  
  
* URL: [https://www.zaproxy.org/main.7d9e3.js](https://www.zaproxy.org/main.7d9e3.js)
  
  
  * Method: `GET`
  
  
  
  
Instances: 4
  
### Solution
<p>Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.</p>
  
### Other information
<p>The following comment/snippet was identified via the pattern: \bUSERNAME\b</p><p>var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function $(t){return null!=t&&t==t.window}function _(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function R(t){return D(t)&&!$(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(R(i[e])||A(i[e]))?(R(i[e])&&!R(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),R(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return _(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=$,n.isArray=A,n.isPlainObject=R,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):[]},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!_(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!_(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&X(this,t)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?W(this,""):(i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),void W(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?$(s)?s["inner"+i]:_(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function w(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function T(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?T(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n);var s=n.dataType,a=/\?.+=\?/.test(n.url);if(a&&(s="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=s&&"jsonp"!=s)||(n.url=w(n.url,"_="+Date.now())),"jsonp"==s)return a||(n.url=w(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){s=s||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=d.responseXML:"json"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var S="async"in n?n.async:!0;d.open(n.type,n.url,S,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},T(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);</p><p></p>
  
### Reference
* 

  
#### CWE Id : 200
  
#### WASC Id : 13
  
#### Source ID : 3
