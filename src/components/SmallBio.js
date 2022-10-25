import React from 'react';

const SmallBio = () => {
    
    return (
        <aside className='fixed top-4 right-0 text-right p-4 z-10 text-sm text-white '>
            <p className='w-56'> Archy Moor is a 21 year old Nigerian born, Irish multidisciplinary artist based in Dublin.</p>
            <p className='mb-2'>
                <button className='hover:underline'>+ More Info</button>
            </p>
            <p>
                <a className='hover:underline' href='mailto:archy@archymoor.co'>archy@archymoor.co</a>
            </p>

        </aside>
    )
}

export default SmallBio;