import React, { useState } from 'react';
import Modal from './Modal';
import { Logo, Instagram, Twitter, Facebook, Soundcloud, Youtube } from '../icons/svgs.js';

const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <footer className='fixed bottom-0 p-4 pb-10 left-0 text-left z-10 text-sm text-white'>
            {showModal && <Modal setShowModal={setShowModal} showModal={showModal} />}
            <Logo className='' />
            <div>
                <div className='flex fixed bottom-0 p-4 pb-10 right-0'>
                    <Twitter />
                    <Instagram />
                    <Soundcloud />
                    <Youtube />
                </div>
            </div>
            <div className='fixed bottom-0 left-0 right-0'>
                <button onClick={() => setShowModal(!showModal)} className='w-full font-mono py-1 text-center text-black h-8 bg-white/100 hover:bg-white/90  uppercase'>
                    <span className='hover:animate-bounce'>005 - Words</span>
                </button>
            </div>
        </footer>
    )
}

export default Footer;