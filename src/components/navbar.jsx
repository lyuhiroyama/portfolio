import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className="nav">
            <Link to="/" className="site-title">廣山 龍(ひろやま りゅう)</Link>
            <ul>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}