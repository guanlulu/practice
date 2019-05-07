let debug = require('debug')('debug')
let info = require('debug')('info')
let error = require('debug')('error')
var path = require("path")

var fs = require('fs')
var file_pa = './txt/分词歧义表举例.txt'
var data = fs.readFileSync(file_pa,'utf-8')
var data_arr = data.split('\n')



const Database = require('better-sqlite3')
const db = new Database(path.resolve(__dirname, './cs.db'))
var cs_tokenizer = db.prepare(
    'INSERT OR IGNORE INTO tokenizer(id,smartcn,ik_smart,jieba_search) VALUES (@id,@smartcn,@ik_smart,@jieba_search)'
)

 

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

// localhost:9200/tokenizer/_analyze
async function tokenizer(text) {
    const res_smartcn = await client.indices.analyze({
        index: 'tokenizer',
        body: {
            "analyzer": "smartcn",
            "text": text
        }
    })
    const res_ik = await client.indices.analyze({
        index: 'tokenizer',
        body: {
            "analyzer": "ik_smart",
            "text": text
        }
    })
    const res_jieba = await client.indices.analyze({
        index: 'tokenizer',
        body: {
            "analyzer": "jieba_search",
            "text": text
        }
    })
    return {
        res_smartcn: res_smartcn.tokens,
        res_ik: res_ik.tokens,
        res_jieba: res_jieba.tokens
    }
}
// 分词结果整合插入数据库
function insertDB(text,id) {
    tokenizer(text).then((res) => {
        var arr = ['','','']
        var i = 0
        for(var k in res) {
            res[k].map((item,index) => {
                arr[i] = arr[i] + item.token + '/ '
            })
            i++
        }
        return {
            smartcn: arr[0],
            ik_smart: arr[1],
            jieba_search: arr[2]
        }
    }).then((res) => {
        res.id = id
        cs_tokenizer.run(res)
    })
    .catch(err => console.error(err))
}


data_arr.map((item,index) => {
    item.split(',').map((str_item,str_index) => {
        var str = str_item.substring(1,item.length-1)
        if(str_index == 1) {
            insertDB(str,index * 2 + 1)
        }else if(str_index == 2) {
            insertDB(str,(index+1) * 2)
        }
    }) 
})

