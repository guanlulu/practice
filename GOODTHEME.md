* 封装Message

  ```
  https://segmentfault.com/a/1190000020173021
  ```

* code split

  ```
  https://www.zcfy.cc/article/3-code-splitting-patterns-for-vuejs-and-webpack-4218.html?t=
  https://juejin.im/entry/5a9e5a0d5188255584538023
  https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk
  https://www.jb51.net/article/128846.htm
  https://blog.51cto.com/13869008/2164811
  ```

* 304 VS 200 from memory cache VS 200 from disk cache

* file-loader 相对于 url-loader 功能更加强大

  ```
  https://www.jb51.net/article/150301.htm
  ```

* webpack

  ```
  https://segmentfault.com/a/1190000011333071
  https://zhuanlan.zhihu.com/p/63070053
  https://www.kancloud.cn/attanhao/someweb/548624
  https://www.cnblogs.com/pomelott/p/8977092.html
  https://juejin.im/post/5aed5624f265da0b9526fc6e
  https://www.jianshu.com/p/e83e382cb693
  https://hackernoon.com/a-complete-workshop-build-your-es6-code-into-a-library-using-webpack-80295faeb833
  ```

* canvas

  ```
  https://www.jianshu.com/p/587381056df4
  https://www.runoob.com/jsref/dom-obj-canvas.html
  https://segmentfault.com/a/1190000020122791
  https://www.runoob.com/mysql/mysql-join.html
  ```

* npm 设置淘宝代理

  ```
  https://www.jianshu.com/p/e7164dba7479
  ```

* eslint + prettier

  ```
  https://segmentfault.com/a/1190000015315545
  ```

* new Date() VS Date.now()

  ```
  https://cloud.tencent.com/developer/ask/93246/answer/163657
  https://www.jianshu.com/p/d9e0de8c43d3
  ```

* 单例模式

  ```
  https://segmentfault.com/a/1190000015384478?utm_source=tag-newest
  ```

* js 继承

  ```
  https://www.jianshu.com/p/4d491a18b3f0
  https://segmentfault.com/a/1190000014478360(面试题)
  ```

* 伪数组转数组

  ```
  https://www.jianshu.com/p/bc541afad6ee
  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  
  Array.prototype.slice.call(arguments)
  [].slice.call(arguments)
  es6 语法
  ```

* extends （class Either extends Functor）

* 函数式编程

  ```
  https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/
  // 函数柯里化
  http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html
  ```

* 原型链

  ```
  https://github.com/getify/You-Dont-Know-JS
  http://dmitrysoshnikov.com/ecmascript/javascript-the-core/#an-object
  
  https://www.jianshu.com/p/8561d115003a
  ```

* 媒体查询

* Web SQL VS IndexDB

* webworker

  ```
  为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质
  ```

* 取消某个 commit 点

  ```
  https://blog.csdn.net/yxlshk/article/details/79944535
  
  git reset —hard commitid
  git push -f
  
  git revert -n commitid
  git commit - m 'msg'(可能会出现冲突)
  git push
  ```

* localeCompare 其他浏览器支持并不好，如何解决

* 消息提醒除了定时器还有什么方法

* vue.use() 做了什么

  ```
  https://segmentfault.com/a/1190000012296163?utm_source=tag-newest#articleHeader1
  ```

* 父子元素同时addeventListener...

* pointer-events:none

  ```
  https://www.cnblogs.com/92cz/p/5787693.html 有很多例子
  https://www.imooc.com/article/48022
  ```

* Event-loop

  ```
  http://www.ruanyifeng.com/blog/2014/10/event-loop.html
  https://my.oschina.net/junyiz/blog/1627970
  https://juejin.im/post/5ccfe8876fb9a032092e9cf4
  ```

* BOM

  ```
  https://www.jianshu.com/p/0c8b34111e95
  ```

* 本地预览文档

  ```
  https://segmentfault.com/a/1190000019904622
  ```

* 感兴趣的vue项目

  ```
  https://github.com/youhonglian/Vue-bilibili
  https://github.com/Jexordexan/vue-slicksort
  https://github.com/Leocardoso94/animated-number-vue
  https://github.com/vrajroham/vue-circle-progress
  https://github.com/dreamback/vue-route-transition
  https://github.com/TonPC64/vue-spinkit
  ```

* vue 函数式组件 render

  ```
  https://www.cnblogs.com/camille666/p/vue_instance_prop_el_template_render.html
  ```

* flip 动画

* transition-group v-move 定位

* Vue animate transition 共用
  appear 初始渲染过度

* computed get set

* 放大缩小布局不变

