/**
 * Created by kvins on 27/04/2016.
 */

var fs = require("fs");

var setup;
var filename = "";

exports.init = function(fn,callback){
    filename = fn;
    fs.exists(filename,function(isExist) {
        if(isExist){
            setup = JSON.parse(fs.readFileSync(filename));
            callback();
        }
        else{throw new Error('Nothing setup file JSON.');}
    });
};


exports.transport = function(){
    return setup.transport;
};

exports.options = function(){
    return setup.options;
};

exports.from = function(){
    return setup.from;
};

exports.to = function(){
    return setup.to;
};

exports.subject = function(){
    return setup.subject;
}

exports.template = function(){
    return setup.template;
};