import { Press, Archive } from './GroupedMedia';
import useState from 'react';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import { PressImgs, ArchiveImgs } from '../components/GroupedMedia';



const Navbar = ({ setStoryState, setStoryIndex, setClearTimeout }) => {

  return (
    <nav className="fixed  md:bottom-unset md:top-4 md:left0 text-left p-0 md:p-4 z-10 w-full md:w-auto">
      <ul className="hidden md:flex flex-col  text-white font-mono text-sm">
        <li className='active:border-blue-400'>
          <NavLink to='/' className={({ isActive }) =>
            isActive ? 'opacity-100 border-b' : 'opacity-50 hover:opacity-100 '
          } end >
            <button className="pointer-events-auto hover:opacity-100 "
              onClick={
                () => {
                  setStoryState(PressImgs);
                  setStoryIndex(0);
                  setClearTimeout(true);
                  console.log('clicked')
                }
              }>
              <span className="w-12">001</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>HOME</span>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/archive' className={({ isActive }) =>
            isActive ? 'opacity-100 border-b ' : 'opacity-50 hover:opacity-100 '
          } >
            <button className="pointer-events-auto"
              onClick={
                () => {
                  setStoryState(ArchiveImgs);
                  setStoryIndex(0);
                  setClearTimeout(true);
                }
              }>
              <span className="w-12">002</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>ARCHIVE</span>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/bts' className={({ isActive }) =>
            isActive ? 'opacity-100 border-b' : 'opacity-50 hover:opacity-100 border-dashed'
          }>

            <button className="pointer-events-auto ">
              <span className="w-12">003</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>BTS</span>
            </button>
          </NavLink>
        </li>
        <li>
        <NavLink to='/press' className={({ isActive }) =>
            isActive ? 'opacity-100 border-b' : 'opacity-50 hover:opacity-100 border-dashed'
          }>

            <button className="pointer-events-auto ">
              <span className="w-12">004</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>PRESS</span>
            </button>
          </NavLink>
        </li>
        <li>
          
            <button className="pointer-events-auto opacity-50 hover:opacity-100">
              <span className="w-12">005</span>
              <span className='w-12 ml-1 mr-1'>-</span>
              <span>SHOWS</span>
            </button>
          
        </li>
      </ul>
      <ul className=" fixed md:hidden flex flex-col text-white bottom-unset top-4 left0 text-left p-4 w-auto">
        <li>
          <div class="space-y-2">
            <span class="block w-8 h-0.5 bg-white"></span>
            <span class="block w-8 h-0.5 bg-white"></span>
            <span class="block w-5 h-0.5 bg-white"></span>
          </div>
        </li>
      </ul>
    </nav >
  )
}

export default Navbar;