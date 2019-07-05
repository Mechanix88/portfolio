var burger = document.querySelector(".burger-menu")
console.log(burger)

    
    burger.addEventListener("click", function () {
        burger.classList.toggle("burger-menu__active");
    });

    // mobileLink.addEventListener("click",function(){
    //     burger.classList.remove("burger-menu__active");
    // })

    