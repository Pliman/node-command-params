get node command line parameters in the following format:
node foo.js foo=bar bar=a=b
result:
{foo: 'bar', bar: 'a=b'}

example:
foo.js
var nodeCommondParams = require('node-command-params');
const params = nodeCommondParams();

console.log(params);