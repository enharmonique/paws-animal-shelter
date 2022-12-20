const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#485563';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});




const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

$(document).ready(function() {
    $(".item-carousel").owlCarousel({
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});






//cart-wishlist
let cartIcon=document.querySelector('#cart-icon');
let cart=document.querySelector('.cart');
let closeCart=document.querySelector('#close-cart');

//open wishlist
cartIcon.onclick = () =>{
  cart.classList.add("active");
};
//close wishlist
closeCart.onclick = () =>{
  cart.classList.remove("active");
};

//wishlist working JS
if(document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else{
  ready();
}

//making function ready
function ready(){
  //remove items from wishlist
  var removeCartButtons=document.getElementsByClassName('cart-remove');
  concole.log(removeCartButtons);
  for(var i=0;i<removeCartButtons.length;i++){
    var button=removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  //adoption button
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}

//adopt button
function buyButtonClicked(){
  alert('your order is placed');
  var cartContent=document.getElementsByClassName('cart-content')[0];
  while(cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
}

//remove items from wishlist
function removeCartItems(event){
  var buttonClicked=event.target;
  buttonClicked.parentElement.remove();
}
var addCart = document.getElementsByClassName('add-cart');
for (var i=0;i<addCart.length;i++){
  var button=addCart[i];
  button.addEventListener('click',addCartClicked);
}

//add to wishlist
function addCartClicked(event){
  var button =event.target;
  var shopProducts=button.parentElement;
  var title=shopProducts.getElementsByClassName("product-name")[0].innerText;
  var productImg=shopProducts.getElementsByClassName("product__item__pic")[0].src;

  addProductToCart.log(title,productImg);
}

function addProductToCart(title,productImg){
  var cartShopBox=document.createElement("div");
  var cartItems=document.getElementsByClassName("cart-content")[0];
  var cartItemsNames=cartItems.getElementsByClassName("cart-product-title");
  for(var i=0;i<cartItemsNames.length;i++){
    if(cartItemsNames[i].innerText == title){
      alert("Already in wishlist");
      return;
    }
  }
  cartShopBox.innerHTML = `<img src="${productImg}" alt="" class="cart-img">
                                     <div class="detail-box">
                                       <div class="cart-product-title">${title}</div>
                                     </div>
                                     <i class="fa fa-trash cart-remove"></i>`;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName('cart-remove')[0]
    .addEventListener('click', removeCartItem);
}

