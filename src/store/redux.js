export function createStore(reducer,enhancer){
  if(enhancer){
    return enhancer(createStore)(reducer)
  }
  let currentState=undefined
  let currentListeners=[]
  function getState(){
    return currentState
  }
  function subscribe(listener){
    currentListeners.push(listener)
  }
  function dispatch(action){
    currentState=reducer(currentState,action)
    currentListeners.forEach(v=>v())
  }
  dispatch({type:'@IMOOC/KKB-REDUX'})
  return {getState,subscribe,dispatch}
}
export function applyMiddleware(...middlewares){
  return createStore=>(...args)=>{
    const store=createStore(...args)
    let dispatch=store.dispatch
    const midApi={
      getState:store.getState,
      dispatch:(...args)=>dispatch(...args)
    }
    const middlewarechain = middlewares.map(middleware=>middleware(midApi))
    dispatch=compose(...middlewarechain)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}
export function compose(...funcs){
  if(funcs.length===0){
    return arg=>arg
  }
  if(funcs.length===1){
    return funcs[0]
  }
  return funcs.reduce((left,right)=>(...args)=>right(left(...args)))
}