import React,{Component} from 'react'

import logo from './logo.svg'
import style from './index.module.css'

export default class JsxText extends Component{
  render(){
    const name='react study'
    const user={firstName:'tom',lastName:'jerry'}
    function formatName(user){
      return user.firstName+'-'+user.lastName
    }
    const greet=<p>hello,jerry</p>
    const arr=[1,2,3].map(num=><li key={num}>{num}</li>)
    return (
      <div>
        {/* 条件语句 */}
        {name?<h2>{name}</h2>:null}
        {/* 函数也是表达式 */}
        {formatName(user)}
        {/* jsx也是表达式 */}
        {greet}
        {/* 数组 */}
        <ul>{arr}</ul>
        {/* 属性 */}
        <img src={logo} className={style.img} alt='' />
      </div>
    )
  }
}