import { NotesConstants } from './../actions/note_actions';
import { NOTE_NAMES, TONES } from './../util/tones';

const NotesReducer = (oldState = [], action) => {
  switch (action.type) {
    case NotesConstants.KEY_PRESSED:
      if (oldState.indexOf(action.key) === -1 &&
        validKeys.indexOf(action.key) !== -1 ) {
        return [...oldState, action.key];
      } else {
        return oldState;
      }
    case NotesConstants.KEY_RELEASED:
      let newState = [];
      for (let i = 0; i < oldState.length; i++) {
        if (oldState[i] !== action.key) {
          newState.push(oldState[i]);
        }
      }
      return newState;
    default:
      return oldState;
  }
};

const validKeys = ['a', 's', 'd', 'f', 'g'];

const keyMap = {};

NOTE_NAMES.forEach((note,idx) => {
  keyMap[validKeys[idx]] = TONES[note];
});


export {validKeys, NotesReducer};
