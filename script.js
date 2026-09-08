const products = [
  { name: "iPhone 15 Pro", price: 120000 },
  { name: "Samsung Galaxy S24", price: 110000 },
  { name: "MacBook Pro", price: 150000 },
  { name: "AirPods Max", price: 50000 }
];

const searchQuery = "pro";
let small = searchQuery.toLowerCase()
let arr = [];
products.forEach((item)=>{
    let smalLettter = item.name.toLowerCase()
    if(smalLettter.includes(small)){
        arr.push(item)
    }
})
console.log(arr);



