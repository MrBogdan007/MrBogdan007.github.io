window.addEventListener("DOMContentLoaded", () => {
const input = document.querySelectorAll("input");

//for(let i = 0; i<= input.length; i++)
input.forEach(elem =>{
    elem.addEventListener("focus", (e) =>{


        elem.classList.remove('input');
        
        });
        elem.addEventListener("blur", (e) =>{
        
        
        elem.classList.add('input');
        
        });
});

    
console.log(input);
});