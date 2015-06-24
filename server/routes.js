'use strict';

//var sales = require('./controllser/v1/sales_controller');
var Router = require('koa-router');
//var session = require('koa-session');

var router = new Router({prefix:"/v1"});
router.get('/sales', function*(next){
	var n = this.session.views || 0;
	console.log("view:",n," times.");
	this.session.views = ++ n;
	this.body = yield  {status:200,message:"Hello World!"};
	return;
});

module.exports = router;