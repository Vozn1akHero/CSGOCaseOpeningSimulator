import React, { Component } from "react";
import { SettingsContext } from "../../contexts/SettingsContext";

export default class CaseOpeningAudio extends Component {
  static contextType = SettingsContext;

  constructor(props) {
    super(props);

    //this.rollSound = React.createRef();
    //this.rollSound2 = React.createRef();
    //this.openSound = React.createRef();

    this.rollSound = document.createElement("audio");
    const source1 = document.createElement("source");
    source1.src = "/sound/roll.mp3"
    source1.type = 'audio/mp3'
    this.rollSound.appendChild(source1)

    this.rollSound2 = document.createElement("audio");
    const source2 = document.createElement("source");
    source2.src = "/sound/roll.mp3"
    source2.type = 'audio/mp3'
    this.rollSound2.appendChild(source2)

    this.openSound = document.createElement("audio");
    const source3 = document.createElement("source");
    source3.src = "/sound/open.mp3"
    source3.type = 'audio/mp3'
    this.openSound.appendChild(source3)
  }

  componentDidMount() {
    this.playOpeningSound();
    this.rollSound.volume = this.context.settings.volume;
    this.rollSound2.volume = this.context.settings.volume;
    this.openSound.volume = this.context.settings.volume;
  }

  playOpeningSound = () => {
    this.openSound.play();
    this.openSound.playbackRate = 1.3;

    this.rollSound.loop = true;
    this.rollSound.playbackRate = 1.1;

    this.rollSound2.loop = true;
    this.rollSound2.playbackRate = 1.1;

    this.rollSound.play();
    setTimeout(() => {
      this.rollSound2?.play();
    }, (12.5 * this.context.settings.caseOpeningTime) / 100);

    setTimeout(() => {
      this.rollSound2?.pause();
      if (this.rollSound) this.rollSound.playbackRate = 1;
    }, (50 * this.context.settings.caseOpeningTime) / 100);
    setTimeout(() => {
      if (this.rollSound) this.rollSound.playbackRate = 0.9;
    }, (75 * this.context.settings.caseOpeningTime) / 100);
    setTimeout(() => {
      this.rollSound?.pause();

      this.openSound?.remove();
      this.rollSound?.remove();
      this.rollSound2?.remove();
    }, this.context.settings.caseOpeningTime);
  };

  render() {
    return (
      <>
        {/* <audio ref={this.openSound} id='caseOpeningAudioOpen'>
          <source src='/sound/open.mp3' type='audio/mp3' />
        </audio>
        <audio ref={this.rollSound} id='caseOpeningAudioRoll'>
          <source src='/sound/roll.mp3' type='audio/mp3' />
        </audio>
        <audio ref={this.rollSound2} id='caseOpeningAudioRoll'>
          <source src='/sound/roll.mp3' type='audio/mp3' />
        </audio> */}
      </>
    );
  }
}
