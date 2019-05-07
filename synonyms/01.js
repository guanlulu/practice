var synonyms = require('./node-synonyms-master/app/index')
// 起不起来
// 放弃
// console.log(synonyms)
// console.log(synonyms.display)
// synonyms.display("股市")
let sen1 = "移动互联网";
synonyms.seg(sen1, true, true)
    .then(function(words){
        console.log(words)
        });