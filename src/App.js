import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/HOME/Home';
import Login from './Components/Login/Login';
import Registrate from './Components/Login/Registrate';




import './App.css';
import Footer from './Components/HOME/Footer';
import DoctorLogin from './Components/Login/VrachLogin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registrate' element={<Registrate />}/>
        <Route path='/doctorLogin' element={<DoctorLogin />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
