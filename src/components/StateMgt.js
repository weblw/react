import React,{Component} from 'react'
import {useState,useEffect} from 'react'

export default function StateMgt(){
  return (
    <div>
      <Clock change={()=>{}}/>
    </div>
  )
}
class Clock extends Component{
  constructor(props){
    super(props)
    this.state={
      data:new Date(),
      counter:0
    }
  }
  componentDidMount(){
    this.timerID=setInterval(()=>{
      this.setState({
        data:new Date()
      },()=>{
        this.props.change(this.state.data)
      })
    },1000)
    this.setState({counter:this.state.counter+1})
    this.setState({counter:this.state.counter+1})
    this.setState({counter:this.state.counter+1})
    this.setState((state,props)=>({counter:state.counter+1}))
    this.setState((state,props)=>({counter:state.counter+1}))
    this.setState((state,props)=>({counter:state.counter+1}))
    // console.log(this.state.counter)
    setTimeout(()=>{
      // console.log(this.state.counter)
    },0)
    document.body.addEventListener('click',this.changeValue,false)
  }
  changeValue=()=>{
    this.setState({counter:this.state.counter+1})
    // console.log(this.state.counter)
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  render(){
    return(
      <div>
        {this.state.data.toLocaleTimeString()}
        <ClockFunc />
      </div>
    ) 
    
  } 
}



function ClockFunc(){
  const [date,setDate]=useState(new Date())
  useEffect(()=>{
    const timerID=setInterval(()=>{
      setDate(new Date())
    },1000)
    return ()=>clearInterval(timerID)
  },[])
  return <div>{date.toLocaleTimeString()}</div>
}