import { Link } from "react-router-dom"

export default function Nav () {
    return(
            <nav>
                <Link to="/" className="home-icon nav-item">
                    <img className="home-icon"
                        src="https://imgur.com/MR1KkCr.png" 
                        alt="home" 
                    />
                </Link>
            </nav>
        
    )
}