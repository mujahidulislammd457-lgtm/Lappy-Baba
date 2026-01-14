let products = [
 {id:1,name:"HP Laptop",price:45000},
 {id:2,name:"Gaming Mouse",price:999}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let box = document.getElementById("products");

products.forEach(p=>{
  box.innerHTML += `
   <div>
     <h3>${p.name}</h3>
     <p>₹${p.price}</p>
     <button onclick="add(${p.id})">Add to Cart</button>
   </div>`;
});

function add(id){
 let item = products.find(p=>p.id==id);
 cart.push(item);
 localStorage.setItem("cart",JSON.stringify(cart));
 alert("Added to Cart");
}
