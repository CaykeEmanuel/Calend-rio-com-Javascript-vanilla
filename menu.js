const moon = document.querySelector(".moon-button");
const sun = document.querySelector(".sun-button");
const container = document.querySelector(".container");
const green = document.querySelector(".green");
const orange = document.querySelector(".orange");
const blue = document.querySelector(".blue");

var tema = 0

const menu = () => {
    moon.addEventListener("click", ()=> {
        sun.classList.remove("l-toggle");
        moon.classList.toggle("l-toggle");

        if (tema == 0){
            container.classList.remove("light");
            container.classList.toggle("dark");
        } else if (tema ==1){
            container.classList.remove("au-light");
            container.classList.toggle("au-dark");
        } else if (tema == 2) {
            container.classList.remove("wi-light");
            container.classList.toggle("wi-dark"); 
        }

    });
    
    sun.addEventListener("click", ()=> {
        moon.classList.remove("l-toggle");
        sun.classList.toggle("l-toggle");

        if (tema == 0){
            container.classList.remove("dark");
            container.classList.toggle("light");
        } else if (tema ==1){
            container.classList.remove("au-dark");
            container.classList.toggle("au-light");
        } else if (tema == 2) {
            container.classList.remove("wi-dark");
            container.classList.toggle("wi-light"); 
        }
    });

}


menu();