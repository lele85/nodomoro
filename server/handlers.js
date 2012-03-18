/*
* Params:
*  - response: response object
*  - logger: logger object
*  - logger_channels: logger channels
*/
function init(params) {
  params.logger.debug("Request handler 'start' was called.", params.logger_channels.handler);
  var responseMessage = "NodoMoro (TM)";
  params.response.writeHead(200, {"Content-Type": "text/html"});
  params.response.write(responseMessage);
  params.response.end();
}

function getTasks(params) {
	var responseMessage = "<ul><li>Buy milk</li><li>Make bread</li><li>Play with NodeJS</li></ul>";
	params.response.writeHead(200, {"Content-Type": "text/html"});
  	params.response.write(responseMessage);
 	params.response.end();
}

exports.init 	 = init;
exports.getTasks = getTasks;