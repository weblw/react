// reducer创建
export const counterReducer =(state=0,action)=>{
  // const num=action.payload||1
  switch(action.type){
    case 'add':
      return state+1
    case 'minus':
      return state-1
    default:
      return state
  }
}

// action creator
export const add=num=>({type:'add'})
export const minus=num=>({type:'minus'})
// 异步调用返回的是函数
export const asyncAdd=(dispatch,getState)=>dispatch=>{
  // 异步调用执行在这里操作
  setTimeout(()=>{
    dispatch({type:'add'})
  },1000)
}