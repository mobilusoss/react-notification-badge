'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Effect from './Effect';

const requestAnimationFrame = (() => {
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(callback){
                window.setTimeout(callback, 1000.0 / 60.0);
              };
    })();

const cancelAnimationFrame = (() => {
      return  window.cancelAnimationFrame       ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame    ||
              window.oCancelAnimationFrame      ||
              window.msCancelAnimationFrame     ||
              function(timer){
                window.clearTimeout(timer);
              };
    })();

const now = window.performance && (performance.now ||
                                  performance.mozNow ||
                                  performance.msNow ||
                                  performance.oNow ||
                                  performance.webkitNow);

let getTime = () => {
  return ( now && now.call(performance)) || (new Date.now());
}

class AnimationCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    if (this.props.count > 0) {
      this.animate();
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.count > prevProps.count) {
      this.animate();
    }
  }

  animate(){
    let badge = ReactDom.findDOMNode(this.refs.badge);
    badge.style['-moz-transform'] = badge.style['-webkit-transform'] = badge.style['-o-transform'] = badge.style['-ms-transform'] = badge.style.transform = this.props.effect[0];
    if (this.props.effect[2]) {
      this.attachStyle(badge, this.props.effect[2]);
    }

    let startTime = getTime();
    let timer;
    let waitOrFinish = () => {
        let lastTime = getTime();
        let frame = Math.floor((lastTime - startTime) / (1000.0 / 60.0) % this.props.frameLength);
        if (frame === this.props.frameLength - 1){
          cancelAnimationFrame(timer);
          badge.style['-moz-transform'] = badge.style['-webkit-transform'] = badge.style['-o-transform'] = badge.style['-ms-transform'] = badge.style.transform = this.props.effect[1];
          if (this.props.effect[3]) {
            this.attachStyle(badge, this.props.effect[3]);
          }
        } else {
          timer = requestAnimationFrame(waitOrFinish);
        }
    };
    waitOrFinish();
  }

  attachStyle(node, style){
    for (let key in style) {
      node.style[key] = style[key];
    }
  }

  render() {
    let value = this.props.label || this.props.count;
    return (<span ref='badge' style={this.props.style} className={this.props.className}>{value}</span>);
  }
}

AnimationCounter.propTypes = {
  count: React.PropTypes.number,
  label: React.PropTypes.string,
  style: React.PropTypes.object,
  effect: React.PropTypes.array,
  frameLength: React.PropTypes.number,
  className: React.PropTypes.string
};

AnimationCounter.defaultProps = {
  count: 1,
  label: null,
  style: {},
  effect: Effect.SCALE,
  frameLength: 30.0
};

export default AnimationCounter;
