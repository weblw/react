import React,{Component} from 'react'

// 模拟数据
const lessons=[
  {stage:'React',title:'核心API'},
  { stage: "React", title: "组件化1" }, 
  { stage: "React", title: "组件化2" } 
]

// 高阶组件withContent负责包装传入组件Comp
// 包装之后能够根据传入的索引获取课程数据，真实案例中可以通过api查询
const withContent=Comp=>props=>{
  const content=lessons[props.idx]
  return <Comp {...content} />
}

const withLog=Comp=>{
  return class extends Component{
    render(){
      return <Comp {...this.props} />
    }
    componentDidMount(){
      console.log('didMount',this.props)
    }
  }
}

function Lesson(props){
  return (
    <div>
      {props.stage}-{props.title}
    </div>
  )
}

const LeessonWithContent=withLog(withContent(Lesson))

export default function HocTest1(){
  return (
    <div>
      {[0,0,0].map((item,index)=>(
        <LeessonWithContent idx={index} key={index} />
      ))}
    </div>
  )
}