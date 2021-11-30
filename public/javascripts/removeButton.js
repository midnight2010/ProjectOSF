let main = document.querySelector('.cart')
let btns = main.querySelectorAll('.remove');

for(let i = 0; i < btns.length; i++) {
 btns[i].addEventListener('click',(e)=> {
 let div = btns[i].parentElement;
 let section = div.parentElement;
 section.remove()
 }) 
}