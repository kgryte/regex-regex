'use strict';

var re = require( './../lib' );

console.log( re.test( '/beep/' ) );
// returns true

console.log( re.test( '/^.*$/ig' ) );
// returns true

console.log( re.test( '/^\\/([^\\/]+)\\/(.*)$/' ) );
// returns true

console.log( re.test( '/^\/([^\/]+)\/(.*)$/' ) );
// returns false

console.log( re.test( '/boop' ) );
// returns false

console.log( re.test( '' ) );
// returns false
