import { _dfs_postorder_from_source } from './_dfs_postorder_from_source' ;

export function dfs_postorder_from_source ( G , source ) {

	return _dfs_postorder_from_source( G , source , new Set( ) ) ;

}

