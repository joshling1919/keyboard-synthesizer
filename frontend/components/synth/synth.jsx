import React from 'react';
import { NOTE_NAMES, TONES } from './../../util/tones';
import Note from './../../util/note';
import $ from 'jquery';
import {validKeys} from './../../reducers/notes_reducer';


class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(noteName => {
      return new Note(TONES[noteName]);
    });
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes () {
    let synth = this;
    // this.notes is all the notes = notes -> freq
    // this.props.notes is our notes = letters -> freq

    // let allFreq = this.notes.map(note => note.oscillatorNode.frequency.value);
    // let ourFreq = this.props.notes.map(note => NotesReducer.keyMap[note]);
    //
    // debugger

    validKeys.forEach((noteName, idx) => {
        if (synth.props.notes.indexOf(noteName) !== -1) {
          synth.notes[idx].start();
        } else {
          synth.notes[idx].stop();
        }
    });



    // this.notes.forEach((note, idx) => {
    //   for (let i = 0; i < synth.props.notes.length; i++) {
    //
    //   }
    //   if(note.oscillatorNode.frequency.value === NotesReducer.keyMap[synth.props.notes[idx]]){
    //     note.start();
    //   } else {
    //     note.stop();
    //   }
    // });
  }

  render() {
    this.playNotes();
    return (
      <ul>
        keyboard
      </ul>
    );
  }

}


export default Synth;
