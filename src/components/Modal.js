import React from 'react';
const Modal = ({setShowModal, showModal}) => {

    return (
        <article className='fixed inset-0 z-99 transition-transform duration-500'>
            <section className='inset-0 w-full max-w-full mt-14 md:mt-11 px-4 py-12 bg-white text-black z-99 select-auto' >
            <button className='fixed top-12 right-0 m-4' onClick={() => setShowModal(!showModal)}> Close </button>
            <button className='fixed top-0 left-0 right-0 h-12'></button>
            <section className='w-full max-w-screen-sm mx-auto mb-16 p-0 md:p-4'>
                <h1 className='uppercase mb-6 text-center'> moormoormoor </h1>
                <section>
                    <p className="my-2"><span className=""><span>Archy Moor is a recording, </span></span><span className=""><a className="border-b hover:border-dashed" href="https://hatopress.net" target="_blank">visual</a></span><span className=""><span> and </span></span><span className=""><a className="border-b hover:border-dashed" href="https://hato.store" target="_blank">concept store</a></span><span className=""><span>.  We develop design through various mediums, including production, play and participation.</span></span></p>
                    <p className="my-2"><span className=""><span>We create brands, digital products, campaigns and more with our clients, transforming the narrative of their practice through technology, design thinking and strategy. </span></span></p>
                    <p className="my-2"><span className=""><span>Working within culture and collaborating with artists, organisations and brands who carry similar values has driven our practice for over a decade, our goal is always and ultimately to connect a genuine community, leaving a legacy that adds value and a strong foundation to grow from. </span></span></p>
                    <p className="my-2"><span className=""><span>As a team we encourage each other to explore new practices and fields-of-learning. Each new brief, project or connection is as an opportunity to expand our understanding of the world around us in an effort to develop better ways of working together. You can see more of our explorations and work in progress as and when it happens </span></span><span className=""><a className="border-b hover:border-dashed" href="https://www.instagram.com/studiohato/" target="_blank">here</a></span><span className=""><span>.</span></span></p>
                    <p className="my-2"><span className=""><span>Current team: Jason Chow, Interactive Director &amp; Partner; Emete Kirton, Brand Director &amp; Partner; Kenjiro Kirton, Creative Director &amp; Partner; Jackson Lam, Design Director &amp; Partner; Matthew Clark, Junior Digital Designer; Hannah Claydon, Junior Art Director; Dave John, Store Manager; Kenneth Kan, Designer; Fibi Kung, Art Director; Alfred Man, Senior Developer; Leanne Richards, Production Manager; Hannah Wooster, Project Manager</span></span></p>
                    <p className="my-2"></p>
                </section>
            </section>
        </section>
        </article>
        
    )


}

export default Modal;