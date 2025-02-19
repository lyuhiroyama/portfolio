import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.jsx';
import Projects from './components/projects.jsx';
import About from './components/about.jsx';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
