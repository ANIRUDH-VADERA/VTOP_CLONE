import HomeLogin from './HomeLogin';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Login";
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div><Navbar /><HomeLogin /></div>} />
          <Route path="/Login" element={<div><Navbar /><Login colour="#00c0ef" heading="VTOP Login" login="Sign in" /></div>} />
          <Route path="/HomePage" element={<div><HomePage /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
