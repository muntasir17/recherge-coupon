const cart = [
  { id: 101, name: "Shirt", price: 500 },
  { id: 102, name: "Pants", price: 800 },
  { id: 103, name: "Shoes", price: 1200 }
];

const removeId = 102;
let arr = [];

cart.filter((item)=>{
    if(item.id !== removeId){
        arr.push(item)
    }
})
console.log(arr);



