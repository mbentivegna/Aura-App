import './nav.css';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className = "overall">
        <h1 className = "title">Aura</h1>
        <div className = "links">
            <NavLink to = "" className="link"  style={({ isActive }) => (isActive ? {color: '#f4c430'} : {color: '#EEE2DC'})}>Home</NavLink>
            <NavLink to = "/register" className="link" style={({ isActive }) => (isActive ? {color: '#f4c430'} : {color: '#EEE2DC'})}>Register a Tracker</NavLink>
            <NavLink to = "/return" className="link" style={({ isActive }) => (isActive ? {color: '#f4c430'} : {color: '#EEE2DC'})}>Return a Tracker</NavLink>
            <NavLink to = "/export" className="link" style={({ isActive }) => (isActive ? {color: '#f4c430'} : {color: '#EEE2DC'})}>Export Data</NavLink>
        </div>
    </div>
  );
}

export default Nav;