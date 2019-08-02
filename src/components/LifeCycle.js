import React,{Component} from 'react'
export default class LifeCycle extends Component{
  constructor(props){
    super(props)
    console.log('1组件构造函数执行')
  }
  componentWillMount(){
    console.log('2组件将要挂载')
  }
  componentDidMount(){
    console.log('3组件已经挂在')
  }
  componentWillReceiveProps(nextProps,nextState){
    // 父组件传递的值有变化，做相应的响应
    console.log('4将要接收属性')
  }
  shouldComponentUpdate(){
    // 组件是否需要更新，需要返回布尔值结果，优化点
    console.log('5组件是否需要更新')
    return true
  }
  componentWillUpdate(){
    // 组件将要更新，可做更新统计
    console.log('6组件将要更新')
  }
  componentDidUpdate(){
    // 组件更新
    console.log('7组件已更新')
  }
  componentWillUnmount(){
    // 组件将要卸载，可做清理工作
    console.log('8组件将要卸载')
  }
  render(){
    console.log('组件渲染')
    return <div>组件生命周期</div>
  }
}