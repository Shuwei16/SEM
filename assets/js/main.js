/**
* Template Name: Mentor
* Updated: Aug 30 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  /**
   * Display respective entry qualification input field
   */
  let entryQualificationDropdown = select('#entryQualificationDropdown');
  let triggeredQualificationSTPMAUEC = select('#triggeredQualificationSTPMAUEC');
  let triggeredQualificationSPM = select('#triggeredQualificationSPM');
  let triggeredQualificationDip = select('#triggeredQualificationDip');
  let triggeredQualificationFound = select('#triggeredQualificationFound');

  entryQualificationDropdown.addEventListener('change',function(){
    let selectedEntryQualification=entryQualificationDropdown.value;

    triggeredQualificationSTPMAUEC.style.display='none';
    triggeredQualificationSPM.style.display='none';
    triggeredQualificationDip.style.display='none';
    triggeredQualificationFound.style.display='none';

    if(selectedEntryQualification=='stpmAUEC'){
      triggeredQualificationSTPMAUEC.style.display='block';
    }
    else if(selectedEntryQualification=='spm'){
      triggeredQualificationSPM.style.display='block';
    }
    else if(selectedEntryQualification=='diploma'){
      triggeredQualificationDip.style.display='block';
    }
    else if(selectedEntryQualification=='foundation'){
      triggeredQualificationFound.style.display='block';
    }
    else{
      triggeredQualificationSTPMAUEC.style.display='none';
      triggeredQualificationSPM.style.display='none';
      triggeredQualificationDip.style.display='none';
      triggeredQualificationFound.style.display='none';
    }
  })

  /**
   * auto compare qualification
   */
  function validateForm() {
    var dipCGPA = document.forms["registrationForm"]["dipCGPA"].value;
    //var password = document.forms["registrationForm"]["password"].value;

    // Add your validation logic here
    if (dipCGPA < 2.5) {
        alert("Sorry, you are rejected for the course. Minimum CGPA required is 2.5.");
        return false; // Prevent form submission
    }

    // If validation passes, allow the form to submit
    return true;
}



//   document.addEventListener("DOMContentLoaded", function () {
//     let registrationForm = document.getElementById('triggeredQualificationDip'); // Updated ID
//     let diplomaCGPA = document.getElementById('dipCGPA');
//     let enrolResult = document.getElementById('enrolResult');

//     registrationForm.addEventListener("submit", function (event) {
//         event.preventDefault();

//         const cgpa = parseFloat(diplomaCGPA.value);
//         console.log("CGPA entered:", cgpa); // Add this line to check the value of cgpa
        
//         if (isNaN(cgpa)) {
//             enrolResult.innerText = "Please enter a valid CGPA.";
//         } 
//         else {
//             if (cgpa >= 2.5) {
//                 enrolResult.innerText = "Congratulations! You are accepted for the course.";
//             } else {
//                 enrolResult.innerText = "Sorry, you are rejected for the course. Minimum CGPA required is 2.5.";
//             }
//           }
//     });
// });

})()