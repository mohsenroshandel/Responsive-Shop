let darkmode = document.querySelector('#darkmode')
darkmode.addEventListener('click', function () {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun')
        document.body.classList.add('color')
    }
    else {
        darkmode.classList.replace('bx-sun', 'bx-moon')
        document.body.classList.remove('color')
    }
})

let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')
menu.addEventListener('click', function () {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
})
window.addEventListener('scroll',function(){
    menu.classList.remove('bx-x')
    navlist.classList.remove('open')
})
const sr=ScrollReveal({
    distance:'70px',
    duration:2700,
    reset:true
});
sr.reveal('.main-text',{delay:200,origin:'bottom'});
sr.reveal('.main-img',{delay:350,origin:'top'});
sr.reveal('.down-arrow',{delay:450,origin:'right'});
  