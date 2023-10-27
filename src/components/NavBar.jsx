import data from '../navData'
export default function NavBar(){
    return(
        <nav>
            <h1>Music Player</h1>
            <ul>
                {data.map((d,i)=>(
                    <LIcomponent key={i} d={d}/>
                ))}
            </ul>
            <button className='btn2 login'>Login</button>
            <button className='btn2 sign-up'>Sign up</button>
        </nav>
    )
}

function LIcomponent({d}){
    return(
        <li>
            <img className='nav-svg' src={d.svg} alt="" />
            <p className="txt">{d.title}</p>
        </li>
    )
}