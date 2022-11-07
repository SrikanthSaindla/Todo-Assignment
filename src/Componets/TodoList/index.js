import React,{memo} from 'react'
import "./index.css"

const TodoList = ( props) => {
    const{data,delFun,editTodo}=props
const delateList=()=>{
    delFun(data.id)
} 
  return (
    <div className='card'> 
     <h3>{data.title}</h3>
     <div> 
     <button className='btn2'
     onClick={()=>editTodo(data.id)}>Edit</button>
     <button className='btn2' 
     onClick={delateList}>Delate</button>
     </div>
     </div>
  )
}

export default memo(TodoList)
