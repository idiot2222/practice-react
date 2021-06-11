import React from 'react';
import "./style/NavBar.scss";
import NavItem from "./NavItem";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <Link to="/"><NavItem name="Main" /></Link>
            <Link to="/snake"><NavItem name="Snake" /></Link>
            <Link to="/sudoku"><NavItem name="Sudoku" /></Link>
            <Link to="/baseball"><NavItem name="Baseball" /></Link>
            <Link to="/"><NavItem name="X" /></Link>
        </div>
    );
}

export default NavBar;