import './App.css';

import { useState } from 'react';



function App() {
  // const [textInput, setText] = useState("")
  const [textQueue, updateQueue] = useState([])
  const [isEdit, editIndex] = useState(-1)

  function handleAdd(){
    updateQueue([...textQueue, document.getElementById('inputText').value])
  }
  
  function handleDelete(index){
    console.log(index)
    updateQueue(textQueue.filter((value, idx) => index !== idx))
    // updateQueue(textQueue.splice(index,1))
  }

  return (
    <>
      <input id='inputText' type="text" name="inputName" placeholder="Type here"/>
      <button onClick={ () => handleAdd() } >Add</button>
      <div>
        <ul>
          {textQueue.map((value, index)=>(
            <>
            <div key={index} id={index}>
              <li>{value}</li>
              <button onClick={ () => editIndex(index) } >Edit</button>
              {
                index === isEdit && {
                  
                }
              }
              <button onClick={ () => handleDelete(index) } >Delete</button>
            </div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
