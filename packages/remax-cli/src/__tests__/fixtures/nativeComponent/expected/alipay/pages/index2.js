'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index-007f8e63.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var alipay = require('../alipay-3210329c.js');

var D = index$1.createNativeComponent('d-0');
var F = index$1.createNativeComponent('f-0');


var Hello = (function () {
  return React.createElement(alipay.View, null, React.createElement(F, null), React.createElement(D, null));
});

var Nihao = (function () {
  return React.createElement(alipay.View, null, React.createElement(Hello, null));
});

var _page = function _page() {
  return React.createElement(alipay.View, null, React.createElement(Nihao, null));
};

var index2 = Page(index$1.createPageConfig(_page));

exports.default = index2;