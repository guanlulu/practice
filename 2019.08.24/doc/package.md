#### package.json

* package.json文件可以手工编写，也可以使用**npm init**命令自动生成

* npm init 时，用户需回答一些问题，只有项目名称（name）和项目版本（version）是必填的，其他都是选填的

#### 进一步

1. 最简单的 Package.json 文件，只有两个数据，他们是必须的，否则无法 install

   ```json
   {
   	"name": "xxx",
     "version": "1.0.0"
   }
   ```

2. scripts

   ```
   "scripts": {
       "dev": "node build/dev-server.js",
       "build": "node build/build.js",
       "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
       "test": "npm run unit",
       "lint": "eslint --ext .js,.vue src test/unit/specs"
     }
   ```

   **钩子**

   npm 脚本有`pre`和`post`两个钩子。举例来说，`build`脚本命令的钩子就是`prebuild`和`postbuild`

   ```
   "prebuild": "echo I run before the build script",
   "build": "cross-env NODE_ENV=production webpack",
   "postbuild": "echo I run after the build script"
   ```

   用户执行`npm run build`的时候，会自动按照下面的顺序执行

   ```
   npm run prebuild && npm run build && npm run postbuild
   // & 并行执行   && 继发执行（即只有前一个任务成功，才执行下一个任务）
   ```

   **简写形式**

   ```
   npm start
   npm stop
   npm test
   npm restart // 复合命令
   ```

   [npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

3. dependencies，devDependencies

分别指定了项目运行所依赖的模块、项目开发所需要的模块

4. config

   用于向环境变量输出值，可以被环境变量覆盖

   ```
   { 
     "name" : "foo", 
     "config" : { "port" : "8080" }, 
     "scripts" : { "start" : "node server.js" } 
   }
   ```

5. engines

   指明了改项目所需要的 node.js 版本

   ```
   "engines": {
      "node": ">= 4.0.0",
      "npm": ">= 3.0.0"
    }
   ```

6. bin

   许多包有一个或多个可执行文件希望被安装到系统路径

   在npm下要这么做非常容易(事实上，npm就是这么运行的)。

   这需要在你的package.json中提供一个bin字段，它是一个**命令名**和**本地文件名**的映射

   在安装时，如果是全局安装，npm将会使用符号链接把这些文件链接到prefix/bin，如果是本地安装，会链接到./node_modules/.bin/

   ```
   // 比如，要使用 myapp 作为命令时可以这样做：
   {
   	"bin": {
   			"myapp": "./cli.js"
   	}
   }
   // 这么一来，当你安装myapp，npm会从cli.js文件创建一个到/usr/local/bin/myapp的符号链接(这使你可以直接在命令行执行myapp)
   ```

#### npm 命令

```
npm init 
npm run // 查看当前项目的所有 npm 脚本命令
```

