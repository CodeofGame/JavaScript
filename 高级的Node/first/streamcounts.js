var Writable = require("stream").Writable;

var util = require("util");

module.exports = CountStream;

util.inherits(CountStream, Writable);


function CountStream(matchText, options) {
    Writable.call(this,options);
    this.count=0;
    this.matcher=new RegExp(matchText,'ig');    
}

CountStream.prototype._write = function (chunk, encoding, callback) {
    var matchs = chunk.toString().match(this.matcher);
    if (matchs) {
        this.count += matchs.length;
    }
    callback();
}

CountStream.prototype.end = function () {
    this.emit("total", this.count);
}

