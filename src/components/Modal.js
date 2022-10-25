import React from 'react';
import { useState } from 'react'
import Toni from '../images/Toni-Morrison-Beloved (1).jpg';
import Toni2 from '../images/Toni-Morrison-Early-draft-of-Beloved-2-(2).jpg';
import Jollof from '../images/jollof.jpg';
import Mihalis from '../images/Mihalis.jpg';
import { Lyrics } from './GroupedMedia';

const Modal = ({ setShowModal, showModal }) => {

    const [lightboxDisplay, setLightBoxDisplay] = useState(true);
    const [imageToShow, setImageToShow] = useState(Toni);

    const showImage = (image) => {
        //set imageToShow to be the one that's been clicked on    
        setImageToShow(image);
        //set lightbox visibility to true
        setLightBoxDisplay(true);
    };

    const hideLightBox = () => {
        setLightBoxDisplay(false)
    }

    return (
        <article className='fixed inset-0 z-99 transition-transform duration-500'>
            <section className='inset-0 w-full max-w-full mt-14 md:mt-11 px-4 py-12 bg-white fixed overflow-y-auto text-black z-99 select-auto' >
                <button className='fixed top-12 right-0 m-4' onClick={() => setShowModal(!showModal)}> Close </button>
                <button className='fixed top-0 left-0 right-0 h-12'></button>
                <section className='w-full max-w-screen-sm mx-auto mb-32 p-0 md:p-4'>
                    <h1 className='uppercase mb-6 text-center font-mono'> moormoormoor </h1>
                    <section className='font-sans'>
                        <p className="my-2"><span className=""><span>Archy Moor is a recording, </span></span><span className=""><a className="border-b hover:border-dashed" href="https://hatopress.net" target="_blank">visual</a></span><span className=""><span> and </span></span><span className=""><a className="border-b hover:border-dashed" href="https://hato.store" target="_blank">visual artist</a></span><span className=""><span>.  Raised in Dublin, Ireland, Archy Moor found his passion in the craft of songwriting, allowing him to convey unfiltered innermost thoughts to reveal themselves within his lyrics.</span></span></p>
                        <p className="my-2"><span className=""><span>At just 19 years old Archy began to consciously perfect his craft outside of releasing music as well as assemble an all-star international team around him during this time.</span></span></p>
                        <p className="my-2"><span className=""><span>This marked the beginning of a period of growth and reflection that would result in the birth of a new style of hip-hop artist. </span></span></p>
                        <p className="my-2"><span className=""><span>Off the back of this hiatus, he has seemingly made good with the time spent quarantining during the height of the COVID-19 pandemic, collaborating with producer</span></span><span className=""><a className="border-b hover:border-dashed" href="https://www.instagram.com/studiohato/" target="_blank"> Earl Saga </a></span><span className=""><span>(Loyle Carner, Jgrrey) to create his upcoming debut EP, expressing himself in ways he has never done.</span></span></p>
                        <p className="my-2"><span className=""><span>Archy and Earl took themselves to Los Angeles earlier this year to finish the digitally started project.</span></span></p>
                    </section>
                    <h1 className='uppercase mb-6 text-center font-mono'> LYRICS </h1>
                    <section className='grid grid-cols-2 gap-4'>
                        <div className=''>
                            <div><img src={Lyrics[2]}></img></div>
                            <div>
                                <h2 className='font-mono uppercase text-xs'>Beautiful</h2>
                                <h6 className='font-mono uppercase text-xs'>2022</h6>
                                <h6 className='font-mono uppercase text-xs'>ODDS</h6>
                            </div>

                        </div>
                        <div>
                            <div><img src={Lyrics[1]}></img></div>
                            <div>
                                <h2 className='font-mono uppercase text-xs'>Moonboy</h2>
                                <h6 className='font-mono uppercase text-xs'>2019</h6>
                                <h6 className='font-mono uppercase text-xs'>ODDS</h6>
                            </div>
                        </div>
                        <div>

                            <div><img src={Lyrics[3]}></img></div>
                            <h2 className='font-mono uppercase text-xs'>The Long Road</h2>
                            <h6 className='font-mono uppercase text-xs'>2020</h6>
                            <h6 className='font-mono uppercase text-xs'>ODDS</h6>
                        </div>
                        <div>

                            <div><img src={Lyrics[4]}></img></div>
                            <h2 className='font-mono uppercase text-xs'>Remember Me</h2>
                            <h6 className='font-mono uppercase text-xs'>2020</h6>
                            <h6 className='font-mono uppercase text-xs'>ODDS</h6>
                        </div>
                        {lightboxDisplay ?
                            <div className=" z-1 fixed top-0 left-0 w-auto h-2/3 " onClick={hideLightBox}>
                                <img id="lightbox-img" src={imageToShow}></img>
                            </div>
                            : ''}
                    </section>
                </section>
            </section>
        </article>

    )


}

export default Modal;



