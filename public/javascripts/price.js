let fullprice = document.querySelector('.price')
let prices = document.getElementsByClassName('price-1');
let qty = document.getElementsByClassName('qty-2');

let sum = 0;

for(let i = 0; i < prices.length; i++) {
   sum +=Number(prices[i].textContent) * Number(qty[i].value);
}

fullprice.textContent = sum + '$';
 
for(let i = 0;i<qty.length;i++) {
   let temp = qty[i].value;
   qty[i].addEventListener('change',(e) => {
     if(temp > qty[i].value) {
        sum -= 1 * Number(prices[i].textContent);
     }
     else if(temp < qty[i].value){
        sum += 1 * Number(prices[i].textContent);
     }
     fullprice.textContent = sum + '$';
     temp = qty[i].value;
   })
}




