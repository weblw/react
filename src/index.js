import React from 'react'
import ReactDom from 'react-dom'

import App from './App'
import store from './store'
import {Provider} from './store/KreactRedux'

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)


// import logo from './logo.svg'
// import style from './index.module.css'
// // 可以使用变量
// const name='react study'
// const jsx1=<h2>{name}</h2>
// // 可以使用函数
// const user= {firstName:'tom',lastName:'jerry'}
// function formatName(user){
//   return user.firstName+'-'+user.lastName
// }
// const jsx2=<h2>{formatName(user)}</h2>
// // 可以使用jsx
// const greet=<p>hello,jerry</p>
// const jsx3=<h2>{greet}</h2>
// // 可以使用三元表达式
// const showTitle=true
// const title=name?<h2>{name}</h2>:null
// const jsx4=(
//   <div>{title}</div>
// )
// // 数组使用情况
// const arr=[1,2,3].map(num=><li key={num}>{num}</li>)
// const jsx5=(
//   <div>
//     <ul>{arr}</ul>
//   </div>
// )
// // 属性的使用
// const jsx6=(
//   <div>
//     <img src={logo} style={{width:100}} className={style.img} />
//   </div>
// )
// const render=()=>{
//   ReactDom.render(
//     <App title='可开吧真不错'/>,
//     document.getElementById('root')
//   )
// }

// render()

// store.subscribe(render)