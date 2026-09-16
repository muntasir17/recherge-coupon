let num = document.querySelector(".num");
let inpFiels = document.querySelector(".inpFiels");
let btn = document.querySelector(".btn");
let res = document.querySelector(".res");
let rando1 = Math.floor(Math.random() * 10000) + 1;
let rando2 = Math.floor(Math.random() * 10000) + 1;
let rando3 = Math.floor(Math.random() * 10000) + 1;
let number = `${rando1}${rando2}${rando3}`;
num.innerHTML = number
console.log(number);



btn.addEventListener("click",()=>{
let input = inpFiels.value;
if(input === ""){
    res.innerHTML = `Enter Number`;
    setTimeout(() => {
 res.innerHTML = ` `;
    }, 1000);
}else if(input == number){
    res.innerHTML = `Recherge Successful`;
}else{
    res.innerHTML = `Number Mismatch`
}

})



