import React from "react";
import {Square} from "./square";
import {Puzzle} from "../solution/puzzle.js";

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(81).fill(null),
            selected: 0
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.solve = this.solve.bind(this);
    }

    handleKeyPress(e, i) {
        const squares = this.state.squares.slice();

        switch (e.key) {
            case "1":
                squares[i] = 1;
                break;
            case "2":
                squares[i] = 2;
                break;
            case "3":
                squares[i] = 3;
                break;
            case "4":
                squares[i] = 4;
                break;
            case "5":
                squares[i] = 5;
                break;
            case "6":
                squares[i] = 6;
                break;
            case "7":
                squares[i] = 7;
                break;
            case "8":
                squares[i] = 8;
                break;
            case "9":
                squares[i] = 9;
                break;
            case "-":
                squares[i] = null;
                break;
            default:
                break;
        };

        this.setState({squares: squares});
    }

    renderSquare(i) {
        return <Square
            val={this.state.squares[i]}
            onKeyPress={(e) => this.handleKeyPress(e, i)}
        />;
    }

    buildSquares() {
        const retArr = [];

        for (let i = 0; i < 9; i++) {
            let j = i * 9;

            retArr.push(
                <div className="board-row">
                    {this.renderSquare(j)}
                    {this.renderSquare(j + 1)}
                    {this.renderSquare(j + 2)}
                    {this.renderSquare(j + 3)}
                    {this.renderSquare(j + 4)}
                    {this.renderSquare(j + 5)}
                    {this.renderSquare(j + 6)}
                    {this.renderSquare(j + 7)}
                    {this.renderSquare(j + 8)}
                </div>
            );
        }

        return retArr
    }

    solve(e) {
        e.preventDefault();

        let puzzle = new Puzzle(this.state.squares);
        puzzle = puzzle.solvePuzzle();

        this.setState({squares: puzzle});

    }

    render() {
        return (
            <div>
                {this.buildSquares()[0]}
                {this.buildSquares()[1]}
                {this.buildSquares()[2]}
                {this.buildSquares()[3]}
                {this.buildSquares()[4]}
                {this.buildSquares()[5]}
                {this.buildSquares()[6]}
                {this.buildSquares()[7]}
                {this.buildSquares()[8]}
                <form onSubmit={this.solve}>
                    <button type="submit" className="solve" onClick={this.solve}>solve</button>
                </form>
            </div>
        );
    }
}