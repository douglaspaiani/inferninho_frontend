// App
import './App.css';

// Pages
import LoginPage from './pages/login/Login';
import HomePage from './pages/home/Home';

// Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// JavaScripts
import "./scripts/scripts.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
