var nodemailer = require('nodemailer')


var transport = nodemailer.createTransport({
    // create reusable transporter object using the default SMTP transport
    host: "smtp.163.com",
    secureConnection: true,
    // secure: false, // true for 465, false for other ports
    port: 465, // STMP端口号，必须用465
    auth: {
        user: "email_gll@163.com", // 账号
        pass: "gll123456" // 授权码
    }
})

var html1 = `<table border="0" cellspacing="0" cellpadding="0" style="font-family:'微软雅黑',Helvetica,Arial,sans-serif;font-size:16px" width="100%">\
<tbody>\
    <tr>\
        <td >\
            <table width="100%" border="0" cellpadding="5" cellspacing="0" >\
                <tbody>\
                    <tr>\
                        <td>\
                            <p>尊敬的用户您好，欢迎使用米话呼叫中心，请在24小时内点击以下链接设置登录密码： <a href="{{url}}">{{url}}</a></p>\
                            <p>您的登陆地址为：{{loginUrl}}</p>\
                            <p>用户名为： {{userName}}</p>\
                            <hr>\
                            <p>南京易米云通网络科技有限公司</p>\
                            <p>地址：江苏南京江宁区秣周东路12号U谷2号楼14层</p>\
                            <p>电话：025-66693960</p>\
                        </td>\
                    </tr>\
                </tbody>\</table>\</td>\</tr>\</tbody>\</table>`
var html2 = `<p style="font-family:'微软雅黑',Helvetica,Arial,sans-serif;font-size:16px">尊敬的用户您好，欢迎使用米话呼叫中心，请在24小时内点击以下链接设置登录密码： <a href="{{url}}">{{url}}</a></p>\
<p style="font-family:'微软雅黑',Helvetica,Arial,sans-serif;font-size:16px">您的登陆地址为：{{loginUrl}}</p>\
<p style="font-family:'微软雅黑',Helvetica,Arial,sans-serif;font-size:16px">用户名为： {{userName}}</p>\
<hr>\
<p style="font-family:'微软雅黑',Helvetica,Arial,sans-serif;font-size:16px">南京易米云通网络科技有限公司</p>\
<p style="font-family:'微软雅黑',Helvetica,Arial,sans-serif;font-size:16px">地址：江苏南京江宁区秣周东路12号U谷2号楼14层</p>\
<p style="font-family:'微软雅黑',Helvetica,Arial,sans-serif;font-size:16px">电话：025-66693960</p>`

// 链接需要区分 需要2个query 
// init or reset
// systerm or enterprise    
// 1546496797000 
// 1546499666814  
var mailOption = {
    from: "易米云通 email_gll@163.com",
    to: "guanlulu@emicnet.com",
    subject: "【米话客服】米话呼叫中心服务通知",
    text: "Hello 这个要显示到什么地方",
    html: html2
}

transport.sendMail(mailOption,(err,res) => {
    if(err) {
        console.log(err)
    }else {
        console.log('发送成功')
        console.log(res)
    }
})

