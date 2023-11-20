const cartItemsEl= document.querySelector('.cartsec')
const subtotalEl = document.querySelector('.subtotal')
const cartCountEl = document.querySelector('.cartCount')
const deleteBtnEl = document.querySelector('#deleteBtn')
const cartIconEl = document.querySelector('.cartIcon')
const cartconEl = document.querySelector('.cartcon')
const checkoutBtn = document.querySelector('.checkoutBtn')
const products = [
    {
        id:0,
        img:'/assets/wolfhood.jpg',
        name:'Wolf Hood',
        price:2000
    
        
    },
    {
        id:1,
        img:'/assets/k2-jacket.jpg',
        name:'k2 Jacket',
        price:5000
    },
    {
        id:2,
        img:'/assets/college-jacket.jpg',
        name:'College Jacket',
        price:3000
    },
    {
        id:3,
        img:'/assets/black-trench-coat.jpeg',
        name:'Black Trench Coat',
        price:2000
    },
    {
        id:4,
        img:'/assets/grey-trench-coat.jpeg',
        name:'Grey Trench Coat',
        price:2000
    },
    {
        id:5,
        img:'/assets/green-denim-Jacket.jpg',
        name:'Green Denim Jacket',
        price:1500
    },
    {
        id:6,
        img:'/assets/Leather-Jacket.jpg',
        name:'Leather Jacket',
        price:3500
    },
    {
        id:7,
        img:'/assets/puff-jacket.jpeg',
        name:'Puff Jacket',
        price:4000
    },
    {
        id:8,
        img:'/assets/sweater.jpg',
        name:'Sweater',
        price:1200
    },
    {
        id:9,
        img:'/assets/beltbubbleW.jpg',
        name:'Belt Bubble',
        price:3500
    },
    {
        id:10,
        img:'/assets/bubbleGilletgirlC.jpg',
        name:'Bubble Gillet Girl',
        price:2500
    },
    {
        id:11,
        img:'/assets/downlongjacketW.jpg',
        name:'Down Long Jacket',
        price:1500
    },
    {
        id:12,
        img:'/assets/FilledjacketjuniorC.jpg',
        name:'Filled Jacket Junior',
        price:3800
    },
    {
        id:13,
        img:'/assets/NSWfilledJacketC.jpg',
        name:'NSW Filled Jacket',
        price:2500
    },
    {
        id:14,
        img:'/assets/RicherpufferJacketW.jpg',
        name:'Richer puffer Jacket',
        price:5000
    },
    {
        id:15,
        img:'/assets/prontoGiletJuniorsC.jpg',
        name:'Pronto Gilet Juniors',
        price:2500
    },
    {
        id:16,
        img:'/assets/urbanParkaW.jpg', 
        name:'Urban Parka',
        price:3500
    },
    {
        id:17,
        img:'/assets/ProntopufferC.jpg',
        name:'Pronto Puffer',
        price:2750
    }

    
];
const itemContainer = document.querySelector('.products-Con')
 products.map((item)=>{

    return itemContainer.innerHTML += `

    <div class="Card">
    <img src="${item.img}" alt="image product">
    <div class="product-text">
        <h5>Sale</h5>
    </div>

    <div class ="heart-icon">
      <i class="fal fa-heart" style="color: #000000;"></i>
    </div>
    <div class="ratting">
      <i class="fal fa-star" style="color: #ff622e;"></i>
      <i class="fal fa-star" style="color: #ff622e;"></i>
      <i class="fal fa-star" style="color: #ff622e;"></i>
      <i class="fal fa-star" style="color: #ff622e;"></i>
      <i class="fas fa-star-half-alt" style="color: #ff622e;"></i>

    </div>
  
        <h4 class="name">${item.name}</h4>
        <div class ="details">
        <p class="price">Ksh ${item.price}</p>
        <button  type="button" class="addcart" onClick="addToCart(${item.id})"><i class="fal fa-cart-arrow-down fa-lg" style="color: #ffffff;"></i></button>
        
        </div>
        
        
   

  </div>
    `
})
//cart array
let cart =JSON.parse( localStorage.getItem("CART")) || []
updateCart()
// add to cart
function addToCart(id){
    //check if product exist in cart
    if(cart.some((itm) => itm.id === id)){
        changeNumberOfUnits("plus", id)
    }else{

    const itm = products.find((product)=> product.id === id)
    cart.push({
        ...itm,
        numberOfUnits : 1
        
    })
    }
    updateCart()
}

function updateCart(){
   renderCartItems()
   renderSubtotal()
   // save cart to local storage
   localStorage.setItem("CART", JSON.stringify(cart))
}
// calculate and render subtotal
function renderSubtotal(){
    let totalPrice = 0
    let totalItems = 0

    cart.forEach((itm) => {
        totalPrice += itm.price * itm.numberOfUnits
        totalItems += itm.numberOfUnits
    })
    subtotalEl.innerHTML = `Subtotal (${totalItems} items) : Ksh ${totalPrice}`
    cartCountEl.innerHTML = totalItems
}

// render cart list

function renderCartItems(){
    if(cartCountEl.length == 0){
        document.querySelector('#status').innerText = "Cart is empty"
    }else{
        cartItemsEl.innerHTML = "" //clear prev cart element
        cart.map((itm)=> {
             return cartItemsEl.innerHTML += `
            <div class="product-list" id="product-list">
                <img src="${itm.img}" alt="product image" >
                <p class="pname">${itm.name}</p>
                <div class="units">
                    <div class="btn-minus" onClick="changeNumberOfUnits('minus', ${itm.id})">-</div>
                    <p class="quantity">${itm.numberOfUnits}</p>
                    <div class="btn-plus" onClick="changeNumberOfUnits('plus', ${itm.id})">+</div>
                </div>
                <p class="productPrice">Ksh ${itm.price}</p>
                <button type="button" class="deleteBtn" onClick="deleteCartItem(id)"><i class="fas fa-trash-alt" id="deleteBtn" ></i></button>
            </div>
            `
        })
    }
  
}
// remove item from cart
// deleteBtnEl.addEventListener('click', ()=>{
//     console.log('item deleted')
// })

function deleteCartItem(id){
    cart.splice(id, 1)

    updateCart()
}

// change number of units for an item
function changeNumberOfUnits(action, id){
    cart = cart.map((itm)=>{
        let numberOfUnits = itm.numberOfUnits
        if(itm.id === id){
            if(action === "minus" && numberOfUnits > 1){
                numberOfUnits--
            }else if(action === "plus"){
                numberOfUnits++
            }
            
        }
        return {
            ...itm,
            numberOfUnits 
        }
    })
    updateCart()
}
// open cart modal
cartIconEl.addEventListener('click', ()=>{
    cartconEl.classList.toggle('show')
})
//close cart modal
