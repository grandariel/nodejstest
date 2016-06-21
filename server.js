/**
 * Created by Admin on 22.06.2016.
 */
var http = require('http');
var fs = require('fs');
var port = 9999;


function send404(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found");
    response.end();
}

http.createServer(function(request, response){
    if(request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream('index.html').pipe(response);
    }else{
        send404(response);
    }

}).listen(port);
console.log('Server is running on port', port);