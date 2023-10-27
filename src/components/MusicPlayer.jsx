import { useState, useRef,useEffect } from 'react'
import ProgressBar from './ProgressBar'
import ControlBtns from './ControlBtns'
import discSVG from '../assets/svg/disc.svg'

export default function MusicPlayer({
    musicData,currMusic,setCurrMusic,dataLength,isPlaying,setisPlaying
}){

    
    const [ currTime ,setCurrTime ]=useState(0)
    const [ fullDuration ,setFD ]=useState(null)
    const sound = useRef(null)

    function handelScroll( e ){
        sound.current.currentTime = e.target.value
        setCurrTime( e.target.value )
    }
    function toggleControls(){
        if( isPlaying ) {
            sound.current.pause()
        } else {
            sound.current.play()
        }
        setisPlaying( !isPlaying )
      } 
    function timeConverter(time){
        var result='';
        var minute=0;
        var second=0
        minute = Math.floor(time/60);
        second = time%60;
        if(minute < 1){
            result=`${second} s`
        }else{
            result=`${minute} m : ${second} s`
        }
        return result
    }

    useEffect( () => {
        if ( sound.current ) {
          sound.current.addEventListener('loadedmetadata', () => {
            setFD( Math.floor( sound.current.duration ) )
            setInterval( () => {
                setCurrTime( Math.floor( sound.current.currentTime ) )
            } ,1000 )
          })
        }
    } ,[] )

    
    return(
        <>
            <audio 
                    src={musicData.song} 
                    ref={sound}
            ></audio>
            <div className="music-player">
                <div className="music-img">
                    <img src={musicData.img} alt="" />
                </div>
                <div className={isPlaying? 'disc rotate-disc':'disc'}>
                    <img  src={discSVG} alt="" />
                </div>
                <div className="controller">
                    <h2 className='music-title'>{musicData.title}</h2>
                    <ProgressBar  
                        fullDuration={fullDuration} 
                        currTime={currTime} 
                        handelScroll={handelScroll}
                        timeConverter={timeConverter}
                    />
                    <ControlBtns
                        fullDuration={fullDuration} 
                        currTime={currTime}
                        setisPlaying={setisPlaying}
                        isPlaying={isPlaying}
                        toggleControls={toggleControls}
                        currMusic={currMusic}
                        setCurrMusic={setCurrMusic}
                        dataLength={dataLength}
                    />
                </div>
                
            </div>
        </>
    )
    
    
}