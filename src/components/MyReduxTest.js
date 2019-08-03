import React,{Component} from 'react'
import {createStore} from '../store/redux'
import {applyMiddleware} from '../store/redux'

const counterReducer = (state=0,action)=>{
  switch(action.type){
    case 'add':
      return state+1
    case 'minus':
      return state-1
    default:
      return state
  }
}

function logger({dispatch,getState}){
  return dispatch=>action=>{
    // 中间件任务
    console.log(action.type+'执行了')
    // 下一个中间件
    return dispatch(action)
  }
}

const thunk=(({getState})=>dispatch=>action=>{
  // thunk逻辑：处理函数action
  if(typeof action=='function'){
    return action(dispatch,getState)
  }
  // 不是函数直接跳过
  return dispatch(action)
})

const store=createStore(counterReducer,applyMiddleware(logger,thunk))

export default class MyReduxTest extends Component{
  componentDidMount(){
    store.subscribe(()=>this.forceUpdate())
  }
  render(){
    return (
      <div>
        {store.getState()}
        <button onClick={()=>store.dispatch({type:'add'})}>+</button>
        <button onClick={()=>store.dispatch(()=>{
          setTimeout(()=>{
            store.dispatch({type:'add'})
          },1000)
        })}>++</button>
      </div>
    )
  }
}