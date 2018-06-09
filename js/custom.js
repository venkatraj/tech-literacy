(function($){

		$("#search-style #theme-live-search #search").keydown(function(){
			if ($(this).val().length) {
	        $('#search-style #theme-live-search .search-field').addClass('search-loader');
		    }else{
	            $('#search-style #theme-live-search .search-field').removeClass('search-loader');
		    }
	    }); 

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
             			$('#search-style #theme-live-search .search-field').removeClass('search-loader');
					}
				});
				return false;
		     }else {
		     	$('#search_dropdown_list').html( '' );
		     }
			
		});          

 
})(jQuery);   

// jQuery powered scroll to top

jQuery(document).ready(function(){

	//Check to see if the window is top if not then display button
	jQuery(window).scroll(function(){ 
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scroll-to-top').fadeIn();
		} else {
			jQuery('.scroll-to-top').fadeOut();  
		}
	});

	//Click event to scroll to top
	jQuery('.scroll-to-top').click(function(){
		jQuery('html, body').animate({scrollTop : 0},800);
		return false;
	});
	

});
 