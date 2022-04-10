const music = new Audio('Itro & Tobu - Cloud 9 [NCS Release].mp3');
let musicstuation=1;

function btgithub(){
console.log('github!')
iziToast.success({ title: 'Github Loaded', message: 'load success!' });
window.location.href = 'https://github.com/K93MSY/';
}

function btdocument(){
console.log('open document');
iziToast.success({ title: 'Document Loading', message: 'in preparation' });

var dochtml = document.getElementById('document');

var new_element = document.createElement('h1');
new_element.textContect = 'Document';
dochtml.appendChild(new_element);

}

function btmusic(){
if (musicstuation===1){
console.log('playing music');
iziToast.success({ title: 'Music Loaded', message: 'Playing Itro & Tobu - Cloud 9 [NCS Release]' });
music.play();
musicstuation =0;
}else{
if (musicstuation===0){
console.log('pause music');
iziToast.success({ title: 'Music stopped', message: 'Pausing' });
music.pause();
musicstuation =1;
}else{
console.log('error!')
}}}