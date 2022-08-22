import React, { useState, useEffect } from "react";

export default function PlayButton(props){


  
    return (
    
       <div className= "grid justify-center bg-zinc-200">
         <button className='w-60 h-20'onClick={props.onClickPlay}>Play</button>
       
        
     </div>
    )
   
}