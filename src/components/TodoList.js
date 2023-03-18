import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/action/actions";

const TodoList=()=>{
    const todoData=useSelector((state)=>state.addToDOList)
    const dispatch=useDispatch();
    const [inputVaule,setInputVlue]=useState('');
    const inputFunct=(event)=>{
        setInputVlue(event.target.value)
    }
    console.log(todoData)
    return(
    <>
        <div>
            <input type='text' placeholder="Todo Items " value={inputVaule} onChange={inputFunct}/>
            <button onClick={()=>{dispatch(addTodo(inputVaule));setInputVlue('')}}>Add Items</button>
        </div>
        <div >
            {
               todoData? todoData.list.map((data)=>{
                return (
                    <h1 key={data.id}>{data.data}<button onClick={()=>{dispatch(removeTodo(data.id))}}>Delete</button></h1>
                    
                )
               }):null
            }
        </div>
        </>

    )
}
export default TodoList