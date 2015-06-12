# react-notification-badge [![Build Status](https://travis-ci.org/georgeOsdDev/react-notification-badge.svg?branch=develop)](https://travis-ci.org/georgeOsdDev/react-notification-badge) [![npm version](https://badge.fury.io/js/react-notification-badge.svg)](http://badge.fury.io/js/react-notification-badge)

Simple notification badge react component

[![Gyazo](http://i.gyazo.com/70028f7eb324a89fb130401774e8a159.gif)](http://gyazo.com/70028f7eb324a89fb130401774e8a159)

## Demo

[View Demo](http://georgeosddev.github.io/react-notification-badge/example/)

## Installation

```bash
npm install --save react-notification-badge
```

## API

### `NotificationBadge`

#### Props

```javascript
NotificationBadge.propTypes = {
  count: React.PropTypes.number,
  containerStyle: React.PropTypes.object,
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  effect: React.PropTypes.array,
  duration: React.PropTypes.number
};
```

  * `count`: Badge count, if `count < 1`, badge will not shown.

  * `containerStyle`: custom style of container

  * `style`: custom style of badge

  * `className`: className of badge

  * `effect`: effect of notification.
    effect array should be `[string, string, object, object]`.

    `effect[0]` will be applied to `transform` on `componentWillEnter`.
    `effect[1]` will be applied to `transform` on `componentDidEnter`.
    `effect[2]` will be applied as `style[key] = value` on `componentWillEnter`.
    `effect[3]` will be applied to `style[key] = value` on `componentDidEnter`.

    Pre defined effect is available as
      * `Effect.ROTATE_X`
      * `Effect.ROTATE_Y`
      * `Effect.SCALE`

  * `duration`: duration between `componentWillEnter` and `componentDidEnter` (default 500)

## Usage example

```javascript

import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';

<div style={container}>
  <NotificationBadge count={this.state.count} effect={Effect.SCALE}/>
</div>
```

See  [example](https://github.com/georgeOsdDev/react-notification-badge/tree/develop/example)

```bash
npm install
npm run start:example
```

## Tests

```bash
npm test
```