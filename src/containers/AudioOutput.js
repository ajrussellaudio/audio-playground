import React from "react";

class AudioOutput extends React.Component {
  state = {
    audioContext: null
  };

  componentDidMount() {
    this.setState({ audioContext: new AudioContext() });
  }

  render() {
    return (
      <div>
        <h1>AudioOutput</h1>
      </div>
    );
  }
}

export default AudioOutput;
