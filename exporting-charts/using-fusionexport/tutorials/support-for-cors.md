---
title: CORS support
description: Learn how to send requests from different origin while communicating to the Fusion Export server
heading: CORS support
---

In the older version FusionExport expects the requests to come from the same origin. In other words, there is no support for CORS.
From this version onwards we are introducing Support for CORS i.e. while communicating to the FusionExport server, help me send requests from different origins than the localhost so that I can have a scalable infrastructure.

* Node.js has a CORS module using which users can send cross-origin requests and share resources. However, you can not simply start accepting requests from all the URLs, there should be certain white-listed URLs. Hence, we will be offering a new CLI argument called --cors (for CORS for Windows Service, cors for Docker and JSON configuration)
* This argument will accept the following information:
* `Boolean`: In case of CLI argument only `--cors` flag is set with no additional information then it will be treated as true. In the case of JSON, Docker, and Windows Registry proper boolean value should be passed. For example `true`. Behind the scene, the `origin` will be set to `*` so that requests from all the URLs will be sent.
* `String`: This will set origin to a specific `origin`. For example, if you set it to `"http://example.com"` only requests from “http://example.com” will be allowed.
* `RegExp`: Set `origin` to a regular expression pattern which will be used to test the request origin. If it’s a match, the request origin will be reflected. For example, the pattern `/example\.com$/` will reflect any request that is coming from an origin ending with “example.com”.
* `Array`: Set `origin` to an array of valid origins. Each origin can be a `String` or a `RegExp`. For example `["http://example1.com", /\.example2\.com$/]` will accept any request from “http://example1.com” or from a subdomain of “example2.com”
 
 
## Installation
Configuring CORS option based on different FusionExport server builds
1 - Windows - via CLI & config json
2 - Linux - via CLI & config json
3 - Docker - by adding in config.json file (fusionexport-docker/service/config.json)
4 - Windows service  - By configuring the registry options (Computer\HKEY_LOCAL_MACHINE\SOFTWARE\FusionCharts Technologies LLP\FusionExport Windows Service.)

### Solution
Added cors option to the cli and that is passed to the HTTP handler over config and through this cors option we set the CORS in the middleware through setPreMiddlewares function. 

Changes in src/index/cli.js 

```json
option('--cors [values...]', 'space separated cors values')
if (!_.isUndefined(cors)) {
   if (!(["string","boolean"].includes(typeof cors ) || Array.isArray(cors))) {
     return {
       error: 'cors must be a Boolean, String, Regex or Array',
     };
   }
   configs.server.cors = cors;
 }
 ```
 
 Changes in src/request/http/HttpHandler.js
 ```http
 getRegex(str) {
   if(str && _.isString(str)) {
     const IS_REGEX = /^\/.*\/(?:(i|g|m|u|s)(?!.*\1))*$/;
     const IS_BOOL = /^(true|false)$/i;
     if(IS_REGEX.test(str)) {
       const REGEX_MATCH = /^\/.*\//;
       const [matchedString] = str.match(REGEX_MATCH);
       const matchedStringLength = matchedString.length;
       const result = matchedString.substring(1, matchedStringLength-1);
        const regex = new RegExp(result, str.substr(matchedStringLength));
       return regex;
     } else if(IS_BOOL.test(str)) {
       const bool = JSON.parse(str.toLowerCase());
       return bool;
     }
     return str;
   }
   return false;
 }
 getCorsOptions() {
   if(!_.isUndefined(this.config.cors)) {
     const cors = this.config.cors;
     if (_.isBoolean(cors)) {
       return { origin: cors };
     } else if(_.isArray(cors) && cors.length) {
       const originArray = cors.filter(x => x).map(this.getRegex).filter(x => x);
       return { origin: originArray.length ? originArray : false };
     } else if (_.isString(cors)) {
       return { origin: this.getRegex(cors) };
     }
   }
   return null;
 }
 setCORS() {
   const corsOpts = this.getCorsOptions();
   if(!_.isNull(corsOpts)) {
     corsOpts.exposedHeaders = '*';
     const corsHandler = cors(corsOpts);
     this.listener.options("*", corsHandler);
 ```

