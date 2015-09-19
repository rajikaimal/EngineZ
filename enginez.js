var fs = require('fs'); // this engine requires the fs module

var engineZ = function(app){
	app.engine('enz', function (filePath, options, callback) { // define the template engine
	  fs.readFile(filePath, function (err, content) {
	    if (err) return callback(new Error(err));
	    // this is an extremely simple template engine
	    var rendered = content.toString().replace('title', '<title>'+ options.title +'</title>')
	    .replace('message', '<p>'+ options.message +'</p>').replace('h2', '<h2></h2>');
	    return callback(null, rendered);
	  })
	});
}

module.exports = engineZ;


