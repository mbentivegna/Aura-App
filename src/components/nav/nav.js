import './nav.css';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className = "overall">
        <h1 className = "title">Aura</h1>
        <div className = "links">
            <NavLink to = "" className="link"  style={({ isActive }) => (isActive ? {color: '#EDC7B7'} : {color: '#EEE2DC'})}>Home</NavLink>
            <NavLink to = "/register" className="link" style={({ isActive }) => (isActive ? {color: '#EDC7B7'} : {color: '#EEE2DC'})}>Register a Tracker</NavLink>
            <NavLink to = "/return" className="link" style={({ isActive }) => (isActive ? {color: '#EDC7B7'} : {color: '#EEE2DC'})}>Return a Tracker</NavLink>
        </div> <br/><br/><br/><br/>
    </div>
  );
}

export default Nav;