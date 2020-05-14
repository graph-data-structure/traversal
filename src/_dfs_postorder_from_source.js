
export function* _dfs_postorder_from_source ( G , source , seen ) {

	seen.add( source ) ;

	for ( let v of G.dsitr( source ) ) {

		if ( seen.has( v ) ) continue ;

		yield* _dfs_postorder_from_source( G , v , seen ) ;

	}

	yield source ;

}

