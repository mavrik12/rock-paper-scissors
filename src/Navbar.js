import {React, useState, useEffect} from 'react';
import { ScissorsIcon } from '@heroicons/react/outline'
import Header from './Header';

export default function Navbar() {
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'> 
         <div className='flex items-center'>
         <Header />
         </div>
         <ScissorsIcon className= 'w-11 pr-2'/>
      </div>
      
    </div>
    
  )
}

