import test from 'ava';
import * as graphtraversal from '../../src';

import itertools from "@aureooms/js-itertools" ;
var list = itertools.list ;

import collections from "@aureooms/js-collections" ;
var set = collections.set ;

import dll from "@aureooms/js-dll" ;
import adjacencylist from "@aureooms/js-adjacency-list" ;

var augment = require( "@aureooms/js-graph-augment" ).augment ;
import labeled from "@aureooms/js-graph-labeled" ;
import sugar from "@aureooms/js-graph-sugar" ;

var _MultiDiGraph = adjacencylist.MultiDiGraph( dll.DoublyLinkedList , Map ) ;
var MultiDiGraph = augment( _MultiDiGraph ).with( labeled.label , sugar.add_missing_vertices ) ;

var preorder = graphtraversal.dfs_preorder ;
var preorder_from_source = graphtraversal.dfs_preorder_from_source ;
var postorder = graphtraversal.dfs_postorder ;
var postorder_from_source = graphtraversal.dfs_postorder_from_source ;

test( "dfs" , function ( assert ) {

	var G = new MultiDiGraph( ) ;

	G.eadd( 1 , 2 ) ;
	G.eadd( 2 , 3 ) ;

	assert.t.truthy( set( preorder( G ) ).isequal( [ 1 , 2 , 3 ] ) , "preorder" ) ;
	assert.t.deepEqual( list( preorder_from_source( G , 2 ) ) , [ 2 , 3 ] , "preorder_from_source" ) ;
	assert.t.truthy( set( postorder( G ) ).isequal( [ 3 , 2 , 1 ] ) , "postorder" ) ;
	assert.t.deepEqual( list( postorder_from_source( G , 2 ) ) , [ 3 , 2 ] , "postorder_from_source" ) ;

} ) ;

