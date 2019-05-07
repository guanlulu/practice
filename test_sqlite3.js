
var sqlite3 = require('sqlite3')

var db = new sqlite3.Database('tmp/1.db',function() {
  db.run("create table test(name varchar(15))",function(){
    db.run("insert into test values('hello,world')",function(){
      db.all("select * from test",function(err,res){
        if(!err)
          console.log(JSON.stringify(res))
        else
          console.log(err)
      })
    })
  })

  db.run('create table person(name,age,hobby)',function() {
    db.run('insert into person values("hello",12,"eee")',function() {
      db.run('select * from person',function(err,res) {
        if(!err) {
          console.log(JSON.stringify(res))
        }else {
          console.log(err)
        }
      })
    })
  })
})

// db.close([callback])
// db.configure(option,value)
// db.run(sql,[param,...],[callback])
// db.get(sql,[param,...],[callback])
// db.all(sql,[param,...],[callback])
// db.the each(sql,[param,...],[callback])
// db.exec(sql,[callback])
// db.prepare(sql,[param,...],[callback])


