import React from 'react';
import "./style/Main.scss";
import NavBar from "./NavBar.js";
import Board from "./Board";

const Main = () => {
    return (
        <div className="Main">
            <NavBar />
            <Board />
        </div>
    );
};

export default Main;