import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 
  let s=true;
  const [task,setTask]=useState('')//used for changing state of input
  const[count,setCount]=useState(0)//for storing array values
  const [array,setArray]=useState([])
 //e const [checkingArr,setCheckingArr]=useState([false])
  const [checking,setChecking]=useState('')
  const handleSubmit=()=>{setArray(array.concat({TASK : task,checkstatus: false}))}
 const handleDelete=()=>{setArray(array.filter(function(num,index){if(num.checkstatus==false)return num;}));}
                         
  const isChecked=(i)=>{ setArray(array.map(function(num,index){if(index===i){num.checkstatus=!(num.checkstatus);return num;}
                                                                    else return num;}));
                        setArray(array.sort(function(num,index){if(num.checkstatus==false)return 1;}));alert(array);
                       }
  const changePosition=()=>{
    
  }                     
                           
                        

                        
  
  
                       const element=array.map((num,i)=><li> <input type="checkbox" 
                                                                    checked={num.checkstatus}
                                                                     onChange={()=>{isChecked(i);
                                                                  
                                                                                    } }/>{num.TASK}</li>);//how error gone??ooooo it was toooo simple in onchange i passed i so my isChecked took that i it was unaware about the i that shld b passed now error is solved good
//const Delete=()=>
console.log(array);
  return (
    <div className="App">

    <label>
     Task: 
      <input type="text" name="Task" placeholder="Add Task" onChange={(e)=>setTask(e.target.value)}/>
    </label>
 
 
  <button onClick={handleSubmit}>Add</button>
  <button onClick={handleDelete}>Delete</button>
 <ul>{element}</ul>
 
   
    </div>
  );
}

export default App;
