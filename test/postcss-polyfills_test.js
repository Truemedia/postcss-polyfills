/*global describe,it*/
'use strict';
var assert = require('assert'),
  postcssPolyfills = require('../lib/postcss-polyfills.js');

describe('postcss-polyfills node module.', function() {
  it('must be awesome', function() {
    assert( postcssPolyfills.awesome(), 'awesome');
  });
});
