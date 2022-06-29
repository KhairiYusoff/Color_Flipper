const colors = ["#e4d67b", "#e45ea2", "#8b5ea2", "#8bfda2", "#9900a2", "#312e20", "#ffff89"];
const bodyPage = document.querySelector("body");
const color = document.querySelector (".color");
const btn = document.querySelector (".btn");

btn.addEventListener ("click" , function(){
    let randomNumber = Math.floor(Math.random()*colors.length);
    bodyPage.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})