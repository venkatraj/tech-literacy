(function($){
		$( document ).on( 'keyup', '#search-style #theme-live-search #search', function() {
			var keyValue = $(this).val();
		    if(keyValue){ 
				$.ajax({
					url : techliteracy.ajax_url,
					type : 'post',
					data : {
						action : 'tech_literacy_search',
						text : keyValue
					},
					success : function( response ) {
						$('#search_dropdown_list').html( response );
					}
				});
				return false;
		     }else {
		     	$('#search_dropdown_list').html( '' );
		     }
			
		});          

})(jQuery);   
 