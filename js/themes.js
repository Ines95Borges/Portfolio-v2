document.addEventListener("DOMContentLoaded", () => {
  var r = document.querySelector(':root');
  const darkCircle = document.querySelector(".circle-dark");
  const whiteCircle = document.querySelector(".circle-white");
  const violetCircle = document.querySelector(".circle-violet");
  
  darkCircle.addEventListener("click", () => { r.style.setProperty("--bgcolor", "#0e1111"); })
  whiteCircle.addEventListener("click", () => { r.style.setProperty("--bgcolor", "#fff"); })
  violetCircle.addEventListener("click", () => { 
    r.style.setProperty("--bgcolor", "#FF0099");
    r.style.setProperty("--lightcolor1", "#FFE500");
    r.style.setProperty("--lightcolor2", "#00FF66");
    r.style.setProperty("--darkcolor2", "#A73378");
  })

});