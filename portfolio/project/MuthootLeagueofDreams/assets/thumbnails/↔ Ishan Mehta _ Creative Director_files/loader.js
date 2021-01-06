console.log("Hellow world");

var loadscreen=document.querySelector('#loader');
console.log(loadscreen);
window.addEventListener('load', function(){


    console.log(loadscreen.parentElement);
    loadscreen.parentElement.removeChild(loadscreen);


});



