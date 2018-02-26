import React from "react";
import Amplifier from "../components/audio/Amplifier";
import LinSlider from "../components/ui/LinSlider";

class Gain extends React.Component {
  state = { level: 0 };

  handleLevelSlider = newLevel => {
    this.setState({ level: newLevel });
  };

  render() {
    return (
      <React.Fragment>
        <Amplifier level={this.state.level} {...this.props} />
        <LinSlider
          min={0}
          max={1}
          steps={128}
          value={this.state.level}
          onChange={this.handleLevelSlider}
        />
      </React.Fragment>
    );
  }
}

export default Gain;
