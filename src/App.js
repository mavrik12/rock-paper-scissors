import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import PlayButton from './PlayButton';
import ResetButton from './ResetButton';
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from '@heroicons/react/outline'
import RockImage from "./Assets/noun-rock-88661.png"
import PaperImage from "./Assets/noun-paper-88662.png"
import ScissorsImage from "./Assets/noun-scissors-88666.png"
import QuestionMarkImage from "./Assets/noun-question-1101884.png"
import { click } from '@testing-library/user-event/dist/click';





function App() {

  const [userChoice, setUserChoice] = useState('Rock')
  const [clickedPlay, setClickedPlay] = useState(false)
  const [randomNumber, setRandomNumber] = useState(0)

  function WinMessage(){
    if(userChoice === 'Rock' && randomNumber === 1){
    return <h1 className="font-mono text-3xl text-bold text-center my-5 font-bold">Draw!</h1> }
    else if (userChoice === 'Rock' && randomNumber === 2){ 
      return <h1 className="font-mono text-3xl text-bold text-center my-5 font-bold">Defeat!</h1>
    }
    else if (userChoice === 'Rock' && randomNumber === 3){
      return <h1 className="font-mono text-3xl text-bold text-center my-5 font-bold">Victory!</h1>
    }
    else if (userChoice === 'Paper' && randomNumber === 1){
      return <h1 className="font-mono text-3xl text-bold text-center my-5 font-bold">Victory!</h1>
    }
    else if (userChoice === 'Paper' && randomNumber === 2){
      return <h1 className="font-mono text-3xl text-bold text-center my-5 font-bold" >Draw!</h1>
    }
    else if (userChoice === 'Paper' && randomNumber === 3){
      return <h1 className="font-mono text-3xl text-bold text-center my-5 font-bold" >Defeat!</h1>
    }
    else if (userChoice === 'Scissors' && randomNumber === 1){
      return <h1 className="font-mono text-3xl text-bold text-center my-5 font-bold" >Defeat!</h1>
    }
    else if (userChoice === 'Scissors' && randomNumber === 2){
      return <h1 className="font-mono text-3xl text-bold text-center my-5 font-bold">Victory!</h1>
    }
    else if (userChoice === 'Scissors' && randomNumber === 3){
      return <h1 className="font-mono text-3xl text-bold text-center my-5 font-bold" >Draw!</h1>
    }
  }

  
  function handleClickPlay(){
         setClickedPlay(true)
         setRandomNumber(Math.floor(Math.random() * 3 + 1))   
      }
    
      function handleClickReset(){
        setClickedPlay(false)
        setRandomNumber(0)
      }

  function handleSetUserChoice(){
    if (userChoice === 'Rock'){
      setUserChoice("Paper")
    }
    else if (userChoice === "Paper"){
      setUserChoice("Scissors")
    }
    else{
      setUserChoice("Rock")
    }
  }

  function handleSetPrevUserChoice(){
     if(userChoice === 'Rock'){
       setUserChoice("Scissors")
     }
     else if(userChoice === "Scissors"){
       setUserChoice("Paper")
     }
       else {
         setUserChoice("Rock")
       
     }

  }

  
  return (
    
    <div>
      <Navbar />

      <div className=" bg-zinc-200 ">
  <div className="p-10 grid grid-cols-2 gap-x-6">
    <div className=" border-black 	border-4 flex rounded-md p-2 ">
      
       <div className = "">
         <h1 className ="text-3xl font-bold mr-4 sm:text-4xl text-center mt-8  ">Human Choice</h1>

          {userChoice === 'Rock' && <img className="" src={RockImage} />}
          {userChoice === 'Paper' && <img className="" src={PaperImage} />}
          {userChoice === 'Scissors' && <img className="" src={ScissorsImage} />}

        </div>
       
    </div>
    
    
    <div class = " border-black border-4 flex rounded-md p-2 ">
        <div className = "">
         <h1 className ="text-center text-bold mt-8 text-3xl font-bold mr-4 sm:text-4xl ">AI Choice</h1>
          {!clickedPlay && <img className="" src={QuestionMarkImage} />}
          {randomNumber === 1 && <img className="" src={RockImage} />}
          {randomNumber === 2 && <img className="" src={PaperImage} />}
          {randomNumber === 3 && <img className="" src={ScissorsImage} />}
              
        </div>
    </div>
    <div className = "">
         
          <div className= " grid grid-cols-3 ">
           <button className= "mt-2" onClick={handleSetPrevUserChoice} disabled={clickedPlay}><ChevronDoubleLeftIcon className="h-10 w-20" /></button>

            {userChoice === "Rock" && <h1 className= "text-3xl text-bold text-center mt-4  font-mono font-bold ">Rock</h1>}
            {userChoice === "Paper" && <h1 className= "text-3xl text-bold text-center mt-4 font-mono font-bold">Paper</h1>}
            {userChoice === "Scissors" && <h1 className= "text-3xl text-bold text-center mt-4 font-mono font-bold">Scissors</h1>}

            <button className="mt-2" onClick={handleSetPrevUserChoice} disabled={clickedPlay}><ChevronDoubleRightIcon className="h-10 w-60" /></button>
         </div>
        </div>
    <div >
      {!clickedPlay && <h1 className = "text-3xl text-bold text-center mt-4 font-mono font-bold">?</h1>}
      {randomNumber === 1 && <h1 className = "text-3xl text-bold text-center mt-4 font-mono font-bold">Rock</h1>}
      {randomNumber === 2 && <h1 className = "text-3xl text-bold text-center mt-4 font-mono font-bold">Paper</h1>}
      {randomNumber === 3 && <h1 className = "text-3xl text-bold text-center mt-4 font-mono font-bold">Scissors</h1>}
    </div>
  </div>
</div>

<div className= "bg-zinc-200 grid justify-center ">
<WinMessage />
</div>

 
{!clickedPlay ? <PlayButton onClickPlay={handleClickPlay}/> : <ResetButton onClickReset ={handleClickReset} />}
      


    </div>
  );
}

export default App;
