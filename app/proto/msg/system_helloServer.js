/**
 * Created by yangsong on 16/1/24.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function system_helloServer(){
	this.msgId = 101;
	this.serverName = '';

}

system_helloServer.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.msgId);
	Msg.encode(buff, 'string', this.serverName);

    var result = buff.pack();
    buff = null;
    return result;
}

system_helloServer.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.msgId = Msg.decode(buff, 'ushort');
	this.serverName = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = system_helloServer;