## Windows Service
Added CORS option to the registry with default value set to false.

```json
public static string GetCORS
       {
           get
           {
               bool isCors = Registry.CheckSetting(Registry.SettingKeys.CORS);
               if(isCors)
               {
                   string cors = Registry.ReadSetting<string>(Registry.SettingKeys.CORS); //ConfigurationManager.AppSettings["CORS"];
                   if (string.IsNullOrEmpty(cors))
                   {
                       return " ";
                   }
                   else
                   {
                       return cors.ToString();
                   }
               }
               else
               {
                   return string.Empty;
               }  
           }
       }

public static bool CheckSetting(SettingKeys key)
       {
           string regPath = @"SOFTWARE\FusionCharts Technologies LLP\FusionExport Windows Service";
           SettingKeys enumDisplayStatus = (SettingKeys)key;
           string stringValue = enumDisplayStatus.ToString();

 bool returnValue = false;
           try
           {
               using (Microsoft.Win32.RegistryKey registryKey = Microsoft.Win32.Registry.LocalMachine.OpenSubKey(regPath))
               {
                   if (registryKey != null)
                   { 
                       returnValue = registryKey.GetValueNames().Contains(stringValue);
                   }
               }
           }
           catch (Exception ex)
           {
               SystemEvent.Log.Write(ex.Message, ex);
           }
           return returnValue;           
       }
Root: HKLM; Subkey: "{#SettingsRegPath}"; ValueType: string; ValueName: "CORS"; ValueData: {code:SetServiceSetting|cors}; Flags: createvalueifdoesntexist
function SetServiceSetting(Value: string): string;
begin
 
    if (Value = 'host') then begin
      Result := UserPage.Values[0];
    end else if (Value = 'port') then begin
      Result := UserPage.Values[1];
    end else if (Value = 'workercount') then begin
      Result := '0';
    end else if (Value = 'cors') then begin
      Result := 'false';
    end else begin
      Result := '';
    end;    
end;
```

## Docker

``` json
environment:
     cors: ${CORS}
### CORS supported origins ###################
CORS=false
```
This is a Node.js module available through the npm registry. Installation is done using the npm install command:

### Simple Usage (Enable All CORS Requests)

``` json
  var express = require('express')
  var cors = require('cors')
  var app = express()
  
  app.use(cors())
  
  app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
   })
   
    app.listen(80, function () {
      console.log('CORS-enabled web server listening on port 80')
      })
``` 

### Enable CORS for a Single Route

``` json
  var express = require('express')
  var cors = require('cors')
  var app = express()
  
  app.get('/products/:id' cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route'})
  })
  
    app.listen(80, function () {
      console.log('CORS-enabled web server listening on port 80')
      })
``` 

### Configuring CORS

``` json
  var express = require('express')
  var cors = require('cors')
  var app = express()
  
  var corsOptions = {
    origin: 'http://example.com',
    optionSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
    
    app.get('/products/:id', cors(corsOptions), function (req, res, next) {
      res.json({msg: 'This is CORS-enabled for only example.com'})
      })
      
    app.listen(80, function () {
      console.log('CORS-enabled web server listening on port 80')
      })
``` 

### Configuring CORS with Dynamic Origin

This module supports validating the origin dynamically using a function provided to the origin option. This function will be passed a string that is the origin (or undefined if the request has no origin), and a callback with the signature callback(error, origin).
The origin argument to the callback can be any value allowed for the origin option of the middleware, except a function. See the configuration options section for more information on all the possible value types.
This function is designed to allow the dynamic loading of allowed origin(s) from a backing datasource, like a database.

