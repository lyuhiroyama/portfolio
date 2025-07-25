import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import More from './components/more';
import BottomPageLanguageButton from "./components/bottomPageLanguageButton";

function App(): React.ReactElement {
  return (
    <div className="App">
      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/more" element={<More />} />
        </Routes>
        <BottomPageLanguageButton />
      </div>
    </div>
  );
}

export default App;
