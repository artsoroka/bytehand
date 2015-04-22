
var request     = require("request"); 
var querystring = require("querystring"); 
var extend      = require('util')._extend; 
var API_URL     = "http://bytehand.com:3800"; 

var Bytehand = function(config){
    this.auth = {
        id: config.id || null, 
        key: config.key || null
    };
}; 

module.exports = function(config){
    var config = config || {}; 
    return new Bytehand(config); 
}; 

Bytehand.prototype.send = function(message, callback){
    this._call('send', message, function(err, response){
       if( err ) return callback(err, null); 
       
       callback(null, {
           status: "OK", 
           messageId: response.description
       }); 
       
    });
}; 

Bytehand.prototype.balance = function(callback){
    this._call('balance', {}, function(err, response){
        if( err ) return callback(err, null); 
        callback(null, response.description); 
    }); 
}; 

Bytehand.prototype._call = function(method, message, callback){
    var url  = this.prepareUrl(method, message); 
    var self = this; 
    request.get(url, function(err, response, body){
        self._handle(err, response, body, callback); 
    }); 
}; 

Bytehand.prototype._handle = function(err, response, body, callback){
    if( err) return callback(err, null);
    
    var data = this._parseJSON(body); 
    
    if( response.statusCode != 200 || data.status !== 0) 
        return callback(data, null); 

    callback(null, data);
}; 

Bytehand.prototype._parseJSON = function(str){
    var data = null;  
    try{
        data = JSON.parse(str); 
    } catch(e){
        console.log('could not parse JSON string: ', str, e); 
    }
    return data; 
}; 

Bytehand.prototype.prepareUrl = function(method, message){
    var params  = extend(message, this.auth); 
    var qs      = [method, querystring.stringify(params)].join('?'); 
    
    return [API_URL, qs].join('/'); 
}; 