export function rootReducer(state, action) {

  switch (action.type) {
    case 'RESET_GAME':
      for (let key in state.colors) {
        state.colors[key] = 'green'
      }
      let oneRedTile = Math.floor(Math.random() * 4)
      let twoRedTile = oneRedTile;
      while (oneRedTile === twoRedTile) {
        twoRedTile = Math.floor(Math.random() * 4)
      }
      let redTiles = [oneRedTile, twoRedTile];
      for (let key of redTiles) {
        state.colors[key] = 'red';
      }
      return state;
    case 'INC_COUNTER':
      state.counter += 1;
      return state;
    case 'RESET_COUNTER':
      state.counter = 0
      return state;
    case 'SET_CURRENT_COLOR':
      state.currentColor = action.color
      return state;
    case 'INC_GAME_STAP':
      state.gameStap += 1
      return state;
    case 'RESET_GAME_STAP':
      state.gameStap = 0;
      return state;
    case 'INC_NUM_WIN':
      state.numWin += 1;
      return state;
    default:
      return state;
  }
}