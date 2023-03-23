import '../App.css';
import React from 'react';
import SmallBio from '../components/SmallBio';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Stories from 'react-insta-stories';
import { PressImgs } from '../components/GroupedMedia';



const BonnieHill = ({ storyState, setStoryState, setClearTimeout, setStoryIndex }) => {


    return (
        <>
            <div className='grid z-10 fixed top-0 w-full h-full bg-black'>

                <Stories
                    loop
                    keyboardNavigation
                    defaultInterval={9000}
                    stories={PressImgs}
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

export default BonnieHill;