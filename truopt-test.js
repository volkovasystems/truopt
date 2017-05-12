
const assert = require( "assert" );
const truopt = require( "./truopt.js" );

assert.deepEqual( truopt( [ "orange", "apple" ] ),
	{ "orange": true, "apple": true }, "should be deeply equal" );

assert.deepEqual( truopt( { "orange": true, "apple": true } ),
	{ "orange": true, "apple": true }, "should be deeply equal" );

console.log( "ok" );
