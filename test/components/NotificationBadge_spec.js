'use strict';
require("@babel/polyfill");
import React from 'react';
import ReactDom from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import chai from 'chai';
let expect = chai.expect;
import NotificationBadge from '../../src/components/NotificationBadge';
import Effect from '../../src/components/Effect';


describe('Test of NotificationBadge', () => {

  let component;

  beforeEach(() => {
  });

  describe('test of properties', () =>{
    it('should have default properties', function () {
      component = ReactTestUtils.renderIntoDocument(<NotificationBadge />);
      expect(component.props.count).to.be.eql(0);
      expect(component.props.style).to.be.empty;
    });
  });

  describe('test of rendered element', () =>{
    it('should render element with count and className', function () {
      component = ReactTestUtils.renderIntoDocument(<NotificationBadge className={'myBadge'} count={10}/>);
      const badge = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'myBadge');
      expect(ReactDom.findDOMNode(badge).textContent).to.be.eql('10');
    });
  });

  describe('test of rendered element with label', () =>{
    it('should not render element with label and className', function () {
      component = ReactTestUtils.renderIntoDocument(<NotificationBadge className={'myBadge'} count={1} label='label'/>);
      const badge = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'myBadge');
      expect(ReactDom.findDOMNode(badge).textContent).to.be.eql('label');
    });
  });

  describe('test of rendered element', () =>{
    it('should not render element when count = 0', function () {
      component = ReactTestUtils.renderIntoDocument(<NotificationBadge className={'myBadge'} count={0}/>);
      const badge = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'myBadge');
      expect(badge).to.be.length(0);
    });
  });

  // @FIXME how to test animation?
  // describe('test of effect', () =>{
  //   let container = document.createElement('div');
  //   document.body.appendChild(container);
  //   beforeEach(function (done) {
  //     ReactDom.render(<NotificationBadge className={'myBadge'} count={10} duration={1000} effect={Effect.SCALE}/>, container, function(){
  //       component = this;
  //       done();
  //     });
  //   });
  //
  //   afterEach(function () {
  //     ReactDom.unmountComponentAtNode(container);
  //   });
  //
  //   it('should have effect with specified duration', function (done) {
  //     const badge = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'myBadge');
  //     console.log(ReactDom.findDOMNode(badge).style);
  //     expect(ReactDom.findDOMNode(badge).style.transform).to.be.eql('scale(1.8, 1.8)');
  //     setTimeout(() => {
  //       expect(ReactDom.findDOMNode(badge).style.transform).to.be.eql('scale(1.0, 1.0)');
  //       done();
  //     }, 1200);
  //   });
  // });
});
