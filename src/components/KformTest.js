import React, { Component } from 'react'
import { Input, Button } from 'antd'
// 创建高阶组件
function KFormCreate(Comp) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.options = {
        // 存放表单配置项
      }
      this.state = {
        // 存放表单值
      }
    }
    // 全局校验
    validateFields = cb => {
      const rets = Object.keys(this.options).map(field => {
        return this.validateField(field)
      })
      // every每一项都返回true，结果才是true
      const ret = rets.every(v => v)
      // 将校验结果传出去，并传递数据
      cb(ret, this.state)
    }
    // 单项校验
    validateField = field => {
      // 校验规则
      const { rules } = this.options[field]
      // 校验：ret如果是false，校验失败
      // some:有一项返回true，结果就是true
      const ret = !rules.some(rule => {
        if (rule.required) {
          // 获取校验项的值
          if (!this.state[field]) {
            // 必填项失败
            // 设置错误信息
            this.setState({
              [field + 'Message']: rule.message
            })
            return true
          }
        }
        return false// 校验通过
      })
      // 所有校验都成功，清理错误信息
      if(ret){
        this.setState({
          [field+'Message']:''
        })
      }
      return ret
    }
    // 变更处理
    handleChange=e=>{
      const {name,value} =e.target
      this.setState({
        [name]:value
      },
      ()=>{
        this.validateField(name)
      })
    }
    getFieldDec=(field,option)=>{
      this.options[field]=option
      // 返回一个装饰器（高阶组件）
      return InputComp=>{
        return (
          <div>
            {
              React.cloneElement(InputComp,{
                name:field,// 控件name
                value:this.state[field]||'',
                onChange:this.handleChange // 输入变化监听回调
              })
            }
            {/* 校验错误信息 */}
            {
              this.state[field+'Message']&&(
                <p style={{color:'red'}}>{this.state[field+'Message']}</p>
              )
            }
          </div>
        )
      }
    }
    render(){
      return(
        <Comp 
          {...this.props}
          getFieldDec={this.getFieldDec}
          validateFields={this.validateFields}
        />
      )
    }
  }
}

@KFormCreate
class KformTest extends Component{
  onLogin=()=>{
    // 校验
    this.props.validateFields((isValid,data)=>{
      if(isValid){
        console.log('登录成功')
      }else{
        alert('校验失败')
      }
    })
  }
  render(){
    const {getFieldDec}=this.props
    return (
      <div>
        {/* 接收两个参数返回一个装饰器 */}
        {getFieldDec('username',{
          rules:[{required:true,message:'请输入用户名'}]
        })(<Input type='text' />)}
        {
          getFieldDec('password',{
            rules:[{required:true,message:'请输入密码'}]
          })(<Input type='password' />)
        }
        <Button onClick={this.onLogin}>登录</Button>
      </div>
    )
  }
}

export default KformTest