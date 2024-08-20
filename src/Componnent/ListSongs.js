import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Songs } from '../Context';

export default function ListSongs() {
    const { Datasongs, handleSetSong, currentSong } = useContext(Songs);
    const [idSong, setIdSong] = useState(0);

    const handlePlaySong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    };

    useEffect(() => {
        setIdSong(currentSong.id)

    }, [currentSong])


    return (
        <div className='col-span-2 overflow-hidden'>
            <div className='overflow-y-scroll h-screen-navbar-player'>
                <table className='table-auto w-full'>
                    <thead className='text-white h-12 sticky top-0 bg-slate-600'>
                        <tr>
                            <th className='w-[10%]'>#</th>
                            <th className='text-left'>Title</th>
                            <th className='w-[10%]'>Author</th>
                            <th className='w-[10%]'><i className='fa fa-download'></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Datasongs.map((song, index) =>
                                <tr key={index}
                                    className={`h-12  bg-slate-800 cursor-pointer text-zinc-400 hover:bg-gray-500 ${idSong === song.id && ' text-teal-200'}`}
                                    onClick={() => handlePlaySong(song.id)}
                                >
                                    <td className='text-center'>{index + 1}</td>
                                    <td>{song.name}</td>
                                    <td className='text-center'>{song.author}</td>
                                    <td className='text-center'>
                                        <a href={song.url}><i className='fa fa-download'></i></a>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
