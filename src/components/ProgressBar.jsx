
export default function ProgressBar({
    fullDuration, currTime, handelScroll, timeConverter
}){
    
    return(
        <div className="progress-bar">
            
            <input type="range"
                className="bar" 
                min='0' 
                max={fullDuration} 
                value={currTime} 
                onChange={handelScroll}
            />
            <div className="timer">
            <p>{timeConverter(currTime)}</p>
            <p>{timeConverter(fullDuration)}</p>
            </div>
            
        </div>
    )
}