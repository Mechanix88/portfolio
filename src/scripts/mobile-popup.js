var burger = document.querySelector(".burger-menu")
var mobilePopup = document.querySelector(".menu-popup")
var mobileLink = document.querySelectorAll(".nav-mobile__link")
console.log(burger)
console.log(mobileLink)


    burger.addEventListener("click", function () {
        mobilePopup.classList.toggle("mobile-popup--active");
    });
    for(var i = 0; i < mobileLink.length; i++) {
    mobileLink[i].addEventListener("click",function(){
        mobilePopup.classList.remove("mobile-popup--active");
        burger.classList.remove("burger-menu__active")
    })}
