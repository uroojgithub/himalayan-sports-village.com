function scrollDown() {
	var elmnt = document.getElementById("cm-about");
	elmnt.scrollIntoView({ 
		behavior: 'smooth' 
	});
}

$(function() {
//old
$(function() {
	$(document).on("change", ".cm-assoc-country", function() {
		$(".cm-assoc-city").hide();
		$($(this).val()).show()
	});
})
//new

$(document).on("change", ".cm-assoc-country", function() {
	var idc = $(this).val();
// $(".cm-assoc-city").hide();
var state_ava = $("."+idc).val();
console.log("state_ava "+state_ava+" "+$(this).val());
if(state_ava != "" && state_ava != undefined && state_ava == 1){

	$(".cm-assoc-state").show();
	$(".cm-assoc-state").children('option').hide();
	$(".cm-assoc-state").children("option[data-id1^=" + $(this).val() + "]").show();
	$(".cm-assoc-city").hide();
	$(".cm-assoc-state")[0].selectedIndex = 0;        
	console.log($(this).val());
}else{

	$(".cm-assoc-state").hide();
	$(".cm-assoc-city").hide();
	$("."+idc).show();
}

});

$(document).on("change", ".cm-assoc-state", function() {
	var id = $(this).val();
	$(".cm-assoc-city").hide();
	$("."+id).show()
});


})


$(function(){
	$('.gallery-grid').masonry({ 
	});
});


$(function() {
	$("#chek_date").datepicker({
		changeMonth: true,
		changeYear: true
	});
});
$(function() {
	$("#chekout_date").datepicker({
		changeMonth: true,
		changeYear: true
	});
});



jQuery( document ).ready(function() {


	if(jQuery('#book_list_filter:checked').length > 0){
		jQuery('.book_list_filter_day_wrap').show();
	}

	jQuery(document).on("click","#book_list_filter",function() {
		var new_arrive_day = jQuery(this).attr('data-value');
		if (jQuery(this).is(':checked')) {
			jQuery('.book_list_filter_day_wrap').show();

			if(jQuery('input[type="number"]').val() !== ""){
				jQuery('button.book_list_filter.btn').trigger('click');
			}
		}else{
			jQuery('input[type="number"]').val(new_arrive_day);
			jQuery('.book_list_filter_day_wrap').hide();

		}

	});

	jQuery(document).on("click",".book_list_filter.btn",function() {

		var new_arrive_day = jQuery('input[type="number"]').val();
		if (jQuery('#book_list_filter').is(':checked')) {
			selected_value = jQuery('#book_list_filter').val();
		}else{
			selected_value = "all";
		}
		var base_url        = jQuery('#book_list_filter').attr('data-url');
		var url             = base_url+'/?blf='+selected_value+'&w_day='+new_arrive_day;
		window.location.replace(url);

	});

	
});

function btn_click(){
	
}