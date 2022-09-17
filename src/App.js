import './App.css';
import Home from './Home';

import {Logo} from './logos/svgs.js';



function App() {
  return (
    <div className="App">
      <Home />
      <nav className="fixed bottom-12 md:bottom-unset md:top-4 md:left0 text-left p-0 md:p-4 z-10 w-full md:w-auto">
        <ul className="hidden md:flex flex-col text-white font-mono text-xs">
          <li>
            <button className="pointer-events-auto hover:opacity-100">
              <span className="w-12">001</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>Archive</span>
            </button>
          </li>
          <li>
            <button className="pointer-events-auto hover:opacity-100">
              <span className="w-12">002</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>BTS</span>
            </button>
          </li>
          <li>
            <button className="pointer-events-auto hover:opacity-100">
              <span className="w-12">003</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>Press</span>
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
      <footer className='fixed bottom-0 p-4 left-0 text-left z-10 text-sm text-white'>
      <Logo  />
      </footer>
      
    </div>
  );
}

export default App;
