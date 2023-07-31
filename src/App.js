import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Support from './Components/Support';
import About from './Components/About';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import Mainheader from './Components/Mainheader';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/support" >Support</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/labs" >Labs</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Mainheader/>} >
          <Route index element={<Home/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/labs" element={<Labs/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
