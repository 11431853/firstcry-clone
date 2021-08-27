function addtoCart() {
    window.location.href = "login.html";
}


function appendPage() {
    let div = document.getElementById("content");
    let pro = JSON.parse(localStorage.getItem("clickedProduct"));

    div.innerHTML = null;

    div.innerHTML = `<div class="left-content">
    <div class="img-content">
        <img src= ${pro.img} alt="">
    </div>
    <button onclick="addtoCart()">ADD TO CART</button>
    <button>SHORTLIST</button>
</div>
<div class="right-content">
    <div class="right-container">
        <div class="mid-size">${pro.name}</div>
        <div class="low-size">6 to 9 Months</div>
        <div class="low-size">Product ID: 3609518</div>
        <hr>
        <div class="mid-size price">
            <span class="cost">₹${Math.ceil(pro.oldprice * (100 - pro.discount) / 100)} </span><span class="discount">₹${pro.oldprice} </span><span class="per">(${pro.discount}% OFF) </span><span class="cash">Earn Loyality Cash:6*</span>
        </div>
        <div class="rs-text low-size">
            <span>MRP inc. all taxes, Add'I charges may apply on discounted price</span>
        </div>
        <div class="space">
            <span class="ash">COLOR</span>
        </div>
        <div class="space">
            <span class="ash">SIZE</span><span class="ash box">6 TO 9 MONTHS</span><span class="ash box1">9 TO 12 MONTHS</span>
        </div>
        <hr>
        <div>
            <img id="tag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACnCAMAAABzYfrWAAAAe1BMVEX29vYAAAD9/f36+vr///9NTU0oKCjU1NSXl5fn5+fj4+Ojo6Pe3t7ExMQODg61tbXx8fG7u7tycnKurq5+fn5qamqQkJBkZGRtbW1SUlJJSUldXV2JiYnLy8tXV1eampogICA6OjoxMTEZGRmDg4N4eHgkJCQ+Pj6np6cumWJ0AAAGkUlEQVR4nO2da3uiMBCFQyatpaLFu1u12+vq//+FKwKSCSCgIXaSnG9lfUTenXMITAKMeXl5eXl5eXl5eXl5eXl5/S7BVbr3r76PQESjyUkjrAFWFGJxLrhryABmj8GV+pxPYn7vAzApiDfXsjrpaxk7VF/w5yZYCa+RuPdBmBL/eyuso55ccWM81kArmLtRXTDRASsIvp2oLi1GTLR1ARd/0kTLCTMWtMafR/0bI3lcWAWtBxYfpYzWn7EirNHTl4zL/uySaJWOtflCkccLhMv26pJoXTMiB4Fw2W7GG2kdeU0RLrvNeDMtBZfd2XU7LcbXzphRAy0mEK4fi3HpoKVml703cLTQcia79NBSzGjtmbGBFvCTmhsWHFXXj6W4LtLibDCc/nndfM/Cxm4F/DiQXRdoAQw/z4e/GogGANyBYWo9LbF7lw8/WDQ1K4T9ZoRhDS0+DBQ9PjdV1xbhstCMvIaWKMEKgvduuCzMrhpaMCrDCoKPpm8TuLqsM2MNrfh8m+9ztSi6s9umqxqMa2obrmpafJltfN0xwXl8bnU0edHy7KqmlTcZp+mwFESU1VpzZ8fq7KqklTcZN2c2EKVb/jV/o83ZVUmLz9NNYbFJZN6MmovF4uyqprU/bVlImQ5h+qlZC2udU8+67KqmlabUAY0pXk/bhm1KxVozVtNKQ34n0xJv7WlZa8ZqWu9l1/GHDrTOMZfhssWM1bRSMnJDAuL0Uy8tD9zO7Kqm9Z1ukj83Szc1Dk9zWWlGiVZxQPlVYnGhA9ml0Ef7IsFmXFuBC2b58bzKILJJzofsFiCw1Judpkxy+7ILXvLDeZSvE/OKm8ecA4fdR/Z33OW77cuualoMcjzBajmc7/M/Wp4Rc1mXXXW0oqBCq65taCW7yFdXDS3GK24H7rsvI7Asu+poVeB6u2bNhV3D1FpajId4RcvfphZZtTCuBe3sqqfFgI/OvN634bXHKdCs6TXpdXoXaCW8wsnTfLodDuIbVtbhSeakzXiRVtKvbjcN4qLsGdU30NIjbEbC2WWEljXZZYaWkl1kh6mGaFkykDBFS80ummY0RktZ20czu2BnilYp6nveXR8ySEvBtSKYXSZpMYHMSDC7jNIin11maZXOjAZ2qVMFrbGRny4OKLuIVZd0S7l1q/AmiZmMi1h25XNnghbTJPWIk8Z1bugEhh5Hg6uL1kBCnvl4H1yUqgsG0i8fmfmPVsxoZJ+alE2oMYoLVxelu6mouO5jRkPnFy3C/XdTuF7knU4oVdcbwmUou2Rc45BO0kP8cAdcyIxrQl4E9op8cYfs2tEpriMu9KhFQzEi43ojVFxHMyJcpswotTYGhIqrmCtp9MzIi8suWguxARAuM9klj/Uo1VZiRjSQMJNd0lM3KOU8K2WXEVxScS1JWbGUXUbMWEwH3lA6KyZSBxIGfn++7CMIHjvNLv8NMp9dRa88IHT1k8l4dUnBZaYvoFWmBxLGuyh6BezNJC7itAxnF3VaZrOr6P4STPmTAMyZEYreddjjbvoUMLQMo08z8vOTi/f97aRnqVHfH67iRRNU56KyxIxmsksanA5pxtZJhrILiicTtnjmy++VkeySHre3pwzLyDAVnovv77gI+ddJMeOLdlwQFz4MyL+eSzGjblzodhql5n6NVFxazYKcTqlZXSslu3RWFx6jzIinViqAnsyIL0Y3FlRWImCrPsyIOyZj8hGfq5fsUm5zkOpTX1YPAwnlBu3OitDKpTu7lE7cwCpYurNL6fLaVVlM8zBVqSzrYGkdSNgPK8G10oNLmbVpWWbl0pRdCiwrKyuRFjO6YMNUCq7ZFbjcsGEqNbs6H6tLsErZ1bW63LFhqpvM6Bqskhm74IIYrWCw3Ia50Ftx29/Ecyuzcl1ZXcraGEdgXZldrsI6ChZdcbmZWamga3a5DKtzdjlsw1RdcLldWYkA1m1xeVgJrpZR72Gd1M6MHlamNtXlYZ2Fs+tQQQLCPYJlT5P1CuHq2pae3sMj9FZilyuLlcZdH+iV1sABPfXOdVhMNWOwGTHBIREX4XCM/i1yHlYJV/A1PYyiaDBZPuDtjmdWLpxdtfI2TNUKl4eVC34aYZFeOKBZ+En7ZX3QXHjYl8RofAHWjzXTJDWJx/M6Vo+GnohDSSCidSWrA/OFVSHg0fJRYbWZMH8urNHxUmcwnGYrd8Z/tpPwuheXOaPkxVIiDsOQC3HrC6ZcEXhOXl5eXl5eXl5eXl5eXl7k9R/ZnE9bMNygXAAAAABJRU5ErkJggg==" alt="">
            <span class="ash">BEST OFFERS</span>
        </div>
        <div class="rs-text low-size">
            <span>Club Offer - Flat 35% Off* | Flat 30% Off for All Users Code: AUTM | Limited period offer |</span>
        </div>
        <hr>
        <div>
            <span class="ash">FIRSTCRY CLUB BENEFITS</span>
        </div>
        <hr>
        <div>
            <img id="van" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzyqDQ8MGvUA2vcgRENTdAd68IUTv0jZ4Xw&usqp=CAU" alt="">
            <span class="ash">CHECK DELIVERY DETAILS</span>
        </div>
        <div>
            <input type="text" name="" id="pin" placeholder="Enter Pincode">
        </div>
        <div class="low-size">Same Day/Next Day delivery applicable on this product. Enter pincode to check availability in your area.</div>
        <hr>
        <div>
            <span class="ash">PRODUCT DESCRIPTION</span>
        </div>
        <div class="low-size no-space">
            <div class="bold">Specifications</div>
            <div>Brand-${pro.brand_name}</div>
            <div>Type-${pro.type}</div>
            <div>Fabric-100% Polyster</div>
            <div>Sleeves-Full</div>
            <div>Neck-Hooded</div>
        </div>
    </div>
</div>`


}

appendPage();