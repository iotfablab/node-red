module.exports = function(RED) {
    function CsharpweibullalgNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
          node.status({fill:'red', shape:'dot', text:'compute weibull parameters'});
          node.send(msg);
        });
    }
    RED.nodes.registerType("Csharpweibullalg",CsharpweibullalgNode);
}
