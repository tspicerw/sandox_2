import { Routes, Route, Link } from 'react-router-dom'
import IncrementOne from './IncrementOne'
import IncrementTwo from './IncrementTwo'
import './App.css'

function Home() {
  return (
    <>
      <h1>Demo Catalog</h1>
      <div className="card demo-wrapper">
        {/* CREATE IMAGES FOR THESE DEMOS */}
        <Link to="/increment-one">Zustand Counter Demo</Link>
      </div>
      {/* <div className="card demo-wrapper">
        <Link to="/increment-two">test</Link>
      </div> */}
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/increment-one" element={<IncrementOne />} />
      <Route path="/increment-two" element={<IncrementTwo />} />
    </Routes>
  )
}

export default App
