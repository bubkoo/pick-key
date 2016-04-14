'use strict';

var isObject = require('is-object');
var pickItem = require('pick-item');
var keys     = require('object-keys');


module.exports = function (object) {

  if (!object || !isObject(object)) {
    return object;
  }

  var names  = keys(object);
  var length = names.length;

  if (!length) {
    return undefined;
  }

  return pickItem(names);
};
