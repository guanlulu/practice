let emic = require("jssip-emicnet/dist/phonebar")
console.log(emic)
emic.getUser('1023','1023','02566699734',function(err,data) {
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
})