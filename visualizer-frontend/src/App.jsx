import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './App.css'
import Sidebar from './components/Sidebar';
import GrahamScan from './algorithm-pages/convex-hull/graham-scan/GrahamScan'
import MonotoneChain from './algorithm-pages/convex-hull/monotone-chain/MonotoneChain'

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
        <h1>Convex-Hull Visualizer</h1>
      </nav>
      <div className='main'>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/graham-scan' element={ <GrahamScan /> } />
          <Route path='/monotone-chain' element={ <MonotoneChain /> } />
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