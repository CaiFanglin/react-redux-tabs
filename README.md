# React-redux-tabs

#### desc：
- 利用redux和相关第三方库实现tabs的切换，异步获取相关数据等。

#### 运行:
- tips：可打开开发者工具Redux查看数据状态变化
- 第一种方法：`npm start` 
- 第二种方法：`npm run build`
             `npm install -g serve`
             `serve -s build`
             
#### 问题：
- 1.首次进入tabs时，会在componentDidMount阶段去执行dispatch获取数据，这个地方需要数据的请求可以在页面载入前预加载，可优化~
- 2.当文件content-length过大时，请求会很慢，可尝试使用blob或者buffer的形式传递接收数据，此处可优化~
