'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Effect from './Effect';

const defaultSetTimeout = (callback) => {
  setTimeout(callback, 1000.0 / 60.0)
}
const defaultClearTimeout = (timer) => {
  clearTimeout(timer);
}

const requestAnimationFrame = (() => {
  if (typeof window === 'undefined') {
    return defaultSetTimeout;
  } else {
    return window.requestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.oRequestAnimationFrame ||
           window.msRequestAnimationFrame ||
           defaultSetTimeout;
  }
})();

const cancelAnimationFrame = (() => {
  if (typeof window === 'undefined') {
    return defaultClearTimeout;
  } else {
    return window.cancelAnimationFrame ||
           window.webkitCancelAnimationFrame ||
           window.mozCancelAnimationFrame ||
           window.oCancelAnimationFrame ||
           window.msCancelAnimationFrame ||
           defaultClearTimeout;
  }
})();

const now = typeof window !== 'undefined' &&
            window.performance && (
              performance.now ||
              performance.mozNow ||
              performance.msNow ||
              performance.oNow ||
              performance.webkitNow
            );

const getTime = () => (now && now.call(performance)) || Date.now();

class AnimationCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.node = undefined;
  }

  componentDidMount() {
    if (this.props.count > 0) {
      this.node = ReactDom.findDOMNode(this.refs.badge);
      this.animate();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.count > prevProps.count) {
      this.node = ReactDom.findDOMNode(this.refs.badge);
      this.animate();
    }
  }

  animate() {
    const style0 = {
      '-moz-transform': this.props.effect[0],
      '-webkit-transform': this.props.effect[0],
      '-o-transform': this.props.effect[0],
      transform: this.props.effect[0],
    };
    this.attachStyle(style0);
    if (this.props.effect[2]) {
      this.attachStyle(this.props.effect[2]);
    }

    const startTime = getTime();
    let timer;
    const waitOrFinish = () => {
      const lastTime = getTime();
      const frame = Math.floor((lastTime - startTime) / (1000.0 / 60.0) % this.props.frameLength);
      if (frame === this.props.frameLength - 1) {
        cancelAnimationFrame(timer);
        const style1 = {
          '-moz-transform': this.props.effect[1],
          '-webkit-transform': this.props.effect[1],
          '-o-transform': this.props.effect[1],
          transform: this.props.effect[1],
        };
        this.attachStyle(style1);
        if (this.props.effect[3]) {
          this.attachStyle(this.props.effect[3]);
        }
      } else {
        timer = requestAnimationFrame(waitOrFinish);
      }
    };
    waitOrFinish();
  }

  attachStyle(style) {
    for (const key in style) {
      if (style.hasOwnProperty(key)) {
        this.node.style[key] = style[key];
      }
    }
  }

  render() {
    const value = this.props.label || this.props.count;
    return (
      <span ref="badge" style={this.props.style} className={this.props.className}>
        {value}
      </span>);
  }
}

AnimationCounter.propTypes = {
  count: PropTypes.number,
  label: PropTypes.string,
  style: PropTypes.object,
  effect: PropTypes.array,
  frameLength: PropTypes.number,
  className: PropTypes.string,
};

AnimationCounter.defaultProps = {
  count: 1,
  label: null,
  style: {},
  effect: Effect.SCALE,
  frameLength: 30.0,
};

export default AnimationCounter;