* 感兴趣的博客

  ```
  https://github.com/godbasin/godbasin.github.io
  https://github.com/qq449245884/xiaozhi
  https://github.com/Advanced-Frontend/Daily-Interview-Question
  https://surmon.me/
  // 前端外刊评论
  https://qianduan.group/
  https://github.com/mqyqingfeng/Blog
  ```

* Vue的虚拟DOM算法

  ```
  https://www.zhihu.com/question/61064119/answer/183717717
  
  key 的特殊属性主要用在 Vue的虚拟DOM算法，在新旧nodes对比时辨识VNodes。如果不使用key，Vue会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用key，它会基于key的变化重新排列元素顺序，并且会移除key不存在的元素。
  
  有相同父元素的子元素必须有独特的key。重复的key会造成渲染错误
  
  https://blog.csdn.net/violetjack0808/article/details/79354852
  ```

* vue v-for

* ```
  http://larabase.com/collection/2/post/117
  https://www.cnblogs.com/zhuzhenwei918/p/6893496.html
  https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1
  http://www.bslxx.com/a/vue/2017/1129/1470.html
  ```

* Css 动画性能（重绘与重排）

  ```
  https://www.cnblogs.com/Kuro-P/p/8676771.html
  ```

* 组件过度

  ```
  https://cn.vuejs.org/v2/guide/transitions.html#%E6%A6%82%E8%BF%B0
  ```

* 样式为什么要受换行的影响

* watch 深度监听

  ```
  https://www.cnblogs.com/yesu/p/9546458.html
  ```

* arcgis js api

* DOMContentLoaded与load的区别

  ```
  https://www.cnblogs.com/caizhenbo/p/6679478.html
  ```

* 微信小程序

  ```
  // 介绍一些开发地址
  https://www.zhihu.com/question/50907897
  https://juejin.im/post/5b2856e9f265da597568ad4a
  // 前端生成图片用于分享朋友圈最终解决方案
  https://developers.weixin.qq.com/community/develop/article/doc/0006ccfba245502a6bf76a61d51c13
  // 公共组件
  https://www.cnblogs.com/kdcg/p/9115778.html
  // 微信中跳转页面(例如： 影视站)
  ```

* 前端生成图片(html2canvas)

  ```
  https://www.jianshu.com/p/22bd5b98e38a
  https://ethan.pub/?p=846
  https://segmentfault.com/a/1190000011478657
  https://developers.weixin.qq.com/community/develop/article/doc/0006ccfba245502a6bf76a61d51c13
  https://www.jianshu.com/p/22bd5b98e38a
  https://www.bootcdn.cn/html2canvas/
  https://github.com/niklasvh/html2canvas
  ```

* Vue 图片裁剪

  ```
  https://segmentfault.com/a/1190000019563890
  https://www.cnblogs.com/lizimeme/p/8303709.html
  ```

* css Tricks

  ```
  https://qishaoxuan.github.io/css_tricks/
  ```

* 算法推荐

  ```
  https://www.zhihu.com/question/23256183
  ```

* 浏览器缓存机制

  ```
  https://www.jianshu.com/p/54cc04190252
  ```

* http、querystring、body_parse

* 上传图片 base64

* 按住图片重新排列图片顺序

* NodeJS整合银联网关支付

  ```
  https://www.jb51.net/article/96911.htm
  ```

* Vue 解析

  ```
  https://ustbhuangyi.github.io/vue-analysis/?tdsourcetag=s_pctim_aiomsg
  
  // Vue中的DOM异步更新策略和nextTick机制的解析
  https://segmentfault.com/a/1190000013314893#articleHeader0
  ```

* 在线表格，类似 excel

  ```
  https://github.com/MathiasPaumgarten/spread
  ```

* 动画

  ```
  https://zhuanlan.zhihu.com/p/67869546?utm_source=qq&utm_medium=social&utm_oi=28832237092864
  
  https://codepen.io/chriscoyier/pen/urkCd
  https://www.sitepoint.com/mastering-css3-7-cool-text-shadow-samples-you-cant-miss/
  https://www.crazyegg.com/blog/css3-text-shadow-effects/
  https://freefrontend.com/css-text-shadow-effects/
  https://tympanus.net/codrops/css_reference/text-shadow/
  https://www.midwinter-dg.com/blog_demos/css-text-shadows/
  https://gist.github.com/teetteet/3843538
  http://www.css3.info/preview/box-shadow/
  http://www.howtocreate.co.uk/textshadow.html
  https://html-css-js.com/css/generator/text-shadow/
  https://www.mockplus.com/blog/post/loading-animation
  https://www.mockplus.com/blog/post/css-animation-examples
  过度
  http://css3.bradshawenterprises.com/transitions/
  https://zellwk.com/blog/css-transitions/
  https://learn.shayhowe.com/advanced-html-css/transitions-animations/
  例子
  https://codepen.io/nazarelen/pen/gbLXYK
  https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users/
  https://www.mockplus.com/blog/post/css-animation-examples
  ```

