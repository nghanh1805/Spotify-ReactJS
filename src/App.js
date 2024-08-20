import Navbar from './Componnent/Navbar';
import { useState } from 'react';
import DetailSong from './Componnent/DetailSong';
import ListSongs from './Componnent/ListSongs';
import { Songs } from './Context';
import Datasongs from './data/songs.json';
import Playing from './Componnent/Playing'
import "./App.css";
function App() {
  const [currentSong, setCurrentSong] = useState(Datasongs[0]);
  const handleSetSong = (idSong) => {
    const currentSong = Datasongs.find(song => song.id === idSong)
    if (!currentSong) {
      setCurrentSong(Datasongs[0])
    } else {
      setCurrentSong(currentSong)
    }

  }
  return (
    <div className='App'>
      <Songs.Provider value={{ Datasongs, currentSong, handleSetSong }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player '>
          {/* Span 1 */}
          <DetailSong />
          {/* Span 2 */}
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
