import SinglePress from "../components/SinglePress";
import { PressVideos } from '../components/GroupedMedia';
import SmallBio from '../components/SmallBio';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Press = ({storyState, setStoryState, setClearTimeout, setStoryIndex}) => {

    return (
        <>
            <div className="z-10 fixed top-0 w-full h-full bg-black p-0 md:p-5 overflow-y-auto">
                <div className="grid grid-cols-3 gap-4 ">
                   <a href="https://guap.co/on-our-radar-archy-moor-archymoor/"> <SinglePress name={'Guap'} video={PressVideos[0]} /> </a>
                    <a href="https://notion.online/fresh-face-archy-moor/"><SinglePress name={'Notion'} video={PressVideos[1]} /></a>
                    <a href="https://culted.com/culted-sounds-archy-moor-talks-vulnerability-through-music-south-korea-and-favourite-tracks/"><SinglePress name={'Culted'} video={PressVideos[2]} /></a>
                    <a href="https://www.thelineofbestfit.com/tracks/archy-moor-have-it-in-my-hands"><SinglePress name={'The Line of Best Fit'} video={PressVideos[3]} /></a>
                    <a href="https://www.wonderlandmagazine.com/2023/02/10/wonderlist-central-cee-2/"><SinglePress name={'Wonderland'} video={PressVideos[4]} /></a>
                    <a href="https://www.newwavemagazine.com/single-post/get-to-know-rising-irish-lyricist-archy-moor"><SinglePress name={'New Wave'} video={PressVideos[5]} /></a>


                </div>


            </div>
            <Navbar setStoryState={setStoryState} setStoryIndex={setStoryIndex} setClearTimeout={setClearTimeout} />
            <SmallBio />
            <Footer />

        </>
    )
}

export default Press;