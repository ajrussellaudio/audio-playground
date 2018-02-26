import React, { Children, cloneElement } from "react";

class Amplifier extends React.Component {
  state = { gainNode: null };

  connect = () => {
    this.state.gainNode.connect(this.props.output);
    this.setLevel(this.props.level);
  };

  setLevel = newLevel => {
    const now = this.props.context.currentTime;
    if (this.state.gainNode) {
      this.state.gainNode.gain.setValueAtTime(newLevel, now);
    }
  };

  componentDidMount() {
    this.setState({ gainNode: this.props.context.createGain() }, this.connect);
  }

  componentWillReceiveProps(nextProps) {
    this.setLevel(nextProps.level);
  }

  render() {
    return Children.map(this.props.children, device => {
      return cloneElement(device, {
        context: this.props.context,
        output: this.state.gainNode
      });
    });
  }
}

export default Amplifier;
