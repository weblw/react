import React,{Component} from 'react'
// import store from '../store'
import {connect} from '../store/KreactRedux'
import {add,minus,asyncAdd} from '../store/conuter'

@connect(
  state=>({num:state.counter}),//映射状态树
  {
    // add:()=>({type:'add'}),//action creator
    // minus:()=>({type:'minus'}),//action creator
    // asyncAdd:()=>dispatch=>{
    //   setTimeout(()=>{
    //     // 异步结束后，手动执行dispatch
    //     dispatch({type:'add'})
    //   },1000)
    // }
    add,minus,asyncAdd
  }
)
class ReduxTest extends Component{
  render (){
    return (
      <div>
        <p>{this.props.num}</p>
        <div>
          <button onClick={this.props.add}>+</button>
          <button onClick={this.props.minus}>-</button>
          <button onClick={this.props.asyncAdd}>++</button>
        </div>
      </div>
    )
  }
}

export default ReduxTest