const products = [
  { name: "Shirt", category: "Clothing", price: 1000 },
  { name: "Headphone", category: "Electronics", price: 2000 },
  { name: "Mouse", category: "Electronics", price: 500 },
  { name: "Book", category: "Books", price: 300 }
];

let arr = [];
let sum;
products.forEach((item)=>{
    if(item.category === "Electronics"){
    let discountPrice = (item.price * 10 ) / 100;
     sum = item.price - discountPrice;
        item.price = sum;
        
    }
    arr.push(item)
})
console.log(arr);









