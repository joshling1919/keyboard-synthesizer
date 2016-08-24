import React from 'react';
import { NOTE_NAMES, TONES } from './../../util/tones';
import Note from './../../util/note';
import $ from 'jquery';
import * as Reducer from './../../reducers/notes_reducer';
import NoteKey from './note_key';


class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(noteName => {
      return new Note(TONES[noteName]);
    });
    // this.keyMap = Reducer.keyMap;
  }

  onKeyDown(e) {
    $(`#${Reducer.keyMap[e.key]}`).addClass("clicked");
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    $(`#${Reducer.keyMap[e.key]}`).removeClass("clicked");
    this.props.keyReleased(e.key);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes () {
    let synth = this;

    Reducer.validKeys.forEach((noteName, idx) => {
        if (synth.props.notes.indexOf(noteName) !== -1) {
          synth.notes[idx].start();
        } else {
          synth.notes[idx].stop();
        }
    });

  }

  render() {
    this.playNotes();
    let keys = Object.keys(TONES).map(tone => (
      <NoteKey key={tone} tone={tone} />)
    );


    return (
      <ul> {keys} </ul>
    );
  }

}


export default Synth;
