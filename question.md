# 问题汇总
#### 1.render中使用js外层需加标签

```
render () {
    <p>      // 需要外层标签，否则报语法错误
        {list.map((item, index) => {
            return (<span key={index}>item</span>)
        })}
    </p>
}
```

#### 2.文字截断
    >多行截断
    `
    width: 100%;
    text-overflow: ellipsis;
    white-space: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* autoprefixer: off */     // 需要加这2行，-webkit-box-orient才生效
    -webkit-box-orient: vertical;
    /* autoprefixer: on */

    /* Firefox */
    display:-moz-box;
    -moz-box-orient: vertical;

    /* W3C */
    display:box;
    box-orient: vertical;
   `

   >单行截断
   <code>
    overflow:hidden;  /*超过部分不显示*/
    text-overflow:ellipsis;  /*超过部分用点点表示*/
    white-space:nowrap;/*不换行*/
   </code>

#### 3.在开发者工具中观察redux的状态变化

  `const store = applyMiddleware(thunkMiddleware)(createStore)(Reducer));`
改成：
  `const store = applyMiddleware(thunkMiddleware)(createStore)(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());`

#### 4.本地静态资源的fetch路径

    本code是以create-react-app构建的，其静态资源位于public中，其默认的__dirname是public的路径


