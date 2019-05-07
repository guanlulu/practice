var elasticsearch = require('elasticsearch')
var esClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'error'
})
var axios = require('axios')
// var url = 'https://www.zhihu.com/api/v4/search_v3?t=general&q=%E7%A7%9F%E6%88%BF&correction=1&offset=10&limit=10&show_all_topics=0&search_hash_id=9e3fa019b11ad8c9100ad89985b0a36f&vertical_info=0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0'
// var url = 'https://www.zhihu.com/api/v4/search_v3?t=general&q=%E4%B8%AD%E4%BB%8B%E7%A7%9F%E6%88%BF&correction=1&offset=10&limit=10&show_all_topics=0&search_hash_id=1ac2bad799a4632bd0da19d754d4ebdc&vertical_info=0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0'
// var url = 'https://www.zhihu.com/api/v4/search_v3?t=general&q=%E6%88%91%E7%88%B1%E6%88%91%E5%AE%B6&correction=1&offset=10&limit=10&show_all_topics=0&search_hash_id=eb656e5df8599ab234fe61eacd1f0f04&vertical_info=0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0'
// var url = 'https://www.zhihu.com/api/v4/search_v3?t=general&q=%E8%B4%B7%E6%AC%BE&correction=1&offset=10&limit=10&show_all_topics=0&search_hash_id=e1c70eb1ed612218c6e5037c9c150ccf&vertical_info=0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0'
// var url = 'https://www.zhihu.com/api/v4/search_v3?t=general&q=%E5%80%9F%E6%AC%BE&correction=1&offset=10&limit=10&show_all_topics=0&search_hash_id=1416102aac2857f1890ce8e030f1a9ca&vertical_info=0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0'
// var url = 'https://www.zhihu.com/api/v4/search_v3?t=general&q=%E9%87%91%E8%9E%8D&correction=1&offset=10&limit=10&show_all_topics=0&search_hash_id=b787f6183b37fae2460fed512206cda8&vertical_info=0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0'
// var url = 'https://www.zhihu.com/api/v4/search_v3?t=general&q=%E5%8D%8E%E5%B0%94%E8%A1%97&correction=1&offset=10&limit=10&show_all_topics=0&search_hash_id=b99052f0f75e9695f418107231db9734&vertical_info=0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0'
var url = 'https://www.zhihu.com/api/v4/search_v3?t=general&q=%E5%8D%8E%E4%B8%BA&correction=1&offset=10&limit=10&show_all_topics=0&search_hash_id=3274bdea950b457275634ba4a1a307fc&vertical_info=0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0'
function getContent(url) {
    axios.get(url).then(async function(res){
        console.log(res.data.data.length)
        for(item of res.data.data) {
            if(item.object.content) {
                var content = item.object.content.replace(/<[^>]+>/g,"")
                await esClient.index({
                    index: `my_test`,
                    type: 'doc',
                    id: item.object.created_time,
                    body: {
                        content: content
                    },
                })
            }
        }
        console.log(res.data.paging.is_end)
        if(res.data.paging.is_end) return 
        getContent(res.data.paging.next)
    })
    .catch(function(err){
        console.log(err);
    });
}
getContent(url)