var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});






$('.counter').counterUp({
  delay: 100,
  time: 10000
});





// toggle



function myFunction() {
  var checkBox = document.getElementById("chk");
  var firstwnd = document.getElementById("firstwnd");
  var scndwnd = document.getElementById("scndwnd");

  if (checkBox.checked == true){
    firstwnd.style.display = "block";
  } else {
    firstwnd.style.display = "none";
  }

  
  if (checkBox.checked == false){
    scndwnd.style.display = "block";
    } else {
      scndwnd.style.display = "none";
    }
}



// menu

$(window).scroll(function(){
  if($(this).scrollTop() > 100){
      $('.navbar').addClass('navone')
  } else{
      $('.navbar').removeClass('navtwo')
  }
});



// Sticky Header
$(window).scroll(function() {

  if ($(window).scrollTop() > 100) {
      $('.navbar-menu').addClass('sticky');
  } else {
      $('.navbar-menu').removeClass('sticky');
  }
});






var btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
btn.addClass('show');
} else {
 btn.removeClass('show');
 }
 });

 btn.on('click', function(e) {
 e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
 });










 $(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 100){
          $('#navtwo').fadeIn();
      }else{
          $('#navtwo').fadeOut()
      }
  });
  $('#navtwo').scroll(function(){
      $('html, body').animate({
          scrollTop:0
      }, 3000);
  });
});




