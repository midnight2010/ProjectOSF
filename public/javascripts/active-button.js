
    let box = document.querySelector('.box');
    let btns = box.querySelectorAll('.btn2');
    let div = document.querySelector('.main-category');
    let ctn = document.querySelector('.container');
   if(ctn.childElementCount > 1) {
    console.log(ctn.childElementCount)
    let h1 = div.querySelector('.activ')
    for(let i = 0; i < btns.length; i++) {
     if(btns[i].textContent == h1.textContent) {
        btns[i].classList.add('active')
      }
        else {
        btns[i].classList.remove('active')
      }
     }     
   }
  
 