import './App.css'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
function App() {
  return (
    <>
      <header className="head"><Navbar/></header>
      <main className="body">
        <h1>Welcome to Frame & Flourish</h1>
        <p>Your one-stop solution for art framing and exhibition design.</p>
      </main>
      <footer className="foot"><Footer/></footer>
    </>
  )
}

export default App
