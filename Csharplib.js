module.exports = function(RED) {
    function CSharplibNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
          node.status({fill:'red', shape:'dot', text:'Fetch the JSON corresponding to URL'});
          node.send(msg);
        });
    }
    RED.nodes.registerType("CSharplib",CSharplibNode);
}
