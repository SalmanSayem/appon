// Header Slider Start
$('.slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
    arrows:false,
    dots:true,
  });
// Header Slider End

// SS Slider Start
$('.ss_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
    arrows:false,
    dots:true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ]
  });
// SS Slider End

// User Slider Start

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.user_pic'
});
$('.user_pic').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  arrows:false,
  centerMode: true,
  centerPadding: 0,
  focusOnSelect: true
});

// User Slider End


  var navber = document.getElementById("navber")
  var back_to_top = document.querySelector(".back_to_top")
  
  window.addEventListener("scroll",function(){

    navber.classList.toggle("sticky",window.scrollY > 0)
    back_to_top.classList.toggle("bTot",window.scrollY > 150)

})

// Venu Box Start
new VenoBox({
  selector: '.play_icon',
});
// Venu Box End




// Header Slider Start
var preloader = document.querySelector(".preloader");
window.addEventListener("load",function(){
  preloader.classList.add("loader_hide")
})
// Header Slider End