
const _dfs_postorder = function* ( G , seen ) {

	for ( let v of G.vitr( ) ) {

		if ( seen.has( v ) ) continue ;

		yield* _dfs_postorder_from_source( G , v , seen ) ;

	}

} ;

exports._dfs_postorder = _dfs_postorder ;
