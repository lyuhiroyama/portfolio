import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium, faXTwitter } from '@fortawesome/free-brands-svg-icons'; 

interface NavOverLayProps {
    onClose: () => void;
}

export default function NavOverlay({ onClose }: NavOverLayProps) {
    const handleNavClick = () => {
        window.scrollTo(0, 0);
        onClose();
    };

    return (
        <div className="navoverlay-component">
            <button className="close-button" onClick={onClose}>
                <FontAwesomeIcon icon={faX} />
            </button>
            <div className="myname">Ryu Hiroyama</div>
            <hr />
            <ul>
                <li>
                    <Link to="/" onClick={handleNavClick}>
                        Home
                    </Link>
                </li>
                <li className="nav-li">
                    <Link to="/about" onClick={handleNavClick}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/experience" onClick={handleNavClick}>
                        Experience
                    </Link>
                </li>
                <li>
                    <a href="https://github.com/lyuhiroyama">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/@lyuhiroyama">
                        <FontAwesomeIcon icon={faMedium} /> Medium
                    </a>
                </li>
                <li>
                    <a href="https://x.com/leejaxas">
                        <FontAwesomeIcon icon={faXTwitter} /> (Twitter)
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ryu-hiroyama-168436157/">
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    );
}
