import React, { useState,useEffect } from 'react';
import './App.css';
import Home from './Home';
import { Press, Archive } from './components/GroupedMedia';
import { Logo } from './logos/svgs.js';



function App() {

  const [storyState, setStoryState] = useState(Press);
  useEffect(() => {
    
  }, [storyState]);
  const [currentId, setCurrentId] = useState(0);
  return (
    <div className="App">
      <div className='zIndexOverride'>
        <Home storyView={storyState} storyID={currentId} />
      </div>

      <nav className="fixed bottom-12 md:bottom-unset md:top-4 md:left0 text-left p-0 md:p-4 z-10 w-full md:w-auto">
        <ul className="hidden md:flex flex-col  text-white font-mono text-sm">
          <li className='active:border-blue-400'>
            <button className="pointer-events-auto opacity-50 hover:opacity-100 active:text-white"
              onClick={
                () => {
                  setStoryState(Press);
                  setCurrentId(-1)
                }
              }>
              <span className="w-12">001</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>HOME</span>
            </button>
          </li>
          <li>
            <button className="pointer-events-auto opacity-50 hover:opacity-100" 
            onClick={
                () => {
                  setStoryState(Archive);
                  setCurrentId(-1)
                }
              }>
              <span className="w-12">002</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>ARCHIVE</span>
            </button>
          </li>
          <li>
            <button className="pointer-events-auto opacity-50 hover:opacity-100">
              <span className="w-12">003</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>BTS</span>
            </button>
          </li>
          <li>
            <button className="pointer-events-auto opacity-50 hover:opacity-100">
              <span className="w-12">004</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>PRESS</span>
            </button>
          </li>
        </ul>
      </nav>
      <aside className='fixed top-4 right-0 text-right p-4 z-10 text-sm text-white '>
        <p className='w-56'> Archy Moor is a 21 year old Nigerian born, Irish multidisciplinary artist based in Dublin.</p>
        <p className='mb-2'>
          <button className='hover:underline'>+ More Info</button>
        </p>
        <p>
          <a className='hover:underline' href='mailto:archy@archymoor.co'>archy@archymoor.co</a>
        </p>

      </aside>
      <footer className='fixed bottom-0 p-4 pb-10 left-0 text-left z-10 text-sm text-white'>
        <Logo className='' />
        <div className='fixed bottom-0 left-0 right-0'>
          <button className='w-full py-1 text-center text-black h-8 bg-white/100 hover:bg-white/90 uppercase'>
            005 - Words
          </button>
        </div>
      </footer>

    </div>
  );
}

export default App;
