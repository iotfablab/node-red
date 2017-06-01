module.exports = function(RED) {
    function Json2dmNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
          //
          //var checkpayloadmsg = '';
          //checkpayloadmsg = msgpayloadcheck(node,msg,function(err,json){
          //  if(err){
          //    node.status({fill:'red', shape:'ring', text:err});
          //    node.error(err, msg);
          //    return;
          //  }
          //  node.status({fill:'red', shape:'dot', text:' node is about to perform the transformation'});
            //msg.payload = array;
            node.status({fill:'red', shape:'dot', text:'JSON2double transformation error'});
            node.send(msg);
        });
    }
    RED.nodes.registerType("JSON2doublematrix",Json2dmNode);
}
