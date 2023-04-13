import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home'
import Single from './Pages/Single/Single'
import Listing from './Pages/Listing/Listing';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/single" element={<Single />}/>
        <Route path="/listing" element={<Listing />}/>
      </Routes>    
    </Router>
  )
}

export default App
