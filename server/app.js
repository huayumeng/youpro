'use strict';

var koa = require('koa');
var logger = require('koa-logger');
var session = require('koa-session');
var app = koa();
var mount = require('koa-mount');



/*process.env('NODE_CONFIG_DIR') = __dirname + 'config';
process.env('CONTROLLER_DIR') = 'server/controllers/v1';
global.assert = require('assert');
global.lib = require('./lib');
global.sequelize = lib.sequelize;*/

app.keys = ['ims_secret_keys'];

app.use(logger());

app.use(function *(next){
	try{
		yield next;
	}
	catch(err){
		this.status = err.status || 500;
		this.body = {
			status: this.status,
			message: err.message
		};
	}
});

app.use(session(app));

app.on('error',err=>{
	console.error(err);
});

/**
 * lod routes
 */


var router = require('./routes');
app.use(router.routes());

app.listen(3000);

module.exports = app;