var axios = require('axios')
const api = new Proxy({},{
    get(target,prop) {
        const method = /^[a-z]+/.exec(prop)[0]
        const path = '/' + prop
                .substring(method.length)
                // .replace(/([a-z])(A-Z)/g,'$1/$2')
                .replace(/\$/g,'/$/')
                .toLowerCase()
        return (...args) => {
            const url = path.replace(/\$/g,() => args.shift())
            const options = args.shift() || {}
            console.log('Requesting: ', method, url, options)
            console.log('--------------------------------------')
            return axios({method,url,...options})
        }
    }
})

api.get()
// Requesting:  get / {}
api.getUsers()
// Requesting:  get /users {}
api.getUsers$Books(42)
// Requesting:  get /users/42/books {}
api.getUsers$Books(42,{params: {page: 2}})
// Requesting:  get /users/42/books { params: { page: 2 } }
api.getUsers$Books$(42,35,{params: {page: 2}})
// Requesting:  get /users/42/books/35/ { params: { page: 2 } }
api.postUsers({data: {name: 'sdf'}})
// Requesting:  post /users { data: { name: 'sdf' } }


// 封装 fetch
let handlers = {
    get(target,prop) {
        if(!target.init) {
            ['GET','POST'].forEach(method => {
                target[method] = (url,params = {}) => {
                    return fetch(url,{
                        headers: {
                            'content-type': 'application/json'
                          },
                          mode: 'cors',
                          credentials: 'same-origin',
                          method,
                          ...params
                    }).then(res => JSON.stringify(res))
                }
            })
        }
        return target[prop]
    }
}
let API = new Proxy({},handlers)
// 对GET、POST进行了一层封装，可以直接通过.GET这种方式来调用，并设置一些通用的参数

