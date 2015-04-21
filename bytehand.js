var request     = require("request"); 
var querystring = require("querystring"); 

var API_URL = "http://bytehand.com:3800"; 

var Bytehand = function(config){
    this.auth = {
        id: config.id || null, 
        key: config.key || null
    }
}

module.exports = function(config){
    var config = config || {}; 
    return new Bytehand(config); 
}

Bytehand.prototype.send = function(message, callback){
    return this._call('send', message, callback); 
}

Bytehand.prototype._call = function(method, params, callback){
    params.id = this.auth.id; 
    params.key = this.auth.key; 
    
    var qs = [method, querystring.stringify(params)].join('&'); 
    var url = [API_URL, qs].join('?'); 
    callback(url); 
}