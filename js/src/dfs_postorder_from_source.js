
const dfs_postorder_from_source = function ( G , source ) {

	return _dfs_postorder_from_source( G , source , new Set( ) ) ;

} ;

exports.dfs_postorder_from_source = dfs_postorder_from_source ;
