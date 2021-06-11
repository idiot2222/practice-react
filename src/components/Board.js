import React from 'react';
import "./style/Board.scss";
import {Route, Switch} from "react-router-dom";
import Snake from "./Snake";
import Sudoku from "./Sudoku";
import Baseball from "./Baseball";

const Board = () => {
    return (
        <div className="Board">
            <Switch>
                <Route exact path="/snake">
                    <Snake />
                </Route>
                <Route exact path="/sudoku">
                    <Sudoku />
                </Route>
                <Route exact path="/baseball">
                    <Baseball />
                </Route>
            </Switch>
        </div>
    );
};

export default Board;