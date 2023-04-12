import SinglePress from "../components/SinglePress";
import { PressVideos } from '../components/GroupedMedia';
import SmallBio from '../components/SmallBio';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Shows = ({storyState, setStoryState, setClearTimeout, setStoryIndex}) => {

    return (
        <>
            <div className="z-10 fixed top-0 w-full h-full bg-black p-0 md:p-5">
                <div className="h-full w-full flex items-center justify-center">
                  <h1 className="text-white uppercase font-mono">No Upcoming Shows</h1>

                </div>


            </div>
            <Navbar setStoryState={setStoryState} setStoryIndex={setStoryIndex} setClearTimeout={setClearTimeout} />
            <SmallBio />
            <Footer />

        </>
    )
}

export default Shows;