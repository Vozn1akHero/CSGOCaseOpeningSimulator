import React, { Component } from "react";
import { SettingsContext } from "../../contexts/SettingsContext";

export default class CaseOpeningAudio extends Component {
  static contextType = SettingsContext;

  constructor(props) {
    super(props);
    this.rollSound = React.createRef();
    this.rollSound2 = React.createRef();
    this.openSound = React.createRef();
  }

  componentDidMount() {
    this.playOpeningSound();
    this.rollSound.current.volume = this.context.settings.volume;
    this.rollSound2.current.volume = this.context.settings.volume;
    this.openSound.current.volume = this.context.settings.volume;
  }

  playOpeningSound = () => {
    this.openSound.current.play();
    this.openSound.current.playbackRate = 1.3;

    this.rollSound.current.loop = true;
    this.rollSound.current.playbackRate = 1.1;

    this.rollSound2.current.loop = true;
    this.rollSound2.current.playbackRate = 1.1;

    this.rollSound.current.play();
    setTimeout(() => {
      this.rollSound2?.current?.play();
    }, (12.5 * this.context.settings.caseOpeningTime) / 100);

    setTimeout(() => {
      this.rollSound2?.current?.pause();
      if (this.rollSound.current) this.rollSound.current.playbackRate = 1;
    }, (50 * this.context.settings.caseOpeningTime) / 100);
    setTimeout(() => {
      if (this.rollSound.current) this.rollSound.current.playbackRate = 0.9;
    }, (75 * this.context.settings.caseOpeningTime) / 100);
    setTimeout(() => {
      this.rollSound?.current?.pause();
    }, this.context.settings.caseOpeningTime);
  };

  render() {
    return (
      <>
        <audio ref={this.openSound} id='caseOpeningAudioOpen'>
          <source src='/sound/open.mp3' type='audio/mp3' />
        </audio>
        <audio ref={this.rollSound} id='caseOpeningAudioRoll'>
          <source src='/sound/roll.mp3' type='audio/mp3' />
        </audio>
        <audio ref={this.rollSound2} id='caseOpeningAudioRoll'>
          <source src='/sound/roll.mp3' type='audio/mp3' />
        </audio>
      </>
    );
  }
}
