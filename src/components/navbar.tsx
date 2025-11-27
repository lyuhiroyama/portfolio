import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import NavOverlay from "./navOverlay";

export default function Navbar(): React.ReactElement {
    const [isNavActive, setIsNavActive] = useState(false);
    const [isLangDropdownVisible, setIsLangDropdownVisible] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const dropdownRef = useRef<HTMLUListElement | null>(null);
    const { i18n } = useTranslation();

    const handleNavClick = () => {
        window.scrollTo(0, 0);
    };
    const handleOverlayClick = () => {
        setIsNavActive(false);
    };
    const toggleLangDropdown = () => {
        setIsLangDropdownVisible(!isLangDropdownVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsLangDropdownVisible(false);
            }
        };

        if (isLangDropdownVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isLangDropdownVisible]);

    return (
        <div className="nav-component">
            <nav className="navbar">
                <Link
                    to="/"
                    className="site-title nav-buttons"
                    onClick={handleNavClick}
                >
                    Ryu Hiroyama
                </Link>

                <button
                    className="hamburger-button"
                    onClick={() => setIsNavActive(!isNavActive)}
                >
                    <FontAwesomeIcon className="hamburger-icon" icon={faBars} />
                </button>

                <ul>
                    <li className="nav-li">
                        <Link
                            to="/"
                            onClick={handleNavClick}
                            className="nav-buttons"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/about" className="nav-buttons">
                            About
                        </Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/experience" className="nav-buttons">
                            Experience
                        </Link>
                    </li>
                    <li className="nav-li">
                        <a
                            href="https://github.com/lyuhiroyama"
                            className="nav-buttons"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li className="nav-li">
                        <a
                            href="https://medium.com/@lyuhiroyama"
                            className="nav-buttons"
                        >
                            <FontAwesomeIcon icon={faMedium} />
                        </a>
                    </li>
                    <li className="nav-li">
                        <a
                            href="https://x.com/leejaxas"
                            className="nav-buttons"
                        >
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                    </li>
                    <li className="nav-li">
                        <a
                            href="https://www.linkedin.com/in/ryu-hiroyama-168436157/"
                            className="nav-buttons"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li className="nav-li">
                        <button
                            ref={buttonRef}
                            onClick={toggleLangDropdown}
                            className={`
                                    nav-buttons 
                                    lang-dropdown-btn 
                                    ${isLangDropdownVisible ? 'open' : ''}
                            `}
                        >
                            <FontAwesomeIcon icon={faGlobe} />
                            <span style={{
                                marginLeft: '0.5rem', fontSize: '0.7em'
                            }}>
                            {i18n.language === "en" ? "English" : "日本語"}
                            </span>
                        </button>
                        {isLangDropdownVisible && (
                            <ul className="language-dropdown" ref={dropdownRef}>
                                {i18n.language !== "en" && (
                                    <li
                                        className="dropdown-li"
                                        onClick={() => {
                                            i18n.changeLanguage('en');
                                            setIsLangDropdownVisible(false);
                                        }}
                                    >
                                        English
                                    </li>
                                )}
                                {i18n.language !== "ja" && (
                                    <li
                                        className="dropdown-li"
                                        onClick={() => {
                                            i18n.changeLanguage('ja');
                                            setIsLangDropdownVisible(false);
                                        }}
                                    >
                                        日本語
                                    </li>
                                )}
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
