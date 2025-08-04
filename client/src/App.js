//import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <Router>  
      <div className="App">
          <Routes>
              <Route path="/" element={
                <div style={{overflowY: 'hidden', display: 'flex', height: '100vh'}}>
                  <Login />
                </div>} />
              <Route path="/register" element={
                <div style={{overflowY: 'hidden', display: 'flex', height: '100vh'}}>
                  <Register />
                </div>
              } />
              <Route path="/dashboard/:referralCode" element={<Dashboard />} />
              <Route path="/leaderboard/:referralCode" element={<Leaderboard/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
