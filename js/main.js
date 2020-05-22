$(function(){
 $('.about-slider').slick({
 	infinite: true,
 	dots: true,
 	arrows: true,
 	centerMode: true,
	slidesToShow: 1,
	slidesToScroll: 1,
 	prevArrow: '<img class="slider-arrows arrow-left" src="img/arrow-left.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrows arrow-right" src="img/arrow-right.svg" alt=""></img>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        arrows: false,
        centerPadding: '20px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
 });
 $('.reviews-slider').slick({
 	infinite: true,
 	dots: true,
 	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
 	prevArrow: '<img class="slider-arrows arrow-left" src="img/arrow-left.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrows arrow-right" src="img/arrow-right.svg" alt=""></img>',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        centerMode: false,
        arrows: false,
        centerPadding: '0px',
      }
    }
  ]
 });
 
 $('#create-1').click(function(){
 	$('#create-1').addClass('active');
  $('#create-2').removeClass('active');
 // $('#create-3').removeClass('active');
 });
 $('#create-2').click(function(){
  $('#create-1').removeClass('active');
  $('#create-2').addClass('active');
 // $('#create-3').removeClass('active');
 });
 // $('#create-3').click(function(){
 //  $('#create-1').removeClass('active');
 //  $('#create-2').removeClass('active');
 //  $('#create-3').addClass('active');
 // });
});