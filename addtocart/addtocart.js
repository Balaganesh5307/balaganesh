 product = [
    {
        id: 0,
        image: "image/img-1.jpg",
        title: 'Lord Ganesha',
        price: 120,
    },
    {
        id: 1,
        image: 'image/img-2.jpg',
        title: 'Boruto Uzumaki',
        price: 60,
    },
    {
        id: 2,
        image: 'image/img-3.jpg',
        title: 'Portrait',
        price: 230,
    },
    {
        id: 3,
        image: 'image/img-4.jpg',
        title: 'Wind Mill',
        price: 100,
    },
    {
        id: 4,
        image: 'image/img-5.jpg',
        title: 'Iron Man',
        price: 100,
    },
    {
        id: 5,
        image: 'image/img-6.jpg',
        title: 'Captain America',
        price: 100,
    },
    {
        id: 6,
        image: 'image/img-7.jpg',
        title: 'Lord Ganesha',
        price: 100,
    },
    {
        id: 7,
        image: 'image/img-8.jpg',
        title: 'Girl',
        price: 100,
    },
    {
        id: 8,
        image: 'image/img-9.jpg',
        title: 'Mermaid',
        price: 100,
    },
    {
        id: 9,
        image: 'image/img-10.jpg',
        title: 'Sun Set',
        price: 100,
    },
    {
        id: 10,
        image: 'image/img-11.jpg',
        title: 'Lord Siva',
        price: 100,
    },
    {
        id: 11,
        image: 'image/img-12.jpg',
        title: 'Lord Krishna',
        price: 100,
    },
   
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₹"+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}