* 正则表达式

  ```
  http://www.mamicode.com/info-detail-1940193.html
  ```

* 阿里云免费学习资源库（云计算、大数据、安全类）

  ```
  https://help.aliyun.com/learn/learningpath?source=5176.11533457&userCode=r3yteowb&type=copy
  ```

* throttle debounce

  ```
  https://segmentfault.com/a/1190000010211209
  ```

* 文本模拟

  ```
  https://loremipsum.io/
  ```

* 高亮

  ```
  https://github.com/TonPC64/vue-highlight-text
  https://github.com/weixianlove/search-highlight-demo
  https://github.com/Neamar/document-highlighter
  https://github.com/dwyl/search-result-keyword-highlighter
  https://github.com/julmot/mark.js/blob/master/src/lib/mark.js
  ```

* 多端统一开发解决方案 框架

  ```
  https://taro.aotu.io/
  ```

* vue-cli 多级路由

  ```
  https://blog.csdn.net/chen1218chen/article/details/74373491
  https://www.jb51.net/article/117679.htm
  https://blog.csdn.net/zhouzuoluo/article/details/81211275
  https://www.cnblogs.com/sakura-lifangfang/p/9675996.html
  https://www.jianshu.com/p/2003155cd717
  https://blog.csdn.net/yangyiboshigou/article/details/72123785
  https://blog.csdn.net/Fabulous1111/article/details/78859203
  https://qianduan.group/posts/59ca2d1683b5711571924f05
  http://www.voidcn.com/article/p-zagjtxqe-bmq.html
  https://juejin.im/post/595b4d776fb9a06bbe7dba56
  https://www.zhihu.com/question/38213423
  https://github.com/mayufo/vue-study
  ```

* axios 请求与响应拦截

  ```
  https://www.jianshu.com/p/115b4c79a75d
  https://juejin.im/entry/59a3794751882524382f65ac
  https://www.kancloud.cn/yunye/axios/234847
  https://zhuanlan.zhihu.com/p/44719636
  http://web.jobbole.com/94838/
  https://juejin.im/entry/59a3794751882524382f65ac
  https://www.jianshu.com/p/115b4c79a75d
  
  // 封装
  https://zhuanlan.zhihu.com/p/44719636
  ```

* 自定义指令

  ```
  https://juejin.im/post/58be0c181b69e6006b2cca1e
  https://blog.csdn.net/u010419337/article/details/80875428
  https://www.jianshu.com/p/47c086dab73d
  https://www.colabug.com/2948402.html
  https://juejin.im/post/5bf2c6766fb9a049bc4c42ef
  https://www.jianshu.com/p/e6041a6e9255
  https://juejin.im/post/5bc5c48f6fb9a05d09658093
  https://juejin.im/post/5b40dd70e51d45195f0af4a2
  ```

* slot

  ```
  https://juejin.im/post/5c64e11151882562e4726d98
  ```

* 自定义事件的触发dispatchEvent

  ```
  https://www.jianshu.com/p/5f9027722204
  ```

* HTML5实现视频直播功能思路详解

  ```
  https://m.jb51.net/html5/587215.html
  ```

* Access-Control-Allow-Origin 后不能写正则

  ```
  * 全部放开
  然后写个中间件判断 origin 
  ```






* 面试合集

  ```
  https://segmentfault.com/a/1190000012428851
  https://segmentfault.com/a/1190000011038090
  https://segmentfault.com/a/1190000018794544
  https://segmentfault.com/a/1190000018869555
  https://segmentfault.com/a/1190000019156097
  https://segmentfault.com/a/1190000017283341
  // 某一道面试题
  https://blog.csdn.net/xiaye_go/article/details/83897115
  https://www.cnblogs.com/SRH151219/p/10405154.html
  https://segmentfault.com/a/1190000008475665
  // 完全理解JS--arguments
  https://www.jianshu.com/p/e6bfa4bdf718
  // JavaScript中的Object.defineProperty()和defineProperties()
  https://segmentfault.com/a/1190000011294519
  // BigInt：JavaScript 中的任意精度整数
  https://blog.csdn.net/vca54lu0kv27w8zzbd/article/details/80178041
  ```


* 其他

  ```
  https://www.runoob.com/w3cnote/window-getcomputedstyle-method.html
  https://www.jianshu.com/p/824eb6f9dda4
  https://segmentfault.com/a/1190000019879537
  https://segmentfault.com/a/1190000019901078
  sgo  类似 http-server
  ```
