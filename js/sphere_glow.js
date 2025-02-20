document.addEventListener("DOMContentLoaded", function () {
    const spheres = document.querySelectorAll(".bg > div");

    function updateSphereColors() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        let scrollPercent = scrollTop / maxScroll;

        
   
        let red = Math.floor(255 - 215 * scrollPercent);  
        let green = Math.floor(180 - 120 * scrollPercent);
        let blue = Math.floor(120 + 100 * scrollPercent);

        let boxShadowColor = `rgba(${red}, ${green}, ${blue}, 0.5)`;

        spheres.forEach(sphere => {
            sphere.style.boxShadow = `
                inset 0 0 4em 3em ${boxShadowColor},
                inset 0 0 2em 0.4em ${boxShadowColor},
                0 0 0.1em 0.1em ${boxShadowColor},
                0 0 1em 0.4em ${boxShadowColor},0 0 2em 1em ${boxShadowColor}, 
                0 0 3em 2em ${boxShadowColor}`;      
                
                
        });
    }

    window.addEventListener("scroll", updateSphereColors);
    updateSphereColors(); 
});
