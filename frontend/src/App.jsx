import './App.css'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import ArtworkPage from './pages/ArtworkPage/ArtworkPage';

function App() {
  return (
    <Router>
      <header className="head"><Navbar/></header>

      <main className="body">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/artwork" element={<ArtworkPage />} />
        </Routes>
      </main>
      <footer className="foot"><Footer/></footer>
    </Router>
  )
}

export default App
