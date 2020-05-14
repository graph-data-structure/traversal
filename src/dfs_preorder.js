import { _dfs_preorder } from './_dfs_preorder' ;

export function dfs_preorder ( G ) {

	return _dfs_preorder( G , new Set( ) ) ;

}

