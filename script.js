let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = [];

function showProducts(list){
  const div = document.querySelector(".products");
  div.innerHTML = "";
  list.forEach(p=>{
    div.innerHTML += `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add</button>
      <button onclick="addWishlist(${p.id})">❤️</button>
    </div>`;
  });
}

function addToCart(id){
  const p = products.find(x=>x.id===id);
  cart.push(p);
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to cart");
}

function showCart(){
  document.getElementById("cartModal").style.display="block";
  const div = document.getElementById("cartItems");
  div.innerHTML="";
  cart.forEach(i=>{
    div.innerHTML += `<p>${i.name} - ₹${i.price}</p>`;
  });
}

function closeCart(){
  document.getElementById("cartModal").style.display="none";
}

function checkout(){
  let msg="Order:%0A";
  cart.forEach(i=>msg+=`${i.name} - ₹${i.price}%0A`);
  window.open("https://wa.me/917654891342?text="+msg);
}

function filterCategory(cat){
  if(cat==="All") showProducts(products);
  else showProducts(products.filter(p=>p.category===cat));
}

function filterPrice(price){
  if(price==="All") showProducts(products);
  else showProducts(products.filter(p=>p.price<=price));
}

function toggleDark(){
  document.body.classList.toggle("dark");
}

showProducts(products);
