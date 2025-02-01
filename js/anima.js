document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.animado', {
        speed: 200,           
        strings: ["front-end", "Developer"], 
        loop: true,          
        deleteSpeed: 100,    
        breakLines: false,   
        nextStringDelay: 1000
    }).go();
});