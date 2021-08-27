function showMore() {
    var dots = document.getElementById("tca");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less";
      moreText.style.display = "inline";
    }
  }

  let product = JSON.parse(localStorage.getItem("clickedProduct"));

  let value = document.getElementById("product-value");
  price = product.oldprice;
  value.textContent = price;

  let discount = document.getElementById("discount-value");
  let discounted = (product.oldprice*product.discount)/100;
  discount.textContent = discounted;

  let gst = document.getElementById("gst-value");
  let gst_value = Math.round((product.oldprice*3.85)/100);
  gst.textContent = gst_value;

  let payment = document.getElementById("final-payment");
  payment.textContent = Math.round(price-discounted+gst_value);



  function successfulPayment() {
    const form = document.getElementById("myForm");

    const cardNumber = form.formClass.value;
    const name = form.formClass1.value;
    const valid = form.valid.value;
    const cvv = form.cvv.value;


    let cardDetails = {
      cardNumber,
      name,
      valid,
      cvv
        
    };
    for(k in  cardDetails) {
        if(cardDetails[k].length == 0) {
            alert("Please fill all the details")
            return;
        }
    }
    setTimeout(function(){ 
      window.location.href = "successfulPayment.html"; 
    }, 3000);
    
    
  }
  
