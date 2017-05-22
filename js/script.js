$(document).ready(function() {
    $("#menu").click(function(){
		$(".menuItem").css("display") === "none" ? $(".menuItem").css("display", "block"): $(".menuItem").css("display", "none");
	});
	$(".menuItem").click(function(){
		$(".menuItem").toggle();
	});
});
