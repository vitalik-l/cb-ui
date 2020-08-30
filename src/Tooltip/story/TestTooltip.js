import React, { Component } from 'react';
import Tooltip from '../Tooltip';

class TestTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
    };
  }

    mouseEnter = () => {
      this.setState({ showTooltip: true });
    };

    mouseLeave = () => {
      this.setState({ showTooltip: false });
    };

    render() {
      const { showTooltip } = this.state;

      return (
        <div>
          <button type="button" id="button1" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>Display tooltip</button>
          <Tooltip show={showTooltip} element="button1" timeout={2000}>
            123
          </Tooltip>
        </div>
      );
    }
}

export default TestTooltip;
