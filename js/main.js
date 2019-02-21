const hamburgerMenu = document.querySelector('#hamburger-menu'),
    mobileMenu = document.querySelector('#phone-menu'),
    closeMenu = document.querySelector('#close-menu');

hamburgerMenu.addEventListener('click', function(e) {
    e.preventDefault();
    mobileMenu.style.display = "block";
})
closeMenu.addEventListener('click', function(e) {
    e.preventDefault();
    mobileMenu.style.display = "none";
})

// console.log(hamburgerMenu);

// for (var i = 0 ; i < hamburgerMenu.length; i++) {
//     hamburgerMenu[i].addEventListener('click', function(event) {
//         event.preventDefault();
//         for (var m = 0 ; m < mobileMenu.length; m++) {
//             mobileMenu[m].style.display = "block";
//         }
//     })
// }