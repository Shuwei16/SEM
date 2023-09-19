/**
 * Template Name: Mentor
 * Updated: Aug 30 2023 with Bootstrap v5.3.1
 * Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Display respective entry qualification input field
   */
  let entryQualificationDropdown = select("#entryQualificationDropdown");
  let triggeredQualificationSTPMAUEC = select(
    "#triggeredQualificationSTPMAUEC"
  );
  let triggeredQualificationSPM = select("#triggeredQualificationSPM");
  let triggeredQualificationDip = select("#triggeredQualificationDip");
  let triggeredQualificationFound = select("#triggeredQualificationFound");

  entryQualificationDropdown.addEventListener("change", function () {
    let selectedEntryQualification = entryQualificationDropdown.value;

    triggeredQualificationSTPMAUEC.style.display = "none";
    triggeredQualificationSPM.style.display = "none";
    triggeredQualificationDip.style.display = "none";
    triggeredQualificationFound.style.display = "none";

    if (selectedEntryQualification == "stpmAUEC") {
      triggeredQualificationSTPMAUEC.style.display = "block";
    } else if (selectedEntryQualification == "spm") {
      triggeredQualificationSPM.style.display = "block";
    } else if (selectedEntryQualification == "diploma") {
      triggeredQualificationDip.style.display = "block";
    } else if (selectedEntryQualification == "foundation") {
      triggeredQualificationFound.style.display = "block";
    } else {
      triggeredQualificationSTPMAUEC.style.display = "none";
      triggeredQualificationSPM.style.display = "none";
      triggeredQualificationDip.style.display = "none";
      triggeredQualificationFound.style.display = "none";
    }
  });
})();

/**
 * auto compare qualification
 */
function validateForm() {
  let entryRequirementValue = entryQualificationDropdown.value;
  let courseSelected = programmeDropdown.value;
  let successMsg = "Congrats! You are accepted and enrolled in the course : " + courseSelected +"!";
  let errorMsg = "Sorry, you are rejected for this course. Minimum CGPA/Grade required is 2.5 (C).";

  //JX section
  if(entryRequirementValue == "stpmAUEC"){
      // STPM variables
      let stpmMathMGrade = document.forms["registrationForm"]["stpmMathMGrade"].value;
      let stpmMathTGrade = document.forms["registrationForm"]["stpmMathTGrade"].value;
      let stpmICTGrade = document.forms["registrationForm"]["stpmICTGrade"].value;
      let stpmPhyGrade = document.forms["registrationForm"]["stpmPhyGrade"].value;
      let stpmChmGrade = document.forms["registrationForm"]["stpmChmGrade"].value;
      let stpmBioGrade = document.forms["registrationForm"]["stpmBioGrade"].value;

      let count = 0; // Initialize a count variable to keep track of grades greater than "C"

      if (stpmMathMGrade <= "C-") {
        count++;
      }
      if (stpmMathTGrade <=  "C-") {
        count++;
      }
      if (stpmICTGrade <=  "C-") {
        count++;
      }
      if (stpmPhyGrade <=  "C-") {
        count++;
      }
      if (stpmChmGrade <=  "C-") {
        count++;
      }
      if (stpmBioGrade <=  "C-") {
        count++;
      }

      if(count>=3) {
        alert(successMsg);
        count = 0;
      }
      else{
        alert(errorMsg);
        count = 0;
      }
  }
  else if(entryRequirementValue == "spm"){
      // SPM variables
      let spmBMGrade = document.forms["registrationForm"]["spmBMGrade"].value;
      let spmEngGrade = document.forms["registrationForm"]["spmEngGrade"].value;
      let spmSjGrade = document.forms["registrationForm"]["spmSjGrade"].value;
      let spmAMGrade = document.forms["registrationForm"]["spmAMGrade"].value;
      let spmMathsGrade = document.forms["registrationForm"]["spmMathsGrade"].value;
      let spmPhyGrade = document.forms["registrationForm"]["spmPhyGrade"].value;
      let spmChmGrade = document.forms["registrationForm"]["spmChmGrade"].value;
      let spmBioGrade = document.forms["registrationForm"]["spmBioGrade"].value;
      let spmMoralGrade = document.forms["registrationForm"]["spmMoralGrade"].value;

      let count = 0;
      let sejPass = true;

      if (spmBMGrade <= "C-") {
        count++;
      }
      if (spmEngGrade <=  "C-") {
        count++;
      }
      if (spmSjGrade <= "C-") {
        count++;
      }
      if (spmSjGrade > "D") {
        sejPass=false;
      }
      else{
        sejPass=true;
      }
      if (spmAMGrade <=  "C-") {
        count++;
      }
      if (spmMathsGrade <=  "C-") {
        count++;
      }
      if (spmPhyGrade <=  "C-") {
        count++;
      }
      if (spmChmGrade <=  "C-") {
        count++;
      }
      if (spmBioGrade <=  "C-") {
        count++;
      }
      if (spmMoralGrade <=  "C-") {
        count++;
      }

      if(count<3) {
        alert(errorMsg);
         count = 0;
         sejPass = true;
      }
      else if(sejPass && count>=3){
        alert(successMsg);
        count = 0;
        sejPass = true;
      }
      else{
        alert("Sorry, you failed your Sejarah.");
        count = 0;
        sejPass = true;
      }
  }
  else if(entryRequirementValue == "diploma"){
      // Diploma variable
      let dipCGPA = document.forms["registrationForm"]["dipCGPA"].value;

      if (dipCGPA<=0 || dipCGPA>4) {
        alert('Please enter a valid CGPA.(1-4).');
      } else if (dipCGPA < 2.5) {
        alert('Your CGPA is below 2.5: ' + dipCGPA);
      } else {
        alert(successMsg);
      }
  }
  else if(entryRequirementValue == "foundation"){
      // Foundation variable
      let foundCGPA = document.forms["registrationForm"]["foundCGPA"].value;

      if (foundCGPA<=0 || foundCGPA>4) {
        alert('Please enter a valid CGPA.(1-4).');
      } else if (foundCGPA < 2.5) {
        alert('Your CGPA is below 2.5: ' + foundCGPA);
      } else {
        alert(successMsg);
      }
  }
  else{
    alert("Please make a choice!");
  }
}