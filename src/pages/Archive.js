import '../App.css';
import React from 'react';
import SmallBio from '../components/SmallBio';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Story from '../components/Story/Story';
import Stories from 'react-insta-stories';
import { ArchiveImgs } from '../components/GroupedMedia';


const Archive = ({ storyState, storyIndex, setStoryState, shouldClearTimeout, setClearTimeout, setStoryIndex }) => {


      return (
        <>
            <div className='grid z-10 fixed top-0 w-full h-full bg-black'>

                <Stories
                    loop
                    keyboardNavigation
                    defaultInterval={9000}
                    stories={ArchiveImgs}
                    width={'100%'}
                    height={'100%'}
                    onStoryEnd={(s, st) => console.log("story ended", s, st)}
                    onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
                    onStoryStart={(s, st) => console.log("story started", s, st)}
                    storyStyles={{'object-fit': 'contain', width:'50%', 'height':'50%' }}
                    storyContainerStyles={{background:'black'}}
                    
                />
            </div>

            <Navbar setStoryState={setStoryState} setStoryIndex={setStoryIndex} setClearTimeout={setClearTimeout} />
            <SmallBio />
            <Footer />
        </>

    );

}

export default Archive;