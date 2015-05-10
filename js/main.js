$(document).ready(function(){
  $('img').draggable();
});

$(document).ready(function() { 
	$( "#forteff" ).click(function() {
  	$( "img" ).toggle( "pulsate", {times:2},  500 )
  			  .toggle( "pulsate", {times:2}, 1000);
	});
});