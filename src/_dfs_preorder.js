
export function* _dfs_preorder ( G , seen ) {

	for ( let v of G.vitr( ) ) {

		if ( seen.has( v ) ) continue ;

		yield* _dfs_preorder_from_source( G , v , seen ) ;

	}

}

