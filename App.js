import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 
  
  const [task,setTask]=useState('')//used for changing state of input
  const[count,setCount]=useState(0)//for storing array values
  const [array,setArray]=useState([])
  const [checkingArr,setCheckingArr]=useState([])
  const [checking,setChecking]=useState('')
  const handleSubmit=()=>{setArray([...array,task])
                         }
  const isChecked=()=>{
                        for(let i=0;i<array.length;i++)
                        {
                          if(checking==array[i]) {
                            if(checkingArr[i]=='1'){checkingArr[i]='0'; alert(checkingArr[i]);}
                            else{checkingArr[i]='1';alert(checkingArr[i])}
                          }

                        }
  }
  
                         const element=array.map((num)=><li><input type="checkbox" value={num} onChange={(e)=>{setChecking(e.target.value)
                        isChecked();alert(checking)}}/> {num}</li>)
//const Delete=()=>
  return (
    <div className="App">
  <form>
    <label>
     Task:
      <input type="text" name="Task" placeholder="Add Task" onChange={(e)=>setTask(e.target.value)}/>
    </label>
  </form>
 
  <button onClick={handleSubmit}>Add</button>
  <button>Delete</button>
  <ul>{element}</ul>
 
   
    </div>
  );
}

export default App;
