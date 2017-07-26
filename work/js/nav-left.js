
$(document).ready(function(){
  $("#open-nav").click(function(){
    if ( $("#open-nav").hasClass("open") ) {
	closeSidepage();
      } else {
	 openSidepage(); 
    }
  });
  function openSidepage() {
    $(".nav").css( "display", "block" );
    $("#open-nav").addClass("open");
  }
  
  function closeSidepage(){
    $("#open-nav").removeClass("open");
    $(".nav").css( "display", "none" );
  }
});