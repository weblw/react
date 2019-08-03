// reducer创建
export const counterReducer =(state=0,action)=>{
  const num=action.payload||1
  switch(action.type){
    case 'add':
      return state+num
    case 'minus':
      return state-num
    default:
      return state
  }
}

// action creator
export const add=num=>({type:'add',payload:num})
export const minus=num=>({type:'minus',payload:num})
// 异步调用返回的是函数
export const asyncAdd=(dispatch,getState)=>dispatch=>{
  // 异步调用执行在这里操作
  setTimeout(()=>{
    dispatch({type:'add'})
  },1000)
}