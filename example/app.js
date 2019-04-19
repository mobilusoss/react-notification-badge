'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import NotificationBadge  from '../lib/index.js';
import {Effect} from '../lib/index.js';

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
          <tbody>
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
                  <NotificationBadge count={this.state.count} effect={Effect.SCALE} frameLength={15.0}/>
                </div>
              </td>
              <td style={title}>frameLength:15.0</td>
              <td>
                <div style={container}>
                  <NotificationBadge count={this.state.count} effect={Effect.SCALE} frameLength={30.0}/>
                </div>
              </td>
              <td style={title}>frameLength:30.0</td>
              <td>
                <div style={container}>
                  <NotificationBadge count={this.state.count} effect={Effect.SCALE} frameLength={45.0}/>
                </div>
              </td>
              <td style={title}>frameLength:45.0</td>
              <td>
                <div style={container}>
                  <NotificationBadge count={this.state.count} effect={Effect.SCALE} frameLength={60.0}/>
                </div>
              </td>
              <td style={title}>frameLength:60.0</td>
              <td>
                <div style={container}>
                  <NotificationBadge count={this.state.count} effect={Effect.SCALE} frameLength={120.0}/>
                </div>
              </td>
              <td style={title}>frameLength:120.0</td>
            </tr>


            <tr>
              <td>
                <div style={container}>
                  <NotificationBadge count={this.state.count} effect={Effect.SCALE} style={{color: 'green', backgroundColor:'yellow', top: '', left: '0px', bottom: '0px', right: ''}}/>
                </div>
              </td>
              <td style={title}>Custome style</td>
            </tr>

            <tr>
              <td>
                <div style={container}>
                  <NotificationBadge label='!' count={this.state.count} effect={Effect.SCALE} />
                </div>
              </td>
              <td style={title}>Label badge</td>
            </tr>
          </tbody>
        </table>

        <button onClick={this.inc1.bind(this)}>+1</button>
        <button onClick={this.dec1.bind(this)}>-1</button>
        <p style={{position: 'fixed', 'bottom': '10px'}}>
          Source code can be found at <a href='https://github.com/mobilusoss/react-notification-badge/tree/master/example'>GitHub</a>
        </p>

      </div>
    )
  }
};

ReactDom.render(<App/>, document.getElementById('out'));
