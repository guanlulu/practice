function pySegSort(arr,empty) {
    if(!String.prototype.localeCompare)
        return null;

    var letters = "*abcdefghjklmnopqrstwxyz".split('');
    var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('');

    var segs = [];
    var curr;
    letters.map(function(i,i_index) {
        curr = {letter: i, data:[]}
        arr.map(function(k) {
            if((!zh[i_index-1] || zh[i_index-1].localeCompare(k) <= 0) && k.localeCompare(zh[i_index]) == -1) {
                curr.data.push(k)
            }
        })
        if(empty || curr.data.length) {
            segs.push(curr);
            curr.data.sort(function(a,b){
                return a.localeCompare(b)
            })
        }

    })
    return segs
    
}

var res = pySegSort(['白鸽', '麻雀','黑','大象', '狗', '猫','妈妈','马', "鸡",'瘦','胖'])
console.log(res)





for(var i=0;i<letters.length;i++){
    curr = {letter: letters[i], data:[]};

    if(i!=26){
        for(var j =0;j<arrList.length;j++){
            var initial = arrList[j].charAt(0);           //截取第一个字符
            if(arrList[j].charAt(0)==letters[i]||arrList[j].charAt(0)==letters[i].toLowerCase()){   //首字符是英文的
                curr.data.push(arrList[j]);
            }else if(zh[i]!='*'&&$this.isChinese(initial)){      //判断是否是无汉字,是否是中文
                if(initial.localeCompare(zh[i]) >= 0 &&(!zh[i+1]||initial.localeCompare(zh[i+1]) <0)) {   //判断中文字符在哪一个类别
                    curr.data.push(arrList[j]);
                }
            }
        }
    }else{
        for(var k =0;k<arrList.length;k++){
            var ini = arrList[k].charAt(0);           //截取第一个字符
            if(!$this.isChar(ini)&&!$this.isChinese(ini)){
                curr.data.push(arrList[k]);
            }
        }
    }

    if(empty || curr.data.length) {
        result.push(curr);
        curr.data.sort(function(a,b){
            return a.localeCompare(b);       //排序,英文排序,汉字排在英文后面 (有问题)
        })
    }
}
return result;
