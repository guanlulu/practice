var elasticsearch = require('elasticsearch')
var esClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
})
async function search1(dbName, item,record_id) {
    var query = {
        bool: {
            must: [
               {
                match: {
                    content : {
                        query : item.keyword,
                        operator : "and"
                    }
                }
               }
            ],
            filter: [
                {
                    range: {
                        record_id: { gt: record_id - 1, lt: record_id + 1 }
                    }
                }
            ]
        }
    }
    var res = await esClient.search({
        index: `index_${dbName}`,
        body: {
            query: query
        }
    })
    return {
        item_id: item.id,
        keyword: item.keyword,
        data: res.hits.hits
    }
}

async function fn() {
    var item = {id: 1,keyword: '生意'}
    await search1('emic00000001.db',item,1)
}

fn()