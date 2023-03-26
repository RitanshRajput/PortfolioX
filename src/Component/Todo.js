import React, {useState} from "react";
import {  AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import todo from "../Assets/todo.png" ;

const Todo =() => {

    const [inputData, setInputData] = useState(''); 
    const [items, setItems] = useState([]) ;

    const addItem = () => {

        if( !inputData) {
           alert("Task-box is empty enter some task");
        }
        else {
            setItems([...items, inputData]) ;
            setInputData("") ;
        }
    }

    const deleteItem = (id) => {
        const updatedItem = items.filter((elem, index) => {
            return index !== id ;
        }) ;

        setItems(updatedItem) ;
    }

   const removeAll = () => {
    setItems([]) ;
   }


    return(
       <div className="todo">
        <div className="main-container">
           <figure>
            <img src={todo} alt="todo image" />
            <figcaption>Add a Todo Task</figcaption>
           </figure>

           <div className="addItems">
            <input type="text"  value={inputData} onChange={(e)=> setInputData(e.target.value) }  maxLength={'22'} placeholder="Add a task..." />
            <AiOutlinePlus onClick={addItem} />
           </div>

           <div className="item-container">
             {
                items.map((elem, index) => {
                    return(
              <div className="showItems" key={index}>
                <div className="eachItem">
                  <h3 className="task" >{elem}</h3>  
                  <BsFillTrash3Fill onClick={()=> deleteItem(index)} className="trash" title="click to Delete" />
                </div>
             </div>
                    )
                })
             }
          </div>


           <div className="checkList">
            <button className="checkBtn" onClick={removeAll} ><span>Check List</span></button>
           </div>
        </div>
       </div>
    );
}

export default Todo ;