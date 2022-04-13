import './nav.css';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className = "overall">
        <h1 className = "title">Aura</h1>
        <div className = "links">
            <NavLink to = "" className="link"  style={({ isActive }) => (isActive ? {color: 'rgb(95, 95, 255)'} : {color: 'rgb(20, 20, 98)'})}>Home</NavLink>
            <NavLink to = "/register" className="link" style={({ isActive }) => (isActive ? {color: 'rgb(95, 95, 255)'} : {color: 'rgb(20, 20, 98)'})}>Register a Tracker</NavLink>
            <NavLink to = "/return" className="link" style={({ isActive }) => (isActive ? {color: 'rgb(95, 95, 255)'} : {color: 'rgb(20, 20, 98)'})}>Return a Tracker</NavLink>
        </div> <br/><br/><br/><br/>
    </div>
  );
}

export default Nav;