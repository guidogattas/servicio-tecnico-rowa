import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Rowa from './components/Rowa/Rowa.jsx';
import Plomeria from './components/Plomeria/Plomeria';
import CalefonTermotanque from './components/CalefonTermotanque/CalefonTermotanque';


import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header.jsx';


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rowa" element={<Rowa />} />
        <Route path="/plomeria" element={<Plomeria />} />
        <Route path="/calefon-termotanque" element={<CalefonTermotanque />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
