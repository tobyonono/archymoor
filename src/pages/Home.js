import '../App.css';
import './Home.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import SmallBio from '../components/SmallBio';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Videos } from '../components/GroupedMedia';
import { SpotifyNowPlaying } from '../components/SpotifyNowPlaying';


const Home = ({ setStoryState, setClearTimeout, setStoryIndex }) => {


    return (
        <>
            <div className='z-10 fixed top-0 w-full h-full bg-black p-0 md:p-4 overflow-y-auto'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 place-items-center h-full'>
                    <div className='w-full lg:py-6 z-10 '>
                        <div className='w-4/5 flex flex-col  justify-center'>
                        <section className='py-20'>
                                <div className='aspect-w-16 aspect-h-9'>
                                    <iframe src="https://www.youtube.com/embed/unI8t0k_q50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

                                </div>
                                <div className='text-white ' >
                                    <h2 className='font-mono uppercase text-lg'>Pray My Ma</h2>
                                    <h6 className='font-mono uppercase text-xs'>Produced By <a className="border-b hover:border-dashed" href="https://www.instagram.com/earlsaga/" target="_blank"> Earl Saga </a></h6>
                                    <h6 className='font-mono uppercase text-xs'>Directed By <a className="border-b hover:border-dashed" href="https://www.instagram.com/earlsaga/" target="_blank"> Earl Saga</a></h6>
                                    <h6 className='font-mono uppercase text-xs'>© ℗ ODDS 2023</h6>
                                </div>
                            </section>
                            <section className='py-20'>
                                <div className='aspect-w-16 aspect-h-9'>
                                    <iframe src="https://www.youtube.com/embed/XXKbKx5aHwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

                                </div>
                                <div className='text-white ' >
                                    <h2 className='font-mono uppercase text-lg'>I've Been</h2>
                                    <h6 className='font-mono uppercase text-xs'>Produced By <a className="border-b hover:border-dashed" href="https://www.instagram.com/earlsaga/" target="_blank"> Earl Saga </a></h6>
                                    <h6 className='font-mono uppercase text-xs'>Directed By <a className="border-b hover:border-dashed" href="https://www.instagram.com/archy.moor/" target="_blank"> Archy Moor</a></h6>
                                    <h6 className='font-mono uppercase text-xs'>© ℗ ODDS 2023</h6>
                                </div>
                            </section>
                            <section className='py-20'>
                                <div className='aspect-w-16 aspect-h-9'>
                                    <iframe src="https://www.youtube.com/embed/1uUoPOyFmPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

                                </div>
                                <div className='text-white ' >
                                    <h2 className='font-mono uppercase text-lg'>Namsan Freestyle</h2>
                                    <h6 className='font-mono uppercase text-xs'>Produced By <a className="border-b hover:border-dashed" href="https://www.instagram.com/earlsaga/" target="_blank"> Earl Saga </a></h6>
                                    <h6 className='font-mono uppercase text-xs'>Directed By <a className="border-b hover:border-dashed" href="https://www.instagram.com/evancahill/" target="_blank"> Evan Cahill</a></h6>
                                    <h6 className='font-mono uppercase text-xs'>© ℗ ODDS 2022</h6>
                                </div>
                            </section>
                            <section className='py-20'>
                                <div className='aspect-w-16 aspect-h-9'>
                                    <iframe src="https://www.youtube.com/embed/T_8GyZZyJPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

                                </div>
                                <div className='text-white ' >
                                    <h2 className='font-mono uppercase text-lg'>Beautiful</h2>
                                    <h6 className='font-mono uppercase text-xs'>Produced By <a className="border-b hover:border-dashed" href="https://www.instagram.com/earlsaga/" target="_blank"> Earl Saga </a></h6>
                                    <h6 className='font-mono uppercase text-xs'>Directed By <a className="border-b hover:border-dashed" href="https://www.instagram.com/evancahill/" target="_blank"> Evan Cahill</a></h6>
                                    <h6 className='font-mono uppercase text-xs'>© ℗ ODDS 2022</h6>
                                </div>
                            </section>

                        </div>
                    </div>

                    <div className='h-full w-full  overflow-hidden'>
                        <div class=" fixed md:fixed grid md:grid-cols-4 md:grid-rows-4 grid-cols-3 grid-rows-3 gap-4 h-full grid-background p-5">
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
            <SpotifyNowPlaying />
            <Footer />
        </>

    );
}

export default Home;