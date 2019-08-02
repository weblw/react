import React from 'react'

// 获取相应部分内容展示在指定位置
function Dialog(props){
  const messages={
    'foo':{title:'foo',content:'foo~'},
    'bar':{title:'bar',content:'bar~'}
  }
  const {body,footer}=props.children(messages[props.msg])
  return (
    <div style={{border:'1px solid blue'}}>
      {/* 此处显示的内容是动态生成的 */}
      {body}
      <div>{footer}</div>
    </div>
  )
}

export default function Composition(){
  return(
    <div>
      {/*执行显示消息的key*/}
      <Dialog msg='bar'>
        {/* 修改为函数形式，根据最终传入值生成最终内容 */}
        {({title,content})=>({
          body:(
            <>
              <h1>{title}</h1>
              <p>{content}</p>
            </>
          ),
          footer:<button onClick={()=>alert('react真好')}>确定</button>
        })} 
      </Dialog>
    </div>
  )
}