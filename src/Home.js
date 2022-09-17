import './App.css';
import React from 'react';
import Stories from 'react-insta-stories';
import Press from './components/GroupedMedia';

/*
const story = [
    {
        url: 'https://cdn.sanity.io/images/md0qc5tt/production/1252cfbc94caeda432f491cea66d64766d85d442-2500x1875.jpg?w=2000&q=70&fit=clip&auto=format'
    },
    {
        url:
            'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN'
    },
    {
        url:
            'https://pbs.twimg.com/profile_images/1566206945001967620/_Ucvrwmz_400x400.jpg'
    },
    {
        url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        type: 'video',
    },
    {
        url:
            'https://player.vimeo.com/video/706552308?h=6758e0235c&background=1&autopause=0',
        type: 'video'
    },
    'https://pbs.twimg.com/media/EpL6oGyXEAAhFl2?format=jpg&name=large'
];

*/

const Home = () => {
    
    /*const [currentId, setCurrentId] = useState(0);*/
    return (
        <Stories className='bg-black'
            /*currentIndex={currentId}*/
            loop
            keyboardNavigation
            defaultInterval={8000}
            stories={Press}

            width={'100vw'}
            height={'100vh'}
        />
    );
}

export default Home;