``` json
  var express = require('express')
  var cors = require('cors')
  var app = express()
  
  var corsOptions = {
    origin: function (origin, callback) {
    // db.loadOrigins is an example call to load
    // a list of origins from a backing database
    db.loadOrigins(function (error, origins) {
      callback(error, origins)
    })
   }
  }
  
  app.get('/products/:id', cors(corsOptions), function (req, res, next) {
      res.json({msg: 'This is CORS-enabled for an allowed domain.'})
  })
  
  app.listen(80, function () {
      console.log('CORS-enabled web server listening on port 80')
      })
  
  ```
  
  ### Enabling CORS Pre-flight
  
  Certain CORS requests are considered 'complex' and require an initial OPTIONS request (called the "pre-flight request"). An example of a 'complex' CORS request is one that uses an HTTP verb other than GET/HEAD/POST (such as DELETE) or that uses custom headers. 
  To enable pre-flighting, you must add a new OPTIONS handler for the route you want to support:
  
  ```json
  
    var express = require('express')
    var cors = require('cors')
    var app = express()
  
    app.options('/products/:id', cors()) // enable pre-flight request for DELETE request
    app.del('/products/:id', cors(), function (req, res, next) {
      res.json({msg: 'This is CORS-enabled for all origins!'})
    }) 
    
    app.listen(80, function () {
      console.log('CORS-enabled web server listening on port 80')
      })
  ```
  
  You can also enable pre-flight across-the-board as shown below:
  
  ```json
  app.options('*', cors()) // include before other routes
  ```
  
  ## Configuring CORS Asynchronously
  
  ```json
  
    var express = require('express')
    var cors = require('cors')
    var app = express()
    
    var allowlist = ['http://example1.com', 'http://example2.com']
    var corsOptionsDelegate = function (req, callback) {
      var corsOptions;
      if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
      } else {
        corsOptions = { origin: false } // disable CORS for this request
      }
      callback(null, corsOptions) // callback expects two parameters: error and options
    }
    
    app.get('/products/:id', cors(corsOptionsDelegate), function (req, res, next) {
      res.json({msg: 'This is CORS-enabled for an allowed domain.'})
  })
  
  app.listen(80, function () {
      console.log('CORS-enabled web server listening on port 80')
      })
    
   ```
    
  ### Configuration Options
  
* `origin`: Configures the Access-Control-Allow-Origin CORS header. Possible values:
** `Boolean` - set `origin` to `true` to reflect the request origin, as defined by `req.header('Origin')`, or set it to `false` to disable CORS.
** `String` - set `origin` to a specific origin. For example if you set it to `"http://example.com"` only requests from "http://example.com" will be allowed.
** `RegExp` - set `origin` to a regular expression pattern which will be used to test the request origin. If it's a match, the request origin will be reflected. For example the pattern `/example\.com$/` will reflect any request that is coming from an origin ending with "example.com".
** `Array` - set `origin` to an array of valid origins. Each origin can be a String or a RegExp. For example `["http://example1.com"`, `/\.example2\.com$/]` will accept any request from "http://example1.com" or from a subdomain of "example2.com".
** `Function` - set `origin` to a function implementing some custom logic. The function takes the request origin as the first parameter and a callback (called as `callback(err, origin)`, where origin is a non-function value of the origin option) as the second.
* `methods`: Configures the Access-Control-Allow-Methods CORS header. Expects a comma-delimited string (ex: 'GET,PUT,POST') or an array (ex: `['GET', 'PUT', 'POST']`).
* `allowedHeaders`: Configures the Access-Control-Allow-Headers CORS header. Expects a comma-delimited string (ex: `'Content-Type,Authorization'`) or an array (ex: ['Content-Type', 'Authorization']). If not specified, defaults to reflecting the headers specified in the request's Access-Control-Request-Headers header.
* `exposedHeaders`: Configures the Access-Control-Expose-Headers CORS header. Expects a comma-delimited string (ex: `'Content-Range,X-Content-Range'`) or an array (ex: ['Content-Range', 'X-Content-Range']). If not specified, no custom headers are exposed.
* `credentials`: Configures the Access-Control-Allow-Credentials CORS header. Set to `true` to pass the header, otherwise it is omitted.
* `maxAge`: Configures the Access-Control-Max-Age CORS header. Set to an integer to pass the header, otherwise it is omitted.
* `preflightContinue`: Pass the CORS preflight response to the next handler.
* `optionsSuccessStatus`: Provides a status code to use for successful `OPTIONS` requests, since some legacy browsers (IE11, various SmartTVs) choke on 204.

The default configuration is the equivalent of:

``` json
{ 
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}  
```

  
