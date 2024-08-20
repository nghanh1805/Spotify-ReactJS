import React, { useContext } from 'react'
import { Songs } from '../Context';



export default function DetailSong() {

    const { currentSong } = useContext(Songs);
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-500 font-bold'>Now playing</h2>
            <h2 className='text-zinc-400 text-2xl'>{currentSong.name}</h2>
            <div className='w-[200px] m-auto mt-5 mb-5 '>
                <img className='w-full' src={currentSong.links.images[0].url} alt='avatar' />
            </div>
            <div className='flex justify-evenly items-center mt-5'>
                <img className='w-[70px] border-spacing-4 rounded-full' src={currentSong.links.images[1].url} alt='avatar' />
                <span className='text-xl text-white'>{currentSong.author}</span>
            </div>
        </div>
    )
}
