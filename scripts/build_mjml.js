var fs = require('fs');

var filename_arg = process.argv[2];
var require_path = '../' + filename_arg;
if (!fs.existsSync(filename_arg)) {
	var error_msg = filename_arg + " Doesnt Exist"
	process.stderr.write("\n\n" + error_msg + "\n\n");
	process.exit();
}
var mjml_file = require(require_path);

process.stdout.write(mjml_file);
