
var itertools = require( "@aureooms/js-itertools" ) ;
var list = itertools.list ;

var collections = require( "@aureooms/js-collections" ) ;
var set = collections.set ;

var dll = require( "@aureooms/js-dll" ) ;
var adjacencylist = require( "@aureooms/js-adjacency-list" ) ;

var augment = require( "@aureooms/js-graph-augment" ).augment ;
var labeled = require( "@aureooms/js-graph-labeled" ) ;
var sugar = require( "@aureooms/js-graph-sugar" ) ;

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

	assert.ok( set( preorder( G ) ).isequal( [ 1 , 2 , 3 ] ) , "preorder" ) ;
	assert.deepEqual( list( preorder_from_source( G , 2 ) ) , [ 2 , 3 ] , "preorder_from_source" ) ;
	assert.ok( set( postorder( G ) ).isequal( [ 3 , 2 , 1 ] ) , "postorder" ) ;
	assert.deepEqual( list( postorder_from_source( G , 2 ) ) , [ 3 , 2 ] , "postorder_from_source" ) ;

} ) ;

