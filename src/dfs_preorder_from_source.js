import { _dfs_preorder_from_source } from './_dfs_preorder_from_source' ;

export function dfs_preorder_from_source ( G , source ) {

	return _dfs_preorder_from_source( G , source , new Set( ) ) ;

}

