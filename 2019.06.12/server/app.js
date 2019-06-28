const express = require('express')
const app = express()

var db = require('./db')

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/**
 * 查询列表页
 */
app.get('/user',function(req,res,next) {
    db.query('SELECT * FROM user',function(err,rows) {
        if(err){
            res.status(500).send(err)
        }else {
            var data = {
                code: 200,
                data: rows
            }
            res.status(200).send(data)
        }
    })
})
/**
 * 增加列表页
 */
app.post('/user',function(req,res,next) {
    let parse_data = ''
    req.on('data',function(data) {
        // parse_data += data
        parse_data = data.toString('utf8')
        let obj = parse_query(parse_data)
        db.query(`INSERT INTO user (name,age) VALUES ("${decodeURI(obj.name)}",${obj.age})`,function(err,rows) {
            if(err) {
                res.status(500).send(err)
            }else {
                let data = {
                    code: 200,
                    info: '添加成功'
                }
                res.status(200).send(data)
            }
        })
    })
})
/**
 * 编辑列表页
 */
app.put('/user',function(req,res,next) {
    let parse_data = ''
    req.on('data',function(data) {
        parse_data += data
        let obj = parse_query(parse_data)
        db.query(`UPDATE user SET name = "${decodeURI(obj.name)}", age = ${obj.age} WHERE id = ${obj.id}`,function(err,rows) {
            if(err){
                res.status(500).send(err)
            }else {
                var data = {
                    code: 200,
                    info: '修改成功'
                }
                res.status(200).send(data)
            }
        })
    })
    // console.log(req.query)
    // console.log(req.params)
    
})
/**
 * 删除列表页
 */
app.delete('/user',function(req,res,next) {
    let parse_data = ''
    req.on('data',function(data) {
        parse_data += data
        let obj = parse_query(parse_data)
        db.query(`DELETE FROM user WHERE name = "${decodeURI(obj.name)}" and age = ${obj.age} and id = ${obj.id}`,function(err,rows) {
            if(err){
                res.status(500).send(err)
            }else {
                var data = {
                    code: 200,
                    info: '删除成功'
                }
                res.status(200).send(data)
            }
        })
    })
})

function parse_query(v) {
    let obj = {}
    let arr = v.split('&')
    arr.map(m => {
        obj[m.split('=')[0]] = m.split('=')[1]
    })
    return obj
}

app.listen(3000,() => {
    console.log('Example app listening on port 3000!')
})

// express 热更新
// 解析 query