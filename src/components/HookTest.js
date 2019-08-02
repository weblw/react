import React,{useState} from 'react'

function FruitAdd(props){
  // 输入内容状态及设置内容状态的方法
  const [pname,setPname]=useState('')
  // 键盘事件处理
  const onAddFruit=e=>{
    if(e.key=='Enter'){
      props.onAddFruit(pname)
      setPname('')
    }
  }
  return (
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

function FruitList({fruits,onsetFruit}){
  return (
    <ul>
      {
        fruits.map(f=>(
          <li key={f} onClick={()=>onsetFruit(f)}>
            {f}
          </li>
        ))
      }
    </ul>
  )
}

export default function HookTest(){
  // useState(initialState)，接收初始状态，返回一个由状态和其更新函数组成的数组
  const [fruits,setFruit]=useState(['香蕉','西瓜'])
  return (
    <div>      
      {/* 添加列表组件 */}
      <FruitList fruits={fruits} onsetFruit={setFruit} />
      <FruitAdd onAddFruit={pname=>setFruit([...fruits,pname])} />
    </div>
  )
}
