/**
 * Load More Anything Pro
 */
jQuery(document).ready(function($){

	// Page Title Update
	jQuery(document).on('ald_ajax_content_ready', function(e, data, args){
		if ( args['update_page_title'] && args['update_page_title'] == "yes" ) {
			document.title = $(data).filter('title').text();
		}
	});

	// // Pro Triggers
	// jQuery(document).on('ald_ajax_content_success', function(e, args){
	// 	if ( args['update_page_title'] && args['update_page_title'] == "yes" ) {
	// 		document.title = $(data).filter('title').text();
	// 	}
	// });


});
