const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
//const io = require('socket.io')(http);
//const bodyParser = require('body-parser');
//const fs = require('fs');
//const cors = require('cors');
const helpers = require('./linearPoint.js');
var result = null;
var success = false;
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './www/')));
//app.use(cors(corsOptions));

//var corsOptions = {
     //origin: 'http://localhost:4200',
     //optionSuccessStatus: 200
//};

require('./listen.js')(http);	

app.get('/api/addnum', (req, res) =>{
	 var addresult = null;
	 var success = false;
	 addresult = helpers.addnum(req.query.a, req.query.b, req.query.c);
	 if(addresult.errors.length == 0){
		 success = true;
	 } else{
		 success = false;
	 }
	 res.send({'result':addresult.result, 'success':success,'errors':addresult.errors});
});