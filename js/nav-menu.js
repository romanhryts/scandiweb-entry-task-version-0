(function () {
    const navWomen = document.querySelector(".nav__women");
    const navMen = document.querySelector(".nav__men");
    const navKids = document.querySelector(".nav__kids");
    const underlineWomen = document.querySelector(".women");
    const underlineMen = document.querySelector(".men");
    const underlineKids = document.querySelector(".kids");

    navWomen.addEventListener("click", function (e) {
        navWomen.classList.add("active");
        underlineWomen.classList.add("active");
        navMen.classList.remove("active");
        underlineMen.classList.remove("active");
        navKids.classList.remove("active");
        underlineKids.classList.remove("active");
    })

    navMen.addEventListener("click", function (e) {
        navMen.classList.add("active");
        underlineMen.classList.add("active");
        navWomen.classList.remove("active");
        underlineWomen.classList.remove("active");
        navKids.classList.remove("active");
        underlineKids.classList.remove("active");
    })

    navKids.addEventListener("click", function (e) {
        navKids.classList.add("active");
        underlineKids.classList.add("active");
        navWomen.classList.remove("active");
        underlineWomen.classList.remove("active");
        navMen.classList.remove("active");
        underlineMen.classList.remove("active");
    })

    

})()