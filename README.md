## hillstone
web 框架：koa(http://koajs.cn/),router使用了koa-router。
    
ORM框架：typeorm（https://typeorm.bootcss.com/）。
    
SSR：服务器端渲染（Server-Side Rendering）。
     
mock server：提供mock数据。


## step1
全局安装 typescript
    
npm i typescript -g

## step2
安装依赖
   
npm install

## step3
     
启动项目（注意ormconfig.js中数据库的配置，配置错误将无法启动项目）
    
npm start

## step4
    
开浏览器，输入http://localhost:3000/user
     
至此您就可以使用该项目实现SSR；或者做mock server提供mock数据的服务；或者作为系统后端提供后端服务。
