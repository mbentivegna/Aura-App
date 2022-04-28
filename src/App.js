import './App.css';
import { Routes, Route} from "react-router-dom";
import Nav from "./components/nav/nav";
import Register from "./components/register/register";
import Home from "./components/home/home";
import Return from "./components/return/return"
import Export from "./components/export/export"

function App() 
{
  return (
    <div className="App">
      <Nav/>
    <Routes>
        <Route path="" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/return" element={<Return />} />
        <Route path="/export" element={<Export />} />
    </Routes>
    </div>
  );
}

export default App;
