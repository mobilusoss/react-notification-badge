'use strict';
import React from 'react/addons';
import chai from 'chai';
let expect = chai.expect;
import NotificationBadge from '../../lib/components/NotificationBadge';
import Effect from '../../lib/components/Effect';
const {TestUtils} = React.addons;

describe('Test of NotificationBadge', () => {

  let component;

  beforeEach(() => {
  });

  describe('test of properties', () =>{
    it('should have default properties', function () {
      component = TestUtils.renderIntoDocument(<NotificationBadge />);
      expect(component.props.count).to.be.eql(0);
      expect(component.props.style).to.be.empty;
    });
  });

  describe('test of rendered element', () =>{
    it('should render element with count and className', function () {
      component = TestUtils.renderIntoDocument(<NotificationBadge className={'myBadge'} count={10}/>);
      const badge = TestUtils.findRenderedDOMComponentWithClass(component, 'myBadge');
      expect(React.findDOMNode(badge).textContent).to.be.eql('10');
    });
  });

  describe('test of rendered element with label', () =>{
    it('should not render element with label and className', function () {
      component = TestUtils.renderIntoDocument(<NotificationBadge className={'myBadge'} count={1} label='label'/>);
      const badge = TestUtils.findRenderedDOMComponentWithClass(component, 'myBadge');
      expect(React.findDOMNode(badge).textContent).to.be.eql('label');
    });
  });

  describe('test of rendered element', () =>{
    it('should not render element when count = 0', function () {
      component = TestUtils.renderIntoDocument(<NotificationBadge className={'myBadge'} count={0}/>);
      const badge = TestUtils.scryRenderedDOMComponentsWithClass(component, 'myBadge');
      expect(badge).to.be.length(0);
    });
  });

  // @FIXME how to test animation?
  // describe('test of effect', () =>{
  //   let container = document.createElement('div');
  //   document.body.appendChild(container);
  //   beforeEach(function (done) {
  //     React.render(<NotificationBadge className={'myBadge'} count={10} duration={1000} effect={Effect.SCALE}/>, container, function(){
  //       component = this;
  //       done();
  //     });
  //   });
  //
  //   afterEach(function () {
  //     React.unmountComponentAtNode(container);
  //   });
  //
  //   it('should have effect with specified duration', function (done) {
  //     const badge = TestUtils.findRenderedDOMComponentWithClass(component, 'myBadge');
  //     console.log(React.findDOMNode(badge).style);
  //     expect(React.findDOMNode(badge).style.transform).to.be.eql('scale(1.8, 1.8)');
  //     setTimeout(() => {
  //       expect(React.findDOMNode(badge).style.transform).to.be.eql('scale(1.0, 1.0)');
  //       done();
  //     }, 1200);
  //   });
  // });
});
