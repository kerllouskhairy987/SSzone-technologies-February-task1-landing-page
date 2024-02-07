let links = document.querySelector(".links");

function showHide(){
    links.classList.toggle("active");
}

function hide(){
    links.classList.remove("active");
}
// products Array of Objects
let products_items = document.querySelector('.products-items');
let products = [
    {
        imgUrl: "images/11.jpg",
        desc: "4 Types Avalaible",
        name: "Latte",
        price: "$124" 
    },
    {
        imgUrl: "images/12.jpg",
        desc: "8 Types Avalaible",
        name: "Black Coffee",
        price: "$111" 
    },
    {
        imgUrl: "images/13.jpg",
        desc: "3 Types Avalaible",
        name: "Insttract Caffee",
        price: "$112" 
    },
    {
        imgUrl: "images/14.jpg",
        desc: "11 Types Avalaible",
        name: "Expresso",
        price: "$186" 
    },
    {
        imgUrl: "images/15.jpg",
        desc: "9 Types Avalaible",
        name: "Cappuccino",
        price: "$16" 
    },
    {
        imgUrl: "images/16.jpg",
        desc: "8 Types Avalaible",
        name: "Insttract Caffee",
        price: "$15" 
    },
    {
        imgUrl: "images/17.jpg",
        desc: "5 Types Avalaible",
        name: "Coffe",
        price: "$17" 
    },
    {
        imgUrl: "images/18.jpg",
        desc: "2 Types Avalaible",
        name: "Mocha",
        price: "$10" 
    },
    {
        imgUrl: "images/19.jpg",
        desc: "3 Types Avalaible",
        name: "Shay",
        price: "$19" 
    },
    {
        imgUrl: "images/110.jpg",
        desc: "9 Types Avalaible",
        name: "Shay",
        price: "$14" 
    },
    {
        imgUrl: "images/111.jpg",
        desc: "7 Types Avalaible",
        name: "Shay",
        price: "$12" 
    },
    {
        imgUrl: "images/112.jpg",
        desc: "5 Types Avalaible",
        name: "Hot Drink",
        price: "$13" 
    }
] 

function drawProduct(){
    products.map((product) => {
        products_items.innerHTML += `
            <div class="col-lg-3 col-sm-5 col-12 gap-2 bg-white p-2 rounded-4 reveal notreveal">
                    <i class='bx bx-heart'></i>
                    <div class="info text-center">
                        <img class="mb-4" src=${product.imgUrl} alt="image-11">
                        <p class="mb-0"> ${product.desc} </p>
                        <h2 class="my-2"> ${product.name} </h2>
                    </div>
                    <div class="price d-flex justify-content-between align-items-center">
                        <span> ${product.price} </span>
                        <i class='bx bx-cart-download p-2 text-light'></i>
                    </div>
            </div>
        `
    })
}
drawProduct();

// Annemation js
function move(){
    var reveal = document.querySelectorAll(".reveal");
    
    for( var i = 0 ; i < reveal.length ; i++ ){
        var windowHieght_ = window.innerHeight;
        var revealTop_ = reveal[i].getBoundingClientRect().top;
        var revealPoint_ = 150;
        
        if( revealTop_ < windowHieght_ - revealPoint_ ){
            reveal[i].classList.add("annimation");
        } else {
            reveal[i].classList.remove("annimation");
        }
    }
}
window.onload = move;
window.onscroll = move;
