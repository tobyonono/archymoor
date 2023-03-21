import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { PressImgs, ArchiveImgs } from './components/GroupedMedia';
import Home from './pages/Home';
import Archive from './pages/Archive';
import BonnieHill from './pages/BonnieHill';



function App() {

  const [storyState, setStoryState] = useState(PressImgs);
  const [shouldClearTimeout, setClearTimeout] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);



  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home setStoryState={setStoryState} setClearTimeout={setClearTimeout} setStoryIndex={setStoryIndex} />} />
        <Route path="/archive" element={<Archive shouldClearTimeout={shouldClearTimeout} setClearTimeout={setClearTimeout} setStoryIndex={setStoryIndex} storyIndex={storyIndex} storyState={storyState} setStoryState={setStoryState} />} />
        <Route path="/bonniehill" element={<BonnieHill storyState={storyState} setStoryState={setStoryState} setClearTimeout={setClearTimeout} setStoryIndex={setStoryIndex} />} />

      </Routes>

    </div>
  );
}

export default App;
