let redact = document.querySelector(".redact")
let extract = document.querySelector(".extract")
let detect = document.querySelector(".detect")
let compare = document.querySelector(".compare")
function backtop() {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", function () {
    const mybackto = document.getElementById("backtops");
    if (document.documentElement.scrollTop > 500) {
        mybackto.style.display = "block";
    } else {
        mybackto.style.display = "none";
    }
});
//nav-bar
function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
    }
    redact.addEventListener("click",function(){
        document.getElementById("navbar").classList.remove("start-0");
        document.body.classList.remove("overflow_hidden");
        document.querySelector(".menu").classList.remove("cross")
    })
    extract.addEventListener("click",function(){
        document.getElementById("navbar").classList.remove("start-0");
        document.body.classList.remove("overflow_hidden");
        document.querySelector(".menu").classList.remove("cross")
    })
    detect.addEventListener("click",function(){
        document.getElementById("navbar").classList.remove("start-0");
        document.body.classList.remove("overflow_hidden");
        document.querySelector(".menu").classList.remove("cross")
    })
    compare.addEventListener("click",function(){
        document.getElementById("navbar").classList.remove("start-0");
        document.body.classList.remove("overflow_hidden");
        document.querySelector(".menu").classList.remove("cross")
    })
    
