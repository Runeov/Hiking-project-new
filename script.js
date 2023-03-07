
const selectElment = function(elment){
    return    document.querySelector(elment);
}

const Icon = selectElment(".menu-icon");
const body = selectElment("body");

Icon.addEventListener("click" , function(){
    body.classList.toggle("open");
})

