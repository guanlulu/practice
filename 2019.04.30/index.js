let fn = (flag) => {
    return new Promise((resolve,reject) => {
        return new Promise((r1,r2) => {
            flag && resolve(123)
        })
    })
}


fn()
fn()
fn() 
fn(true).then((res) => {
    console.log(res)
})