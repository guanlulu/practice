var fs = require("fs")


var dirArr = []
 
readDirSync(root)
function readDirSync(path){
	var pa = fs.readdirSync(path);
	pa.forEach(function(ele,index){
		var info = fs.statSync(path+"/"+ele)	
		if(info.isDirectory()){
			console.log("dir: "+ele)
			readDirSync(path+"/"+ele);
		}else{
            console.log("file: "+ele)
            dirArr.push(ele)
            return dirArr
		}	
	})
}

module.export = {readDirSync}
