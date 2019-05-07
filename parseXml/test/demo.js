var str = xmlToJs('<?xml version="1.0" encoding="utf-8"?><o><a>  <u n="1006_00010078" a="o" nm="fengchunyan" r="895" /> </a></o>')
console.log(str)
function xmlToJs(str) {
    // a
    // b
    // c ccnumber
    // f 是否进入话后处理（0-不进，1-进）
    // g gid_eid
    // k k=-1表示从批量外呼任务中添加或删除登陆坐席，此902状态不用向web端请求批量外呼状态
    // o
    // i CallId
    // m 模式
    // n        主叫号码
    // p 回拨号码/话机号码    IVR节点号  外呼显示号码
    // r 121消息  200表示成功收到   404
    // s 状态   被叫号码
    // t 被叫号码  分机号_企业号
    // q
    // n 分机号_企业号
    // v 2:网络 4：回拨 5：sip话机
    // z
    var arr = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'k',
        'o',
        'i',
        'm',
        'n',
        'p',
        'r',
        's',
        't',
        'q',
        'v',
        'z',
        'l',
        'u',
        'nm'
    ]
    var topName = ['cc', 'o', 'mn', 'i']
    var a = {}
    for (var top of topName) {
        if (xmlToDom(str).getElementsByTagName(top).length) {
            var xmlDom = xmlToDom(str).firstChild
            var obj = {}
            arr.map(val => {
                if (xmlDom.getAttribute(val)) {
                    obj[val] = xmlDom.getAttribute(val)
                } 
            })
            // 一级赋值
            a[top] = obj
            if (xmlToDom(str).firstChild.childNodes.length > 0) {
                // 获取所有子节点
                var childNodes = xmlToDom(str).firstChild
                var childArray = []

                for (var demo of childNodes.children) {
                    var childObj = {}
                    arr.map(val => {
                        if (demo.getAttribute(val)) {
                            childObj[val] = demo.getAttribute(val)
                        } 
                    })
                    childArray.push(childObj)
                    // 二级赋值
                    a[top][
                        xmlToDom(str).firstChild.children[0].tagName
                    ] = childArray
                    if (childNodes.children[0].children.length > 0) {
                        var childArray1 = []
                        for (var obj of childNodes.children[0].children) {
                            var childObj1 = {}
                            arr.map(val => {
                                if (obj.getAttribute(val)) {
                                    childObj1[val] = obj.getAttribute(val)
                                } 
                            })
                            childArray1.push(childObj1)
                            // 三级赋值
                            a[top][
                                xmlToDom(str).firstChild.children[0].tagName
                            ][
                                childNodes.children[0].children[0].tagName
                            ] = childArray1
                        }
                    }
                }
            }
        }
    }
    return a
}

// js -> xml
function jsToXml(obj, tagName) {
    var tag = xmlToDom('<' + tagName + '/>').getElementsByTagName(tagName)[0]
    for (var k in obj) {
        tag.setAttribute(k, obj[k])
    }
    return '<?xml version="1.0" encoding="utf-8"?>' + domToStr(tag)
}

function domToStr(node) {
    let tmpNode = document.createElement('div')
    tmpNode.appendChild(node)
    let str = tmpNode.innerHTML
    tmpNode = node = null // 解除引用，以便于垃圾回收
    return str
}

// https://blog.csdn.net/medivhq/article/details/44647329
function xmlToDom(xmlString) {
    var xmlDoc = null
    if (window.DOMParser) {
        try {
            var domParser = null
            domParser = new DOMParser()
            xmlDoc = domParser.parseFromString(xmlString, 'text/xml')
        } catch (e) {
            logger.error(e)
        }
    } else {
        return null
    }
    return xmlDoc
}