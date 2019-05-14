# Setup

1. `npm install`
2. `npm start`

Note: There is no need to add a bucket name, s3 keys or app insights keys, the code will fail just the same.

Outputs:

```
{ NetworkingError: Cannot set headers after they are sent to the client
    at ClientRequest.setHeader (_http_outgoing.js:470:11)
    at Function.AutoCollectHttpDependencies.trackRequest (/Users/brandon/s3-application-insights/node_modules/applicationinsights/out/AutoCollection/HttpDependencies.js:122:39)
    at clientRequestPatch (/Users/brandon/s3-application-insights/node_modules/applicationinsights/out/AutoCollection/HttpDependencies.js:45:45)
    at Object.https.request (/Users/brandon/s3-application-insights/node_modules/applicationinsights/out/AutoCollection/HttpDependencies.js:67:13)
    at features.constructor.handleRequest (/Users/brandon/s3-application-insights/node_modules/aws-sdk/lib/http/node.js:42:23)
    at executeSend (/Users/brandon/s3-application-insights/node_modules/aws-sdk/lib/event_listeners.js:342:29)
    at Request.SEND (/Users/brandon/s3-application-insights/node_modules/aws-sdk/lib/event_listeners.js:356:9)
    at Request.callListeners (/Users/brandon/s3-application-insights/node_modules/aws-sdk/lib/sequential_executor.js:102:18)
    at Request.emit (/Users/brandon/s3-application-insights/node_modules/aws-sdk/lib/sequential_executor.js:78:10)
    at Request.emit (/Users/brandon/s3-application-insights/node_modules/aws-sdk/lib/request.js:683:14)
  message: 'Cannot set headers after they are sent to the client',
  code: 'NetworkingError',
  region: 'us-east-1',
  hostname: 's3.amazonaws.com',
  retryable: true,
  time: 2019-05-14T00:52:36.693Z }
/Users/brandon/s3-application-insights/node_modules/applicationinsights/out/AutoCollection/Exceptions.js:34
                        throw THIS_IS_APPLICATION_INSIGHTS_RETHROWING_YOUR_EXCEPTION; // Error originated somewhere else in your app
                        ^

TypeError: Cannot read property 'didCallback' of undefined
    at ClientRequest.<anonymous> (/Users/brandon/s3-application-insights/node_modules/aws-sdk/lib/http/node.js:43:18)
    at Object.onceWrapper (events.js:277:13)
    at ClientRequest.emit (events.js:189:13)
    at ClientRequest.EventEmitter.emit (domain.js:441:20)
    at ClientRequest.emitted (/Users/brandon/s3-application-insights/node_modules/emitter-listener/listener.js:134:21)
    at HTTPParser.parserOnIncomingClient [as onIncoming] (_http_client.js:556:21)
    at HTTPParser.parserOnHeadersComplete (_http_common.js:109:17)
    at TLSSocket.socketOnData (_http_client.js:442:20)
    at TLSSocket.emit (events.js:189:13)
    at TLSSocket.EventEmitter.emit (domain.js:441:20)
```
