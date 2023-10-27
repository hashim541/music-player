import { useEffect } from "react"
import playSVG from '../assets/svg/play.svg'
import pauseSVG from '../assets/svg/pause.svg'
import previousSVG from '../assets/svg/previous.svg'

export default function ControlBtns({
    fullDuration, currTime, setisPlaying, isPlaying, toggleControls, currMusic, setCurrMusic, dataLength
}){

    useEffect( () => {
        setisPlaying( false )
    }, [ currMusic ] )
    useEffect(()=>{
        if(currTime==fullDuration){
            setisPlaying(false)
        }
    },[currTime])
    return(
        <div className="btns">
            <button 
                className="prev btn" 
                disabled={ currMusic <= 0 } 
                onClick={ () => setCurrMusic( currMusic-1 ) }
            >
                <img src={previousSVG} alt="" />
            </button>

            <button 
                className="play-pause"
                onClick={toggleControls}
            >
            <img src={ isPlaying ? pauseSVG : playSVG} alt="" />
            
            </button>
            
            <button 
                className="next btn"
                onClick={()=>setCurrMusic(currMusic+1)}
                disabled={currMusic>=dataLength-1}
            >
                <img src={previousSVG} alt="" />
            </button>
        </div>
    )
}