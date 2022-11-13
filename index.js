window.onload = function(){
const loadingText = [...document.querySelectorAll('.loading-text')];
let text = 'resıdent evıl4';
for(let i = 0; i < text.length; i++){
    setTimeout(() => {
        loadingText[0].innerHTML += text[i];
        loadingText[1].innerHTML += text[i];
    }, 500 * i);
}
}