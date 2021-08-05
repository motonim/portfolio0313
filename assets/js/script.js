$('.slider').slick({
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 1,
  focusOnSelect: true,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
      },
    },
  ],
});

window.addEventListener('scroll', function () {
  var nav = document.querySelector('.nav');
  nav.classList.toggle('sticky', window);
});

$('.hamburger-menu').on('click', function () {
  $(this).toggleClass('close');
  $('.nav-list').toggleClass('show');
});

// function closeNav() {
//   document.querySelector('.hamburger-menu').classList.add('close')
// }

// document.querySelector('body').addEventListener('click', closeNav)
