import React,{useState,useEffect,useReducer,useContext} from 'react'

// 仅展示水果列表
function FruitList({fruits,onSetFruit}){
  return(
    <ul>
      {fruits.map(f=>(
        <li key={f} onClick={()=>onSetFruit(f)}>
          {f}
        </li>
      ))}
    </ul>
  )
}
// 声明输入组件
function FruitAdd(props){
  // 使用useContext获取上下文
  const {dispatch}=useContext(Context)
  // 输入内容状态及设置状态的方法
  const [pname,setPname]=useState('')
  // 键盘事件处理
  const onAddFruit=e=>{
    if(e.key==='Enter'){
      dispatch({type:'add',payload:pname})
      setPname('')
    }
  }
  return(
    <div>
      <input
        type='text'
        value={pname}
        onChange={e=>setPname(e.target.value)}
        onKeyDown={onAddFruit}
      />
    </div>
  )
}

// 添加fruit状态维护fruitReducer
// 理解为vuex里面mutations
function fruitReducer(state,action){
  switch(action.type){
    case "init":
      return action.payload;
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
}

// 创建上下文
const Context = React.createContext()

export default function HooksTest(){
  const [fruit,setFruit]=useState('')
  const [fruits,dispatch]=useReducer(fruitReducer,[])
  useEffect(()=>{
    setTimeout(()=>{
      dispatch({type:'init',payload:["香蕉", "西瓜"]})
    },1000)
  },[])
  useEffect(()=>{
    document.title=fruit
  },[fruit])
  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log('msg')
    },1000)
    return function(){
      clearInterval(timer)
    }
  },[])
  return (
    <Context.Provider value={{fruits,dispatch}}>
      <div>
        <FruitAdd />
        <p>{fruit===''?'请选择喜爱的水果：':`你的选择是：${fruit}`}</p>
        {/* 列表 */}
        <FruitList fruits={fruits} onSetFruit={setFruit} />
      </div>
    </Context.Provider>
  )
}