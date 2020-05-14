
export function* _dfs_preorder_from_source ( G , source , seen ) {

	seen.add( source ) ;

	yield source ;

	for ( let v of G.dsitr( source ) ) {

		if ( seen.has( v ) ) continue ;

		yield* _dfs_preorder_from_source( G , v , seen ) ;

	}

}

