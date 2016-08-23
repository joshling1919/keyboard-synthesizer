import { combineReducers } from 'redux';
import {NotesReducer} from './notes_reducer';


const reducer = combineReducers({
  notes: NotesReducer
});

export default reducer;
