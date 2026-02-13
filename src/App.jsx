import { Routes, Route, Link } from 'react-router-dom'
import IncrementOne from './counter-demo/IncrementOne'
import IncrementTwo from './counter-demo/IncrementTwo'
import './App.css'
import ThemeComponent from './theme/ThemeComponent'
import { ThemeProvider } from './theme/ThemeContext'
import FlagGame from './flag-game/FlagGame'
import NotificationsComponent from './push-notifications/NotificationsComponent'
import Kanban from './kanban/Layout'
function Home() {
  return (
    <>
      <h1>Demo Catalog</h1>
      <div className="demo-group-wrapper">
        <div className="card demo-wrapper">
          {/* CREATE IMAGES FOR THESE DEMOS */}
          <Link to="/increment-one">Zustand Counter Demo</Link>
        </div>
        <div className="card demo-wrapper">
          <Link to="/theme">Theme Demo</Link>
        </div>
        <div className="card demo-wrapper">
          <Link to="/flag-game">Flag Game Demo</Link>
        </div>
        <div className="card demo-wrapper">
          <Link to="/notifications">Notifications Demo</Link>
        </div>
        <div className="card demo-wrapper">
          <Link to="/kanban">Kanban Demo</Link>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/increment-one" element={<IncrementOne />} />
        <Route path="/increment-two" element={<IncrementTwo />} />
        <Route path="/theme" element={<ThemeComponent />} />
        <Route path="/flag-game" element={<FlagGame />} />
        <Route path="/notifications" element={<NotificationsComponent />} />
        <Route path="/kanban" element={<Kanban />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
