
const _dfs_preorder = function* ( G , seen ) {

	for ( let v of G.vitr( ) ) {

		if ( seen.has( v ) ) continue ;

		yield* _dfs_preorder_from_source( G , v , seen ) ;

	}

} ;

exports._dfs_preorder = _dfs_preorder ;
