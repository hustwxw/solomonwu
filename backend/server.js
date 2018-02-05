var express = require('express');
var app = express();
var fs = require('fs');

var returnObj = {code:0,msg:'ok'};

app.get('/login', function(req, res) {
    console.log(req.query)
    fs.readFile('user.js', function(err, contents) {
        res.writeHead(200, {
            'Content-Type': 'application/x-javascript;charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        });
        var user = req.query.user || "";
        var password = req.query.password || "";
        if(user == "" || password == ""){
        	returnObj.code = "-1";
        	returnObj.msg = "error";
        }
        var flag = 0;
        var _contents = JSON.parse(contents);
        for(var i=0,len=_contents.length;i<len;i++){
        	if(_contents[i].user == user && _contents[i].password == password){
        		flag = 1;
        		break;
        	}
        }
        if(flag == 1){
        	returnObj.code = "0";
        	returnObj.msg = "ok";
        }else{
        	returnObj.code = "-1";
        	returnObj.msg = "error";
        }console.log(flag)
        res.write(JSON.stringify(returnObj));
        res.end();
    });

})

var server = app.listen(8082, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})