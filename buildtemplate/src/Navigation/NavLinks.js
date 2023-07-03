import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import "./NavLinks.css"

const NavLinks = () => {
    return (
        <ul className="nav-links" >
            <li>
                <NavLink to="/" exact className="nav-ul"> <div className="grid-item" > < HomeIcon fontSize="medium" /> <p> Home </p> </div> </NavLink>
            </li>
            <li>
                <NavLink to="/systemsetup/user" exact className="nav-ul"> 
                    <div className="grid-item" >
                        <LayersOutlinedIcon fontSize="medium"/>
                        <p>SystemSetUp</p> 
                        <KeyboardArrowDownOutlinedIcon className="icon-keyarrow" fontSize="small" />
                    </div>
                </NavLink>
            </li>
            <li>
                <NavLink to="/systemsetup/company" exact className="nav-ul"> <p>SystemSetUp</p> </NavLink>
            </li>
            <li>
                <NavLink to="/tasks" exact className="nav-ul"> <p>Tasks</p> </NavLink>
            </li>
            <li>
                <NavLink to="/reports" exact className="nav-ul"> <p>Reports</p> </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" exact className="nav-ul"> <p>Dashboard</p> </NavLink>
            </li>
            <li>
                <NavLink to="/buttons" exact className="nav-ul"> <p>Buttons</p> </NavLink>
            </li>
            <li>
                <NavLink to="/textinput" exact className="nav-ul"> <p>Buttons</p> </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;