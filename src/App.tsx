import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import BottomPageLanguageButton from "./components/bottomPageLanguageButton";

function App(): React.ReactElement {
  return (
    <div className="App">
      <Navbar />
      <BottomPageLanguageButton /> 
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
