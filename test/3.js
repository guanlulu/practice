var fs = require('fs')
var nodejieba = require("nodejieba")
var path = require("path")
var root = path.join(__dirname) + '/txt'

var dirArr = []
var newstr

function readDirSync(path){
    var pa = fs.readdirSync(path)
	pa.forEach(function(ele,index){
		var info = fs.statSync(path+"/"+ele)	
		if(info.isDirectory()){
			readDirSync(path+"/"+ele)
		}else{
            dirArr.push(ele)
		}	
    })
    console.log('-----dirArr----')
    console.log(dirArr)
}

function cutTxt(txtdir,numindex) {
    var pa = 'txt/' + txtdir
    // console.log('-----pa----')
    // console.log(pa)
    var data = fs.readFileSync(pa,'utf-8')
    // var fileText = data.replace(/\[|\]/g,'').split("\n")
    var fileText = data.replace(/\[|\]|\n/g,'')
    console.log(fileText.indexOf('mix:'))
    newstr = fileText.substring(fileText.indexOf('mix:')+4)
    // var index = fileText.indexOf('mix:')
    // var arr = fileText.slice(index+1)
    // 
    // console.log('-----pnewstr----')
    // console.log(newstr)
    // console.log(arr)
    // var newarr = arr.map((item) => {
    //     return nodejieba.cut(item, true)
    // })
    // var str = newarr.map((item) => {
    //     return item + '\n'
    // }).join()

    // var newpa = './newtxt/' + numindex + '.txt'
    // console.log('-----newpa----')
    // console.log(newpa)

    // fs.writeFileSync(newpa,str)
}


readDirSync(root)
console.log(dirArr.length)

var newarr = []
dirArr.forEach((item,index) => {
    cutTxt(item,index+1)
    newarr.push(newstr)
})

console.log(newarr)

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: '10.0.0.150:9200',
  log: 'trace'
});

newarr.forEach((item,index) => {
    client.bulk({
        body: [
          { index:  { _index: 'luyin2', _type: 'mix', _id: `${dirArr[index]}` } },
           // the document to index
          { pretxt: `${item}` },
        ]
      }, function (err, resp) {
        // ...
      });
})


