import MusicPlayer from './components/MusicPlayer'
import { useState } from 'react'
import NavBar from './components/NavBar'
import data from './data'
import EachMusic from './components/EachMusicList'

function App(){
  const [ currMusic, setCurrMusic ] = useState(0)
  const [ isPlaying ,setisPlaying ]=useState(false)
  
  
  function handelMusic(i){
    setCurrMusic(i)
  }

  return (
    <main className='main' style={{backgroundImage:`url('music-player/src/assets/images/bgimg2.jpg')`}}>
      <main className="main2">
        <NavBar />
        <div className="container">
          <div className="music-cont">
            <MusicPlayer 
              musicData={data[currMusic]}
              currMusic={currMusic} 
              setCurrMusic={setCurrMusic}
              dataLength={data.length}
              isPlaying={isPlaying}
              setisPlaying={setisPlaying}
            />
          </div>
          <div className="music-list">
            {data.map(d => (
              d.id != currMusic+1?
                <EachMusic 
                  key={d.id} 
                  data={d} 
                  handelMusic={handelMusic}
                  />:null
            ))}
          </div>
        </div>
      </main>
    </main>
    
  )
}

export default App
