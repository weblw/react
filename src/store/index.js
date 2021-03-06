import {createStore,applyMiddleware,combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {counterReducer} from './conuter'

// const counterReducer=(state=0,action)=>{
//   switch(action.type){
//     case 'add':
//       return state+1
//     case 'minus':
//       return state-1
//     default:
//       return state
//   }
// }

const store =createStore(
  combineReducers({counter:counterReducer}),
  applyMiddleware(logger,thunk)
)

export default store