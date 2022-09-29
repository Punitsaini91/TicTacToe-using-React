import React from 'react'
import { useState } from 'react';


export const Button = ({value}) => {
  const [turn,setTurn]=useState("x");
 
    const clickButton=(value)=>{
      

      if(turn==="x"){
        setTurn('0')
    }else{
        setTurn("x")
    }
         console.log("button is clicked...",value);

    }
   
  return (
    <div>
      <button onClick={()=>clickButton(value)}  className="buttons"></button>
    </div>
  )
}

