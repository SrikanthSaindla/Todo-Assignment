import React,{useState} from 'react'
import { v4 as uuidv4} from  'uuid'
import "./App.css"
import TodoList from './Componets/TodoList'

const App = () => {
  const [data,setData]=useState('')
  const[list,setList]=useState([])
  const [edit,setEdit]=useState('')
  const FormHandler=(e)=>{
    e.preventDefault()
    if (edit){
      const ans=list.map((each)=>
      each.id===edit?
      (each={id:each.id,title:data}):
      ({id:each.id,title:each.title}));
      setList(ans)
      setEdit(0);
      setData('')
      return;
    }
     
    if(data<3){
     return alert("more letters")
    }
     const newTodo={
      id:uuidv4(),
       title:data
     }
     setList([...list,newTodo])
     setData('')
  }
  const delateHand=(id)=>{
    const res=list.filter((each)=>each.id!==id)
    setList(res)
  }

  const editTodo=(id)=>{
      const UniqueTodo=list.find((each)=>each.id===id)
      setData(UniqueTodo.title)
      setEdit(id)
  }
  return (
    <center>
      <div className='main_container'> 
      <h3>Todo Application</h3>
      <form onSubmit={FormHandler}>
        <input  type='text' placeholder='Todo'
        onChange={(e)=>setData(e.target.value)}
        value={data}/>&nbsp;
        <button type="submit"
        className='btn1'>{edit?"Edit":'Go'} </button>
      </form>
      {list.length>0?(list.map((each)=>(<TodoList data={each} key={each.id} delFun={delateHand}
      editTodo={editTodo}/>))):<h1>No Todo</h1>}
       
      </div>
    </center>
  )
}

export default App

