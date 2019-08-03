import React,{Component} from 'react'
// import JsxText from './JsxTest';
// import StateMgt from './components/StateMgt'
// import EventHandle from './components/EventHandle'
// import LifeCycle from './components/LifeCycle'
// import ContextTest from './components/ContextTest'
// import Hoc from './components/Hoc'
// import HocTest from './components/HocTest'
// import HocTest1 from './components/HocTest1'
// import Composition from './components/Composition'
// import Composition2 from './components/Composition2'
// import Composition3 from './components/Composition3'
// import Composition4 from './components/Composition4'
// import HookTest from './components/HookTest'
// import HookTest2 from './components/HookTest2'

// import Button from 'antd/lib/button'
// import 'antd/dist/antd.css'

// import WrappedNormalLoginForm from './components/WrappedNormalLoginForm'
// import KfromTest from './components/KformTest'
// import Dialog,{Dialog2} from './components/Dialog'
// import Tree from './components/Tree'
// import CommentList from './components/CommentList'

import ReduxTest from './components/ReduxTest'
// import MyReduxTest from './components/MyReduxTest'

class App extends Component{
  // state={props:'some content'}
  // componentDidMount(){
  //   this.setState({props:'new content'})
  //   setTimeout(()=>{
  //     this.setState({props:''})
  //   },2000)
  // }
  render(){
    return (
      <div>
        {/* <h2>{props.title}</h2> */}
        {/* <JsxText /> */}
        {/* <StateMgt /> */}
        {/* <EventHandle /> */}
        {/* <LifeCycle /> */}
        {/* {this.state.props && <LifeCycle props={this.state.props} />} */}
        {/* <ContextTest /> */}
        {/* <Hoc /> */}
        {/* <HocTest /> */}
        {/* <HocTest1 /> */}
        {/* <Composition /> */}
        {/* <Composition2 /> */}
        {/* <Composition3 /> */}
        {/* <Composition4 /> */}
        {/* <HookTest /> */}
        {/* <HookTest2 /> */}
        {/* <Button type='primary'>Button</Button> */}
        {/* <WrappedNormalLoginForm /> */}
        {/* <KfromTest /> */}
        {/* <Dialog>tets1</Dialog> */}
        {/* <Dialog2>test2</Dialog2> */}
        {/* <Tree /> */}
        {/* <CommentList /> */}
        <ReduxTest />
        {/* <MyReduxTest /> */}
      </div>
    )
  }  
}

export default App