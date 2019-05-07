var redis = require("redis")
require('bluebird').promisifyAll(redis)
var client = redis.createClient({
        host: 'localhost',
        port: '6379'
    })
rediz()
async function rediz() {
    // APPEND key value                  # append a value to a key
    var appendRes = await client.appendAsync('sdas','12523624')
    console.log('appendRes:\n',appendRes)
    // SET key value                     # set value in key
    var setRes = await client.setAsync('own','fdgdsgdfh')
    console.log('setRes\n',setRes)
    // SETNX key value                   # set if not exist value in key
    var setnxRes = await client.setnxAsync('fsdf','fdgsdgds') 
    console.log('setnxRes\n',setnxRes)
    // STRLEN key                        # get the length of the value stored in a key
    var strlen = await client.strlenAsync('fsdf')
    console.log('strlen\n',strlen)
    // MSET key value [key value ...]    # set multiple keys to multiple values
    var msetAsync = await client.msetAsync("incr thing", 100, "incr other thing", 1)
    console.log('msetAsync\n',msetAsync)
    // MSETNX key value [key value ...]  # set multiple keys to multiple values, only if none of the keys exist
    var msetnx = await client.msetnx("incr thing1", 100, "incr other thing1", 1)
    console.log('msetnx\n',msetnx)
    // GET key                           # get value in key
    var getRes = await client.getAsync('incr thing1')
    console.log('getRes\n',getRes)
    // MGET key [key ...]                # get the values of all the given keys
    var mgetRes = await client.mgetAsync('incr thing1','fsdf')
    console.log('mgetRes\n',mgetRes)
    // INCR key                          # increment value in key 递增
    var incrRes1 = await client.incrAsync('incr thing1')
    console.log('incrRes1\n',incrRes1)
    // var incrRes2 = await client.incrAsync('fsdf')
    // console.log('incrRes2\n',incrRes2)  // 没有结果
    // INCRBY key increment              # increment the integer value of a key by the given amount
    var incrbyRes = await client.incrbyAsync('incr thing1',25)
    console.log('incrbyRes\n',incrbyRes)
    // INCRBYFLOAT key increment         # increment the float value of a key by the given amount
    var incrbyfloatRes = await client.incrbyfloatAsync('incr thing1',12.43)
    console.log('incrbyfloatRes\n',incrbyfloatRes)  // 138.42999999999999999  精度问题？？？
    // DECR key                          # decrement the integer value of key by one
    // DECRBY key decrement              # decrement the integer value of a key by the given number
    // DEL key                           # delete key
    var delRes = await client.delAsync('own')
    console.log('delRes\n',delRes)                  
    // EXPIRE key 120                    # key will be deleted in 120 seconds
    var expireRes = await client.expireAsync('incr thing1',120)
    console.log('expireRes\n',expireRes)            
    // TTL key                           # returns the number of seconds until a key is deleted
    var ttlRes = await client.ttlAsync('own')
    console.log('ttlRes\n',ttlRes)       //  -2  ???                          
    // Lists.
    // A list is a series of ordered values
    // RPUSH key value [value ...]           # put the new value at the end of the list
    var rpushRes = await client.rpushAsync('list1','qwwe','wrqwer','rewrew')
    console.log('rpushRes\n',rpushRes)
    // RPUSHX key value                      # append a value to a list, only if the exists
    // LPUSH key value [value ...]           # put the new value at the start of the list
    var lpushRes = await client.lpushAsync('list1','first','second','third')
    console.log('lpushRes\n',lpushRes)
    // LRANGE key start stop                 # give a subset of the list
    var lrangeRes = await client.lrangeAsync('list1',2,4)
    console.log('lrangeRes\n',lrangeRes)
    // LINDEX key index                      # get an element from a list by its index
    var lindexRes = await client.lindexAsync('list1',2)
    console.log('lindexRes\n',lindexRes)     // first
    // LINSERT key BEFORE|AFTER pivot value  # insert an element before or after another element in a list
    // LLEN key                              # return the current length of the list
    var llenRes = await client.llenAsync('list1')
    console.log('llenRes\n',llenRes)
    // LPOP key                              # remove the first element from the list and returns it
    var lpopRes = await client.lpopAsync('list1')
    console.log('lpopRes\n',lpopRes)
    // LSET key index value                  # set the value of an element in a list by its index
    var lsetRes = await client.lsetAsync('list1',2,'is first?') // 前面已经删除 third
    console.log('lsetRes\n',lsetRes)
    // RPOP key                              # remove the last element from the list and returns it
    // RPOPLPUSH source destination          # remove the last element in a list, prepend it to another list and return it
    var rpoplpushRes = await client.rpoplpushAsync('list1','list2')  // list2 不存在会创建
    console.log('rpoplpushRes\n',rpoplpushRes)
    // BLPOP key [key ...] timeout           # remove and get the first element in a list, or block until one is available
    // BRPOP key [key ...] timeout           # remove and get the last element in a list, or block until one is available

    // and more...
}
