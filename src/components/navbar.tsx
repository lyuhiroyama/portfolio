import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavOverlay from "./navOverlay";

export default function Navbar(): React.ReactElement {
    const [isNavActive, setIsNavActive] = useState(false);
    const [isLangDropdownVisible, setIsLangDropdownVisible] = useState(false);

    const handleNavClick = () => {
        window.scrollTo(0, 0);
    };
    const handleOverlayClick = () => {
        setIsNavActive(false);
    };
    const toggleLangDropdown = () => {
        setIsLangDropdownVisible(!isLangDropdownVisible);
    };

    return (
        <div className="nav-component">
            <nav className="navbar">
                <Link to="/" className="site-title nav-buttons" onClick={handleNavClick}>
                    Ryu Hiroyama
                </Link>

                <button
                    className="hamburger-button"
                    onClick={() => setIsNavActive(!isNavActive)}
                >
                    <FontAwesomeIcon className="hamburger-icon" icon={faBars} />
                </button>

                <ul>
                    <li>
                        <Link to="/" onClick={handleNavClick} className="nav-buttons">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-buttons">About</Link>
                    </li>
                    <li>
                        <a href="https://github.com/lyuhiroyama" className="nav-buttons">
                            <FontAwesomeIcon
                                icon={faGithub}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ryu-h-168436157/" className="nav-buttons">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <button onClick={toggleLangDropdown} className="nav-buttons">
                            <FontAwesomeIcon icon={faGlobe} />
                        </button>
                        {isLangDropdownVisible && (
                            <ul className="language-dropdown">
                                <li
                                    onClick={() =>
                                        console.log("Switch to English")
                                    }
                                >
                                    English
                                </li>
                                <li
                                    onClick={() =>
                                        console.log("Switch to Japanese")
                                    }
                                >
                                    日本語
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
            <div
                className={`background-overlay ${isNavActive ? "active" : ""}`}
                onClick={handleOverlayClick}
            ></div>
            <div className={`nav-overlay ${isNavActive ? "active" : ""}`}>
                <NavOverlay onClose={() => setIsNavActive(false)} />
            </div>
        </div>
    );
}
