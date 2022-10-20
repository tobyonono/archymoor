import { Press, Archive } from './GroupedMedia';
import useState from 'react';

const Navbar = ({setStoryState, setStoryIndex, setClearTimeout}) => {
  
    return(
        <nav className="fixed bottom-12 md:bottom-unset md:top-4 md:left0 text-left p-0 md:p-4 z-10 w-full md:w-auto">
        <ul className="hidden md:flex flex-col  text-white font-mono text-sm">
          <li className='active:border-blue-400'>
            <button className="pointer-events-auto opacity-50 hover:opacity-100 active:text-white"
              onClick={
                () => {
                  setStoryState(Press);
                  setStoryIndex(0);
                  setClearTimeout(true);
                  console.log('clicked')
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
                  setStoryIndex(0);
                  setClearTimeout(true);
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
    )
}

export default Navbar;