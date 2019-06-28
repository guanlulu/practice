1. express 路由中的 res 正确用法 `res.status(状态码).send(...)`
2. put 请求, req.query, req.params 打印为空，正确取到前端传来的数据方法 `req.on('data',function(data) {}...)` ，注意此时取到的 data 是个 Buffer

   转换 Buffer ,`'' + data`

   ```js
   // Buffer对象转换成String
   data.toString('utf-8')
   // String转换成Buffer
   Buffer.from(text, 'utf-8')
   ```
3. `%25E5%258F%2591%25E8%25BF%2587%25E7%259A%2584`是`utf8编码再16进制展开字符串编码`
4. >RFC3986文档规定，Url中只允许包含英文字母（a-zA-Z）、数字（0-9）、-_.~4个特殊字符以及所有保留字符

    ```js
    // 下面列出了两个函数的安全字符（即函数不会对这些字符进行编码）
    // encodeURI（82个）：!#$&'()*+,/:;=?@-._~0-9a-zA-Z
    // encodeURIComponent（71个）：!'()*-._~0-9a-zA-Z
    // 对应 decodeURI decodeURIComponent
    ```
5. 
    ```js
    parseInt('123', 5) 
    // 将'123'看作5进制数，返回十进制数38 => 1*5^2 + 2*5^1 + 3*5^0 = 38
    // 如果第一个字符不能被转换成数字，parseInt返回NaN
    parseInt("546", 2);   
    // 除了“0、1”外，其它数字都不是有效二进制数字
    parseInt(4.7 * 1e22, 10); 
    // 非常大的数值变成 4
    parseInt(0.00000000000434, 10);  // 科学计数法 4.34e-11
    // 非常小的数值变成 4

    // paseInt首先调用参数的toString方法，JS中精度小于0.000001的数字会自动转化为科学计数的字符串(1e-6)
    // parseInt在匹配时，如果找到了以数字开头然后开始会匹配接下来的字符，直到找到不是数字的字符结束，然后输出匹配到的数字
    ```
6. 当前目录下打开 http-server ，但是浏览器却显示的上一层的 index.html,原因是浏览器的缓存机制，不是 http-server 的问题
    
    
