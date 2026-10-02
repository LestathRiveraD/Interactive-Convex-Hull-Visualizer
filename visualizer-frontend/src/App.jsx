import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './App.css'
import Sidebar from './components/Sidebar';
import GrahamScan from './algorithm-pages/convex-hull/graham-scan/GrahamScan'

function Home() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, reiciendis accusantium totam rerum, nobis sint et, perferendis magnam qui autem excepturi explicabo amet iusto! Ad, odit reiciendis! A, facere sunt?
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav className='navBar'>
        <img className="navbar-logo" src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" width="70" height="70" />
        <h1>Convex-Hull Visualizer</h1>
      </nav>
      <div className='main'>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/graham-scan' element={ <GrahamScan /> } />
        </Routes>
        <Sidebar />
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
);

export default App
