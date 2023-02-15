import React, { useState } from "react"
import Button  from 'react-bootstrap/Button'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
export function CountPeople() {
    const [entry,updateEntry]=useState(0);
  function login(){
    updateEntry(entry+1);
  }
const [exit,updateExit]=useState(0);
  function leave()
  {
    updateExit(exit+1);
  }
  return (
    <div className="container mt-5 ">
      <div className="container mt-5" style={{padding:"20% 30%"}}>
        <button onClick={login} style={{backgroundColor:"green"}}>Login</button>
        <p style={{display:"inline",marginLeft:"10px"}}>{entry} People Entered!!!</p>       
        <button onClick={leave} style={{backgroundColor:"green" ,marginLeft:"160px"} }>Exit</button>
        <p style={{display:"inline" , marginLeft:"10px",float:"right"}}>{exit} People Left!!!</p>
      </div>
    </div>
  );
}

export default CountPeople;
