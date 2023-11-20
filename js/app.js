const signupBtnEl = document.querySelector('.signupBtn')
const dropdownsignupEl = document.querySelector('.signup-form')
const dropdownloginEl = document.querySelector('.login-form')
const signinBtnEl =document.querySelector('.signinBtn')

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
    }
]
const productContainer = document.querySelector('.products')
 products.map((item)=>{

    return productContainer.innerHTML += `

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
       
        
        </div>
        
        
   

  </div>
    `
})

/*---------------toggle for product product diplay page-----*/

// open signup modal
signupBtnEl.addEventListener('click', ()=>{
    dropdownsignupEl.classList.toggle('show')
})
// open signin  modal
signinBtnEl.addEventListener('click', ()=>{
    dropdownloginEl.classList.toggle('show')
})




