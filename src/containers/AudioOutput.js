import React from "react";
import Gain from "./Gain";
import SinOscillator from "./SinOscillator";

class AudioOutput extends React.Component {
  state = {
    audioContext: null
  };

  componentDidMount() {
    this.setState({ audioContext: new AudioContext() });
  }

  render() {
    if (!this.state.audioContext) return null;
    return (
      <React.Fragment>
        <h1>AudioOutput</h1>
        <Gain
          context={this.state.audioContext}
          output={this.state.audioContext.destination}
        >
          <SinOscillator />
        </Gain>
      </React.Fragment>
    );
  }
}

export default AudioOutput;
