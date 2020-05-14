
const dfs_preorder_from_source = function ( G , source ) {

	return _dfs_preorder_from_source( G , source , new Set( ) ) ;

} ;

exports.dfs_preorder_from_source = dfs_preorder_from_source ;
