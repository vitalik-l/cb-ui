import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const isFullScreen = () => !((screen.width - window.innerWidth) > 5
  || (screen.height - window.innerHeight) > 5);

const launchFullScreen = () => {
  const doc = document.documentElement;
  if (doc.requestFullScreen) {
    doc.requestFullScreen();
  } else if (doc.mozRequestFullScreen) {
    doc.mozRequestFullScreen();
  } else if (doc.webkitRequestFullScreen) {
    doc.webkitRequestFullScreen();
  }
};

class BestViewNotify extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bestView: isFullScreen(),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkFullScreen);
  }

  componentWillUmnount() {
    window.removeEventListener('resize', this.checkFullScreen);
  }

  checkFullScreen() {
    this.setState({ bestView: isFullScreen() });
  }

  closeNote() {
    this.setState({ bestView: true });
  }

  render() {
    const { className } = this.props;
    const { bestView } = this.state;
    const classes = classNames(
      className,
      {
        'cb-BestViewNotify': !className,
        hide: bestView,
      },
    );

    return (
      <div className={classes}>
        <div>
          Best Viewed in&nbsp;
          <span className="link" onClick={launchFullScreen}>Full Screen HD</span>
        </div>
        <span id="BestViewNotify-close" onClick={this.closeNote}>&#x274c;</span>
      </div>
    );
  }
}

BestViewNotify.propTypes = {
  className: PropTypes.string,
};

export default BestViewNotify;
