import React, { useState, useEffect, useRef } from "react";
import "./Story.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Story = ({ onClose, stories, storyIndex, setStoryIndex, shouldClearTimeout, setClearTimeout }) => {

    const [storyPaused, setStoryPaused] = useState(false);
    const storyIndexRef = useRef(0);
    const animationEndRef = useRef(false);

    useEffect(() => {
        const img = document.getElementById("video");
        const ended = img.classList.contains("progress-bar-finished");
        if (ended)
        {
            console.log(ended);
            if (storyIndexRef.current === stories.length - 1) {
                onClose();
            }
            else {
                setStoryIndex((value) => value + 1);
            }
        }
    }, []);

    useEffect(() => {
        storyIndexRef.current = storyIndex;
        console.log(storyIndex);
    }, [storyIndex]);



    /*
    useEffect(() => {
        if (storyPaused) {
            document.getElementById("video").pause();
        }
        else {
            document.getElementById("video").play();
        }
    }, [storyPaused]);
*/
     useEffect(() => {

        if (!stories[storyIndex].duration) {
            const storyTimeout = setTimeout(() => {
                setStoryIndex((value) => (value + 1) % stories.length);
                console.log('timeout sh');
            }, 7000);

            return () => {
                // clears timeout before running the new effect
                clearTimeout(storyTimeout);
                setClearTimeout(false);
              };
        }
        
    }, [stories, stories.length, storyIndex, shouldClearTimeout]);

    const onClickStory = (element) => {
        if (element.className === "story-container")
            onClose();
    }

    const getProgressBarClassName = (index) => {
        if (index < storyIndex) {
            return "progress-bar progress-bar-finished";
        }
        else if (index === storyIndex) {
            return storyPaused ? "progress-bar progress-bar-active progress-bar-paused" : "progress-bar progress-bar-active";
        }
        else {
            return "progress-bar";
        }
    }

    return (
        <div  className="story-container">
            <div className="story">

                <div className="progress-bars">
                    {stories.map((story, index) => (
                        <div key={index} className={`progress-bar-container  `}>
                            <div style={{ animationDuration: `${story?.duration ?? 7}s` }} className={getProgressBarClassName(index)}></div>
                        </div>
                    ))}
                </div>
                <div className="video">
                    <img className=''onClick={(e) => setStoryIndex((value) => value + 1)} id="video" src={stories[storyIndex].url} autoPlay></img>
                    {storyIndex !== 0 && <ChevronLeftIcon onClick={(e) => setStoryIndex((value) => value - 1)} className="previous hoverable" />}
                    {storyIndex !== stories.length - 1 && <ChevronRightIcon onClick={(e) => setStoryIndex((value) => value + 1)} className="next hoverable" />}
                </div>
            </div>
        </div>
    );
}

export default Story;
