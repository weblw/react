import React from 'react'

// 获取相应部分内容展示在指定位置
function Dialog(props){
  return (
    <div style={{border:'1px solid blue'}}>
      {props.children.default}
      <div>{props.children.footer}</div>
    </div>
  )
}

export default function Composition(){
  return(
    <div>
      {/* 传入显示内容 */}
      <Dialog>
        {{
          default:(
            <>
              <h1>组件复合</h1>
              <p>复合组件给你走狗的敏捷性</p>
            </>
          ),
          footer:<button onClick={()=>alert('react真好')}>确定</button>
        }}        
      </Dialog>
    </div>
  )
}