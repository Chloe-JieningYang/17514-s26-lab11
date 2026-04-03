import React from 'react';
import { Cell } from './game';

interface Props {
  cell: Cell
}

class BoardCell extends React.Component<Props> {
  render(): React.ReactNode {
    const playable = this.props.cell.playable ? 'playable' : '';
    const textClass = this.props.cell.text === 'X' ? 'cell-x' : this.props.cell.text === 'O' ? 'cell-o' : '';
    return (
      <div className={`cell ${playable} ${textClass}`}>{this.props.cell.text}</div>
    )
  }
}

export default BoardCell;