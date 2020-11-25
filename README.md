## App config

Auto require config.js.

How to use?
Edit you package.json!

```javascript
"dependencies": {
    "app_config": "https://github.com/th12legion/npm_app_config/archive/v2.0.0.tar.gz"
 }
```

If a file location other than the parent directory is required.
You should use the reload function.

```javascript
var app_config = require("app_config");
app_config = app_config.reload(__dirname+"/config/config.js");
```