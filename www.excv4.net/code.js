let marker = document.querySelector('#marker');
let item = document.querySelectorAll('ul li a');

function Indicator(e){
    marker.style.top = e.offsetTop+'px';
    marker.style.width = e.offsetWidth+'px';
}

item.forEach(element => {
    element.addEventListener('mousemove',(e) => {
        Indicator(e.target);
    })
})

let hed = document.querySelector('#hed');
let itee = document.querySelectorAll('span');
function runhed(){
    hed.style.transform = 'rotate(30deg)'; 
}
itee.addEventListener('mouseover',runhed)