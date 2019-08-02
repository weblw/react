import React from 'react'

function Dialog(props){
  return <div style={{border:'1px solid blue'}}>{props.children}</div>
}

export default function Composition(){
  return(
    <div>
      {/* 传入显示内容 */}
      <Dialog>
        <h1>组件复合</h1>
        <p>复合组件给你走狗的敏捷性</p>
      </Dialog>
    </div>
  )
}