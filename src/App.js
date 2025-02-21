import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Navigate to="/portfolio" replace />} />
          <Route path="/portfolio" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>

    </div>
  );
}

export default App;
