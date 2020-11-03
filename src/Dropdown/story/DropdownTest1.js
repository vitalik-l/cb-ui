import React, { Component } from 'react';
import Dropdown from '../Dropdown';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetElement: null,
    };
  }

  displayMenu = (e) => {
    this.setState({ targetElement: e.target });
  };

  onClose = () => {
    this.setState({ targetElement: null });
  };

  onChange = (currency) => {
    this.setState({ selectedCurrency: currency });
    this.onClose();
  };

  render() {
    const { targetElement } = this.state;

    return (
      <div>
        <span onClick={this.displayMenu}>Open Menu</span>
        <Dropdown
          value={0}
          options={[{ id: 0, label: 'item0' }]}
          onChange={this.onChange}
          element={targetElement}
          show={!!targetElement}
          onClose={this.onClose}
          display="top"
        />
      </div>
    );
  }
}
