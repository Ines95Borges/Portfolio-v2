document.addEventListener("DOMContentLoaded", () => {

  // Variables
  const ageSpan = document.querySelector("#myAge");
  let docStyle = getComputedStyle(document.documentElement);
  const darkCircle = document.getElementsByClassName("circle-dark")[0];
  const whiteCircle = document.getElementsByClassName("circle-white")[0];
  const body = document.getElementsByTagName("body")[0];

  // Change theme colors
  darkCircle.addEventListener("click", () => body.classList.add("theme-dark"));
  whiteCircle.addEventListener("click", () => body.classList.remove("theme-dark"));

  // Display my age in a dinamically way
  const now = new Date();
  const currentDay = now.getDate();
  const currentMonth = now.getMonth() + 1;
  if(currentDay >= 20 && currentMonth >= 5){
    ageSpan.innerHTML = now.getFullYear() - 1995;
  }else{
    ageSpan.innerHTML = now.getFullYear() - 1995 - 1;
  }


  // Hide scroll bar
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-10vh";
    }
    prevScrollpos = currentScrollPos;
  }

  // Make of the dropdown functionality
  const dropdownButton = document.querySelector("#hamburger");
  const dropdownContent = document.querySelector(".dropdown-content");
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  let turn = 0;
  dropdownButton.addEventListener("click", () => {
    turn%2==0 ? dropdownContent.style.display = "block" : dropdownContent.style.display = "none";
    turn++;
  });

  dropdownItems.forEach(listItem => {
    listItem.addEventListener("click", () => {
      dropdownContent.style.display = "none";
      turn++;
    });
  });

});

