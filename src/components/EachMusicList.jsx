import play from '../assets/svg/play.svg'
import pause from '../assets/svg/pause.svg'
export default function EachMusic({data,handelMusic}){
    return (
        <div className="each-music">
            <img className="em-img" src={data.img} alt="" />
            <div className="em-info">
                <h3 className="em-title">{data.title}</h3>
                <p className="em-time">{data.time}</p>
            </div>
            
            <button className='play-pause em-btn' onClick={()=>handelMusic(data.id-1)}>
                <img src={play} alt="" />
            </button>
        </div>
    )
}