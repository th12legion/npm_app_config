## App config

Auto require config.js.

If a file location other than the parent directory is required.
You should use the reload function.

```javascript
var app_config = require("app_config");
app_config = app_config.reload(__dirname+"/config/config.js");
```