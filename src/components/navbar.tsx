import {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import NavOverlay from './navOverlay';

export default function Navbar(): React.ReactElement {

    const [isNavActive, setIsNavActive] = useState(false);
    const handleNavClick = () => {
        window.scrollTo(0, 0);
    };
    const handleOverlayClick = () => {
        setIsNavActive(false);
    }

    return (
        <div className='nav-component'>
            <nav className="navbar">
                <Link to="/" className="site-title" onClick={handleNavClick}>Ryu Hiroyama</Link>

                <button 
                    className='hamburger-button'
                    onClick={() => setIsNavActive(!isNavActive)}
                >
                    <FontAwesomeIcon className="hamburger-icon" icon={faBars} />
                </button>

                <ul>
                    <li>
                        <Link to="/" onClick={handleNavClick}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <a href="https://github.com/lyuhiroyama">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ryu-hiroyama-168436157/">LinkedIn</a>
                    </li>
                </ul>

                
            </nav>
            <div 
                className={`background-overlay ${isNavActive ? 'active' : ''}`}
                onClick={handleOverlayClick}
            ></div>
            <div className={`nav-overlay ${isNavActive ? 'active' : ''}`}>
                <NavOverlay onClose={() => setIsNavActive(false)}/>
            </div>
        </div>
    )
}