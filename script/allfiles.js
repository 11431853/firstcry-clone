products = [
    {
        type: "Athleisure & sportswear",
        brand_name: "PUMA",
        img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8356338a.webp",
        discount: 33,
        oldprice: 2009.33,
        name: "PUMA Full Sleeves Color Block Poly Jacket - Blue"
    },
    {
        type: "Nightwear",
        brand_name: "Mini Tarus",
        img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8898895a.webp",
        discount: 28,
        oldprice: 499,
        name: "Mini Tarus Full Sleeves Stripped Sleepsuit - Brown"

    },
    {
        type: "Nightwear",
        brand_name: "ToffyHouse",
        img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8658794a.webp",
        discount: 29,
        oldprice: 545,
        name: "ToffyHouse Full Sleeves Sleep Suit Road Sign Print-Multicolor"

    },
    {
        type: "Onesies & Rompers",
        brand_name: "Babyhug",
        img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8634018a.webp",
        discount: 21,
        oldprice: 849,
        name: "Babyhug Full Sleeves Moustache Printed Cotton Rompers Set of 2 -..."

    },
    {
        type: "Onesies & Rompers",
        brand_name: "kookie",
        img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8528927a.webp",
        discount: 21,
        oldprice: 817,
        name: "Kookie Kids Full Sleeves Romper Dolphin Print - Blue"

    },
    {
        type: "Athleisure & sportswear",
        brand_name: "kookie",
        img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/3609518a.webp",
        discount: 23,
        oldprice: 1204,
        name: "Kookie Kids Full Sleeves Hooled Sweatshirt & Lounge Pant Set-Black"

    },
    {
        type: "Athleisure & sportswear",
        brand_name: "PUMA",
        img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8356568a.webp",
        discount: 33,
        oldprice: 3299,
        name: "PUMA Full Sleeves Alpha AOP FL Hooded Jacket-Black"

    },
    {
        type: "Nightwear",
        brand_name: "Babyhug",
        img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8536951a.webp",
        discount: 28,
        oldprice: 499,
        name: "Babyhug Full Sleeves Sleepsuit-Blue"

    },
    {
        type: "Nightwear",
        brand_name: "Cucumber",
        img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8391258a.webp",
        discount: 29,
        oldprice: 360,
        name: "Cucumber Winter Wear Full Sleeves Night Suit Bear Print-Red"

    },
    {
        type: "Nightwear",
        brand_name: "Babyhug",
        img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8210318a.webp",
        discount: 30,
        oldprice: 499,
        name: "Babyhug Full Sleeves Night Suit Star Print Stripped-Blue"

    },
    {
        type: "Nightwear",
        brand_name: "Mini Taurus",
        img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8219838a.webp",
        discount: 27,
        oldprice: 389,
        name: "Mini Taurus Full Sleeves Night Suit Bear Print-Brown"

    },
    {
        type: "Nightwear",
        brand_name: "Cucumber",
        img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8391261a.webp",
        discount: 29,
        oldprice: 360,
        name: "Cucumber Winter Wear Full Sleeves Night Suit Bear Print-Blue"

    },
]

if (JSON.parse(localStorage.getItem("my_products")) == null) {
    localStorage.setItem("my_products", JSON.stringify(products))
}

function showProducts(d) {
    let products = d;
    
    products.forEach(function (el) {
        appendProduct(el);
    })
}

function appendProduct(el) {
    let catalogue = document.getElementById('products-right');

    let div = document.createElement("div");

    div.addEventListener("click", function() {
        localStorage.setItem("clickedProduct", JSON.stringify(el))
    })

    div.innerHTML = `<a href="products-details.html" class="each-product">
    <div>
        <img src= ${el.img} alt="">
        <div class="name">${el.name}</div>
        <div class="price">Rs. ${Math.ceil(el.oldprice * (100 - el.discount) / 100)} 
            <span class="line-through">Rs. ${el.oldprice}</span>
            <span class="discount">(${el.discount}% OFF)</span>
        </div>
    </div>
</a>`

catalogue.append(div);
}

showProducts(JSON.parse(localStorage.getItem("my_products")));

function filter(x) {
    let products = JSON.parse(localStorage.getItem("my_products"));

    products = products.filter(function (el) {       
        return el.type == x;
    })

    let catalogue = document.getElementById('products-right');
    catalogue.innerHTML = null;
    showProducts(products);
}

function brand_filter(x) {
    let products = JSON.parse(localStorage.getItem("my_products"));

    products = products.filter(function (el) {       
        return el.brand_name == x;
    })
    // console.log("sagar");

    let catalogue = document.getElementById('products-right');
    catalogue.innerHTML = null;
    showProducts(products);
}

function sort() {
    let menu = document.getElementById("type");
    menu.addEventListener("change", generateData);

    function generateData(event) {
        if (menu.value == '1') {
            let products = JSON.parse(localStorage.getItem("my_products"));
            let catalogue = document.getElementById('products-right');
            catalogue.innerHTML = null;

            products = products.sort(function (a, b) {
                return b.oldprice - a.oldprice;
            });
            showProducts(products);
        }
        else if (menu.value == '2') {
            let products = JSON.parse(localStorage.getItem("my_products"))
            let catalogue = document.getElementById('products-right');
            catalogue.innerHTML = null;

            products = products.sort(function (a, b) {
                return a.oldprice - b.oldprice
            });

            showProducts(products);
        } else if (menu.value == '3') {
            let products = JSON.parse(localStorage.getItem("my_products"))
            let catalogue = document.getElementById('products-right');
            catalogue.innerHTML = null;

            products = products.sort(function (a, b) {
                return b.discount - a.discount
            });

            showProducts(products);
        }
        else if (menu.value == '4') {
            let products = JSON.parse(localStorage.getItem("my_products"))
            let catalogue = document.getElementById('products-right');
            catalogue.innerHTML = null;

            showProducts(products);
        }
    }
}
sort();