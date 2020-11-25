var fs = require("fs");
var path =  require("path");
var config =  {};
var config_path = path.resolve(__dirname+"/../../config.js");

var start_require = function(){
	try {	
		if (fs.existsSync(config_path) ){
			config = require(config_path);
		}
	} catch(err) {
		console.error(err);
	}

	config['reload'] =  function(path){
		config_path = path;
		start_require();
		
		return config;
	}
}

start_require();

module.exports = config;