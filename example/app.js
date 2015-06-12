'use strict';

import React from 'react/addons';
import NotificationBadge  from '../index.js';
import {Effect} from '../index.js';

//allow react dev tools work
window.React = React;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  }

  inc1(){
    this.inc(1);
  }
  dec1(){
    this.inc(-1);
  }
  inc(n){
    let count = this.state.count + n;
    if (count < 0) count = 0;
    this.setState({
      count: count
    });
  }


  render() {

    let container = {
      height: '50px',
      width: '50px',
      display: 'inline-block',
      margin: '5px',
      backgroundColor: 'gray'
    }

    let title = {
      width: '100px'
    }

    return (

      <div>
        <table>
          <tr>
            <td>
              <div style={container}>
                <NotificationBadge count={this.state.count} className={'abc'} effect={Effect.ROTATE_X}/>
              </div>
            </td>
            <td style={title}>Effect.ROTATE_X</td>
          </tr>

          <tr>
            <td>
              <div style={container}>
                <NotificationBadge count={this.state.count} effect={Effect.ROTATE_Y}/>
              </div>
            </td>
            <td style={title}>Effect.ROTATE_Y</td>
          </tr>

          <tr>
            <td>
              <div style={container}>
                <NotificationBadge count={this.state.count} effect={Effect.SCALE}/>
              </div>
            </td>
            <td style={title}>Effect.SCALE</td>
          </tr>


          <tr>
            <td>
              <div style={container}>
                <NotificationBadge count={this.state.count} effect={[null, null, {top:'-5px'}, {top:'0px'}]}/>
              </div>
            </td>
            <td style={title}>Custome effect</td>
          </tr>

          <tr>
            <td>
              <div style={container}>
                <NotificationBadge count={this.state.count} effect={Effect.SCALE} duration={100}/>
              </div>
            </td>
            <td style={title}>Duration:100</td>
          </tr>

          <tr>
            <td>
              <div style={container}>
                <NotificationBadge count={this.state.count} effect={Effect.SCALE} style={{color: 'green', backgroundColor:'yellow', top: '', left: '0', bottom: '0px', right: ''}}/>
              </div>
            </td>
            <td style={title}>Custome style</td>
          </tr>

        </table>

        <button onClick={this.inc1.bind(this)}>+1</button>
        <button onClick={this.dec1.bind(this)}>-1</button>
      </div>
    )
  }
};

React.render(<App/>, document.getElementById('out'));
