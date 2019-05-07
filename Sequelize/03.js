var {createModel} = require('./01.js')

async function insertData() {
    var models = await createModel()
    console.log(models)
}
insertData()