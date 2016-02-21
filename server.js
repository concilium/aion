#!/usr/bin/env node

'use strict';

var debug = require( 'debug' )( 'raneto' );
var raneto = require( 'raneto' );
var config = require( './config.default.js' );

var app = raneto( config );
var server = app.listen( app.get( 'port' ), function () {
  debug( 'Express HTTP server listening on port ' + server.address().port );
} );
