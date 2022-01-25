import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
  
    <div>






<BrowserRouter>
<Link to="/login"> Log In </Link>
<Link to="/register"> Register </Link>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/Register" element={<Register />}/>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

