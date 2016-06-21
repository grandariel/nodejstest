/**
 * Created by Admin on 21.06.2016.
 */
var fs = require('fs');

fs.readFile('package.json', function(err, buf){
   console.log(buf.toString());
});