import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className="nav-component">
            <Link to="/" className="site-title">Ryu Hiroyama のポートフォリオ</Link>
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