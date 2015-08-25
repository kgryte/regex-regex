/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	re = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'regex-regex', function tests() {

	it( 'should export a regular expression', function test() {
		assert.isTrue( re instanceof RegExp );
	});

	it( 'should detect a regular expression string', function test() {
		var values = [
			'/beep/',
			'/(?:)/',
			'/whatever/',
			'/this/g',
			'/that/i',
			'/again/mgi',
			'/^.*$/ig',
			'/^\\/([^\\/]+)\\/(.*)$/',
			'/^\\/((?:\\\\\/|[^\\/])+)\\/(.*)$/'
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( re.test( values[i] ), values[i] );
		}
	});

	it( 'should detect a non-regular expression string', function test() {
		var values = [
			'beep',
			'5',
			'',
			'/dir',
			'/dir//',
			'/dir/goo'
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isFalse( re.test( values[i] ), values[i] );
		}
	});

});
