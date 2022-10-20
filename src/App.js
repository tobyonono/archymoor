import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Home from './Home';
import { Press, Archive } from './components/GroupedMedia';
import Story from './components/Story/Story';
import { Logo, WhatsApp, Twitter, Facebook } from './icons/svgs.js';
import Modal from './components/Modal';
import Navbar from './components/Navbar';

function App() {

  const [storyState, setStoryState] = useState(Press);
  const [shouldClearTimeout, setClearTimeout] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);

 

    return (
    <div className="App">
      <div className='zIndexOverride'>

       {/* <Home storyView={storyState} storyID={currentId} /> */}
        <Story stories={storyState} onClose={'x'} storyIndex={storyIndex} setStoryIndex={setStoryIndex} shouldClearTimeout={shouldClearTimeout} setClearTimeout={setClearTimeout} />
      </div>

      <Navbar setStoryState={setStoryState} setStoryIndex={setStoryIndex} setClearTimeout={setClearTimeout} />
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
        {showModal && <Modal setShowModal={setShowModal} showModal={showModal} />}
        <Logo className='' />
        <div>
          <div className='flex fixed bottom-0 p-4 pb-10 right-0'>
            <Twitter />
            <Facebook />
            <WhatsApp />
          </div>
        </div>
        <div className='fixed bottom-0 left-0 right-0'>
          <button onClick={() => setShowModal(!showModal)} className='w-full font-mono py-1 text-center text-black h-8 bg-white/100 hover:bg-white/90 uppercase'>
            005 - Words
          </button>
        </div>
      </footer>

    </div>
  );
}

export default App;
