import { AuthStorage } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './Pages/Home/Home'
import Single from './Pages/Single/Single'
import Listing from './Pages/Listing/Listing';
import Login from './components/Login';
import Register from './components/Register';
import AddListing from './Pages/Dashboard/AddListing';

function App() {


  return (
    <Router>
      <AuthStorage>
        <Login />
        <Register />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/single" element={<Single />}/>
          <Route path="/listing" element={<Listing />}/>
          <Route path='/addlisting' element={<AddListing />}/>
        </Routes>    
      </AuthStorage>
    </Router>
  )
}

export default App
