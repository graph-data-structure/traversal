import { _dfs_postorder } from './_dfs_postorder' ;

export function dfs_postorder ( G ) {

	return _dfs_postorder( G , new Set( ) ) ;

}

