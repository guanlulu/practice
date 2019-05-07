var nodejieba = require("nodejieba");
var sentence = "喂你好，";

var result;

result = nodejieba.cut(sentence, true);
console.log(result); 