import '../App.css';
import React from 'react';
import SmallBio from '../components/SmallBio';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Story from '../components/Story/Story';

const Archive = ({ storyState, storyIndex, setStoryState, shouldClearTimeout, setClearTimeout, setStoryIndex }) => {


    return (
        <>
            <div className='zIndexOverride'>
                Archive
                <Story stories={storyState} onClose={'x'} storyIndex={storyIndex} setStoryIndex={setStoryIndex} shouldClearTimeout={shouldClearTimeout} setClearTimeout={setClearTimeout} />
            </div>
            <Navbar setStoryState={setStoryState} setStoryIndex={setStoryIndex} setClearTimeout={setClearTimeout} />
            <SmallBio />
            <Footer />
        </>

    );
}

export default Archive;