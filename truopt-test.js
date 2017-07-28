
const assert = require( "assert" );
const truopt = require( "./truopt.js" );

assert.deepEqual( truopt( [ "orange", "apple" ] ),
	{ "orange": true, "apple": true }, "should be equal to { 'orange': true, 'apple': true }" );

assert.deepEqual( truopt( { "orange": true, "apple": true } ),
	{ "orange": true, "apple": true }, "should be equal to { 'orange': true, 'apple': true }" );

console.log( "ok" );
