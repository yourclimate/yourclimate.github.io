$(document).ready(function () {
	
/*
	// move the submit button on the register form to the bottom 
	$button = $("form#user-register .form-submit");
	
	$button.remove();
	
	$("form#user-register").append($button);
*/
	
	// change the legend of the newsletter subscription fieldset
	$("legend:contains('Current newsletter subscriptions')").text("My e-newsletters");


	// add a clearing element at the end of all forms before the buttons
	$(".node-form .admin").append("<div class='clear'>&nbsp;</div>");

});
