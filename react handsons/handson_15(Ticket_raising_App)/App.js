import React,{useState} from 'react';
import './App.css';


function App() {
  const [id,setId]=useState(0);
  function handleForm()
  {
    setId(id+1);
    const name=document.getElementById("name").value;
    alert("Thanks!! "+name+"\r\nYour Complaint was Submitted \r\nTransaction ID is "+id);
  }

  return (
   <div className="container mt-5">
     <table>
       <tr>
         <td>Name:</td>
         <td>
           <input type="text" id="name"></input>
         </td>
       </tr>
       <tr>
         <td>Complaint:</td>
         <td>
           <input type="text"></input>
         </td>
       </tr>
       <tr>
         <td></td>
         <td>
           <button onClick={handleForm}>Submit</button>
         </td>
       </tr>
     </table>
   </div>
  );
}

export default App;
