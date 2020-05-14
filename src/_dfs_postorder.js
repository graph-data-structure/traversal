import { _dfs_postorder_from_source } from './_dfs_postorder_from_source' ;

export function* _dfs_postorder ( G , seen ) {

	for ( let v of G.vitr( ) ) {

		if ( seen.has( v ) ) continue ;

		yield* _dfs_postorder_from_source( G , v , seen ) ;

	}

}

