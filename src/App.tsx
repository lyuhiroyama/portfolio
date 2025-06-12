import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';

function App(): React.ReactElement {
  return (
    <div className="App">
      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="bottom-language-button-container">
          <button>Languages ▾</button>
        </div>
      </div>
    </div>
  );
}

export default App;
