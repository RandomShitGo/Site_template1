document.addEventListener("DOMContentLoaded", function () {
    const bg = document.querySelector(".bg");
   

    window.addEventListener("scroll", function () {
        if (window.scrollY > 630) {
            if (!bg.classList.contains("fixed-bg")) {
                bgOffsetTop = bg.getBoundingClientRect().top ; 
                bg.style.top = bgOffsetTop + "px";
                bg.classList.add("fixed-bg");
            }
        } else {
            bg.classList.remove("fixed-bg");
            bg.style.top = ""; 
        }
    });
});
