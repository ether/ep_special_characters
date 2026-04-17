'use strict';

const assert = require('assert').strict;
const hooks = require('../../../../static/js/hooks');

describe(__filename, function () {
  describe('aceAttribsToClasses', function () {
    it('invokes cb with the class when key matches and value is set', function (done) {
      hooks.aceAttribsToClasses('aceAttribsToClasses', {key: 'specialCharacters', value: 'Ω'},
          (classes) => {
            assert.deepEqual(classes, ['specialCharacters:Ω']);
            done();
          });
    });

    it('invokes cb with an empty array when key does not match (regression for #4)', function (done) {
      hooks.aceAttribsToClasses('aceAttribsToClasses', {key: 'bold', value: 'true'},
          (classes) => {
            assert.deepEqual(classes, []);
            done();
          });
    });

    it('invokes cb with an empty array when value is empty (regression for #4)', function (done) {
      hooks.aceAttribsToClasses('aceAttribsToClasses', {key: 'specialCharacters', value: ''},
          (classes) => {
            assert.deepEqual(classes, []);
            done();
          });
    });
  });
});
