import React, {Component} from 'react';
import Square from './Items/Square';
class Board extends Component {
  renderSquare(i, j, k) {
    return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i, j, k)}
          />
  }
  
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0, 1, 1)}
          {this.renderSquare(1, 2, 1)}
          {this.renderSquare(2, 3, 1)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, 1, 2)}
          {this.renderSquare(4, 2, 2)}
          {this.renderSquare(5, 3, 2)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, 1, 3)}
          {this.renderSquare(7, 2, 3)}
          {this.renderSquare(8, 3, 3)}
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

  export default Board;
