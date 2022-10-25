import '../App.css';
import './Home.css';
import React from 'react';
import SmallBio from '../components/SmallBio';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Videos } from '../components/GroupedMedia';


const Home = ({ setStoryState, setClearTimeout, setStoryIndex }) => {


    return (
        <>
            <div className='z-10 fixed top-0 w-full h-full bg-black p-0 md:p-4'>
                <div className='grid grid-cols-2 gap-4 place-items-center h-full'>
                    <div className='w-full'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/T_8GyZZyJPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
                        <div className='text-white ' >
                            <h2 className='font-mono uppercase text-lg'>Beautiful</h2>
                            <h6 className='font-mono uppercase text-xs'>Produced By <a className="border-b hover:border-dashed" href="https://www.instagram.com/earlsaga/" target="_blank"> Earl Saga </a></h6>
                            <h6 className='font-mono uppercase text-xs'>Directed By <a className="border-b hover:border-dashed" href="https://www.instagram.com/evancahill/" target="_blank"> Evan Cahill</a></h6>
                            <h6 className='font-mono uppercase text-xs'>© ℗ ODDS 2022</h6>
                        </div>
                    </div>
                    <div className='h-full w-full'>
                        <div class="grid grid-cols-4 grid-rows-4 gap-4 h-full grid-background">
                            <div>01</div>
                            <div>01</div>
                            <div>
                                <video autoplay="autoplay" loop="loop" muted>
                                    <source src={Videos[1]} type="video/mp4" />
                                    Sorry, your browser doesn't support videos.
                                </video>
                            </div>
                            <div>01</div>
                            <div>01</div>
                            <div>
                            <video autoplay="autoplay" loop="loop" muted>
                                    <source src={Videos[2]} type="video/mp4" />
                                    Sorry, your browser doesn't support videos.
                                </video>
                            </div>
                            <div>01</div>
                            <div>01</div>
                            <div>01</div>
                            <div>01</div>
                            <div>01</div>
                            <div>
                            <video autoplay="autoplay" loop="loop" muted>
                                    <source src={Videos[3]} type="video/mp4" />
                                    Sorry, your browser doesn't support videos.
                                </video>
                            </div>
                            <div>01</div>
                            <div>01</div>
                            <div>
                            <video autoplay="autoplay" loop="loop" muted>
                                    <source src={Videos[0]} type="video/mp4" />
                                    Sorry, your browser doesn't support videos.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Navbar setStoryState={setStoryState} setStoryIndex={setStoryIndex} setClearTimeout={setClearTimeout} />
            <SmallBio />
            <Footer />
        </>

    );
}

export default Home;