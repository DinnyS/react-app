
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import  Navbar  from './components/Navbar/index';
import  LoginPage from './pages/login/index'
import  Homepage from './pages/homepage/index'
import AddData from './pages/AddData';
import Profilepage from './pages/Profilepage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/AddData" element={<AddData />} />
          <Route path="/Profile" element={<Profilepage />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
