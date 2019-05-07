var elasticsearch = require('elasticsearch')
var esClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'error'
})

const db = require('better-sqlite3')('./res.db')
db.prepare(`CREATE TABLE tb_result(keyword text, 
    group_ik integer, group_jieba integer, group_hanlp integer, ik integer,ik_pinyin integer);`).run()
const insert = db.prepare(
    `insert into tb_result(keyword,group_ik,group_jieba,group_hanlp,ik,ik_pinyin) values(@keyword,@group_ik,@group_jieba,@group_hanlp,@ik,@ik_pinyin)`
)
var arr = [ 
  '房价飞涨',
  '搬家',
  '百姓网',
  '赶集',
  '贝壳',
  '链家网',
  '安居客',
  '房天下',
  '租房子',
  '合租',
  '房屋产权',
  '价格实惠',
  '房产经纪',
  '房源',
  '直接出租',
  '距离最优',
  '房子便宜',
  '甲醛超标',
  '房屋维护',
  '整租与合租',
  '租房安全防范',
  '居住品质',
  '租房潜规则',
  '城中村',
  '被坑被骗',
  '正常合同',
  '黑中介',
  '开盘',
  '股票',
  '专栏作者',
  '大幅增长',
  '资本寒冬期',
  '全天成交额',
  '公司法定代表人',
  '持股比例',
  '日播放',
  '刷爆朋友圈',
  '突破升级',
  '亚洲金融危机',
  '美联储主席',
  '市场空间',
  '合作伙伴',
  '房地产市场',
  '规模最大',
  '比特币',
  '基金利率',
  '在线零售',
  '新机遇',
  '行政体制',
  '安卓系统',
  '解除合同',
  '租金指数',
  '手游',
  '售房信息',
  '租赁服务',
  '邻里之间',
  '申请贷款',
  '贷款APP',
  '委托贷款',
  '信用卡',
  '配套及规划建设',
  '贷款额度',
  '产品趋同化',
  '小微企业',
  '个体工商户',
  '房产抵押',
  '融资',
  '易耗品',
  '库存商品',
  '公积金',
  '股权结构',
  '保单贷款',
  '利息',
  '红利',
  '个人所得税',
  '互联网金融',
  '投资理财',
  '合同规定',
  '供油量',
  '借款人' ]

//   await client.indices.analyze({
//     index: 'my_text',
//     body: {
//         analyzer: 'ik_smart',
//         text: text
//     }
//   })
//   await client.indices.analyze({
//     index: 'my_text',
//     body: {
//         analyzer: 'jieba_search',
//         text: text
//     }
//   })
//   await client.indices.analyze({
//     index: 'my_text',
//     body: {
//         analyzer: 'hanlp_index',
//         text: text
//     }
//   })

async function group_search(keyword,analyzer) {
    var query = {
        bool: {
            should: [
                {
                    multi_match: {
                        type: "most_fields",
                        query: keyword,
                        analyzer: analyzer,
                        operator: "and",
                        fields: ["content", "content.jieba", "content.ik","content.hanlp"]
                    }
                },
                {
                    multi_match: {
                        type: "most_fields",
                        query: keyword,
                        operator: "and",
                        fields: ["content", "content.jieba", "content.ik","content.hanlp"]
                    }
                }
            ]
        }
    }
    var res = await esClient.search({
        index: `my_test`,
        body: {
            query: query,
            from: '0',
            size: '1000'
        }
    })
    return res.hits.total
}

async function search(keyword,analyzer,pinyin) {
    var query = {
		multi_match: {
			query: keyword,
			analyzer: analyzer,
			operator: "and",
			fields: pinyin ? ["content.pinyin"] : ["content.ik"]
		}
	}
    var res = await esClient.search({
        index: `my_test`,
        body: {
            query: query,
            from: '0',
            size: '1000'
        }
    })
    return res.hits.total
}



async function saveRes(kw) {
        var group_ik = await group_search(kw,'ik_smart')
        var group_jieba = await group_search(kw,'jieba_search')
        var group_hanlp = await group_search(kw,'hanlp_index')
        var ik = await search(kw,'my_ik_smart',false)
        var ik_pinyin = await search(kw,'my_ik_smart_pinyin',true)
        insert.run({
            keyword: kw,
            group_ik: group_ik,
            group_jieba: group_jieba,
            group_hanlp: group_hanlp,
            ik: ik,
            ik_pinyin: ik_pinyin
        })
}

for(kw of arr) {
    saveRes(kw)
}
