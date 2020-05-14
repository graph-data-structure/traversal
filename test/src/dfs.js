import test from 'ava';
import * as graphtraversal from '../../src';

import { list } from "@aureooms/js-itertools" ;

import { set } from "@aureooms/js-collections" ;

import { DoublyLinkedList } from "@aureooms/js-dll" ;
import adjacencylist from "@aureooms/js-adjacency-list" ;

import { augment } from "@aureooms/js-graph-augment" ;
import labeled from "@aureooms/js-graph-labeled" ;
import sugar from "@aureooms/js-graph-sugar" ;

const _MultiDiGraph = adjacencylist.MultiDiGraph( DoublyLinkedList , Map ) ;
const MultiDiGraph = augment( _MultiDiGraph ).with( labeled.label , sugar.add_missing_vertices ) ;

const preorder = graphtraversal.dfs_preorder ;
const preorder_from_source = graphtraversal.dfs_preorder_from_source ;
const postorder = graphtraversal.dfs_postorder ;
const postorder_from_source = graphtraversal.dfs_postorder_from_source ;

test( "dfs" , t => {

	const G = new MultiDiGraph( ) ;

	G.eadd( 1 , 2 ) ;
	G.eadd( 2 , 3 ) ;

	t.true( set( preorder( G ) ).isequal( [ 1 , 2 , 3 ] ) , "preorder" ) ;
	t.deepEqual( list( preorder_from_source( G , 2 ) ) , [ 2 , 3 ] , "preorder_from_source" ) ;
	t.true( set( postorder( G ) ).isequal( [ 3 , 2 , 1 ] ) , "postorder" ) ;
	t.deepEqual( list( postorder_from_source( G , 2 ) ) , [ 3 , 2 ] , "postorder_from_source" ) ;

} ) ;

