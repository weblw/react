import React,{Component} from 'react'
import {From,Icon,Input,Button} from 'antd'

class NormalLoginFrom extends Component{
  handleSubmit=e=>{
    e.preventDefault()
    this.props.form.validateFields((err,values)=>{
      if(!err){
        console.log("Received values of form:",values)
      }
    })
  }
  render(){
    const {getFieldDecorator}=this.props.form
    return (
      <From onSubmit={this.handleSubmit} className='login-from'>
        <From.Item>
          {getFieldDecorator('userName',{
            rules:[{required:true,message:'请输入用户名！'}]
          })(
            <Input prefix={<Icon type='user' style={{color:'agba(0,0,0,.25)'}} />} placeholder='用户名' />
          )}
        </From.Item>
        <From.Item>
          {getFieldDecorator('password',{
            rules:[{required:true,message:'请输入密码'}]
          })(
            <Input 
              prefix={<Icon type='lock' style={{color:'rgba(0,0,0,.25)'}} />}
              type='password'
              placeholder='password'
            />
          )}
        </From.Item>
        <From.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Log in
          </Button>
        </From.Item>
      </From>
    )
  }
}

const WrappedNormalLoginForm=From.create({name:'normal_login'})(NormalLoginFrom)
export default WrappedNormalLoginForm