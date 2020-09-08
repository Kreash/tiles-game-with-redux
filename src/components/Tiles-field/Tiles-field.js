import React from 'react';
import './Tiles-field.css';

class TileField extends React.Component {

  constructor(props) {
    super(props);
    this.state = props.state;
    this.store = props.store;
    this.store.dispatch({ type: 'RESET_GAME' });
  }

  openTile(event, color) {
    event.target.classList.toggle('notVisible');

    if (this.state.counter === 0) {
      this.store.dispatch({ type: 'INC_COUNTER' });
      this.store.dispatch({ type: 'SET_CURRENT_COLOR', color: color });
    } else if (this.state.counter === 1) {
      this.store.dispatch({ type: 'RESET_COUNTER' });
      // run if user loses
      if (this.state.currentColor !== color) {
        const elems = event.target.parentNode.childNodes;
        setTimeout(() => {
          for (let el of elems) {
            el.classList.add('notVisible');
          }
          this.store.dispatch({ type: 'RESET_GAME' });
        }, 250)
        // run if user win
      } else {
        if (this.state.gameStap === 0) {
          this.store.dispatch({ type: 'INC_GAME_STAP' });
        } else if (this.state.gameStap === 1) {
          this.store.dispatch({ type: 'RESET_GAME_STAP' });
          this.store.dispatch({ type: 'INC_NUM_WIN' });
          const tiles = event.target.parentNode.childNodes;
          setTimeout(() => {
            alert('YOU WINN!!!!!!');
            for (let tile of tiles) {
              tile.classList.add('notVisible');
            }
            this.store.dispatch({ type: 'RESET_GAME' });
          }, 250)
        }
      }
    }
  }

  render() {
    return (
      <div>
        <div className='field'>
          <div onClick={(e) => { this.openTile(e, this.state.colors[0]) }} className={'grid gridItem_0 notVisible ' + this.state.colors[0]}></div>
          <div onClick={(e) => { this.openTile(e, this.state.colors[1]) }} className={'grid gridItem_1 notVisible ' + this.state.colors[1]}></div>
          <div onClick={(e) => { this.openTile(e, this.state.colors[2]) }} className={'grid gridItem_2 notVisible ' + this.state.colors[2]}></div>
          <div onClick={(e) => { this.openTile(e, this.state.colors[3]) }} className={'grid gridItem_3 notVisible ' + this.state.colors[3]}></div>
        </div>
        <p> Number of wins: {this.state.numWin} </p>
      </div>
    )
  }
}

export default TileField;
