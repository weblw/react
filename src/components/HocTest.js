import React,{Component} from 'react'

const Context =React.createContext()
const Provider =Context.Provider
const Consumer =Context.Consumer

function withConsumer(Consumer){
  return Comp=>props=>{
    return <Consumer>{value=><Comp {...value} {...props} /> }</Consumer>
  }
}

// child显示计数器，并能够修改它，多个child之间共享数据
// 新的Child是通过withConsumer（Consumer）返回的高阶组件包装所得
const Child=withConsumer(Consumer)(function(props){
  return <div onClick={()=>props.add()} title={props.name}>{props.counter}</div>
})

export default class ContextTest extends Component{
  constructor(){
    super()
    this.state={
      counter:0
    }
  }
  add=()=>{
    this.setState({
      counter:this.state.counter+1
    })
    this.setState({counter:this.state.counter+1})
  }
  render(){
    return (
      <Provider value={{counter:this.state.counter,add:this.add}}>
        {/* 改造过的Child可以自动从Consumer获取值，能够直接使用 */}
        <Child name='foo' />
        <Child name='bar' />
      </Provider>
    )
  }
}