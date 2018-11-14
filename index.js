// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the header
var header = document.getElementById('myHeader');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

// function smoothScroll() {
//   $('a').on('click', function(event) {

//     if (this.hash !== '') {

//       event.preventDefault();

//       var hash = this.hash;

//       $('html, body').animate(
//         {
//           scrollTop: $(hash).offset().top,
//         },
//         800,
//         function() {

//           window.location.hash = hash;
//         }
//       );
//     }
//   });
// }

// function eventHandlers() {
//   smoothScroll();
// }
