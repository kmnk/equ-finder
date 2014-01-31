(function() {
  var findFunctionCall, findFunctionDefinition;

  findFunctionCall = require('./functioncall').find;

  findFunctionDefinition = require('./functiondefinition').find;

  module.exports = {
    findFunctionCall: findFunctionCall,
    findFunctionDefinition: findFunctionDefinition
  };

}).call(this);
