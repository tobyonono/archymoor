import '../App.css';
import React from 'react';
import SmallBio from '../components/SmallBio';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



const BonnieHill = ({setStoryState,setClearTimeout,setStoryIndex}) => {


    return (
        <>
            <div className='grid z-10 fixed top-0 w-full h-full bg-black'>

Bonnie Hill
</div>
            <Navbar setStoryState={setStoryState} setStoryIndex={setStoryIndex} setClearTimeout={setClearTimeout} />
            <SmallBio />
            <Footer />
            </>

    );
}

export default BonnieHill;