import './App.css';
import { Routes, Route} from "react-router-dom";
import Nav from "./components/nav/nav";
import Register from "./components/register/register";
import Home from "./components/home/home";
import Return from "./components/return/return"

function App() 
{
  return (
    <div className="App">
      <Nav/>
    <Routes>
        <Route path="" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/return" element={<Return />} />
    </Routes>
    </div>
  );
}

export default App;
