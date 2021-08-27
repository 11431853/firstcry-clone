function storeDetails() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name.length == 0 || mobile.length == 0 || email.length == 0 || password.length == 0) {
        alert("please fill all the details");

        return
    }

    window.location.href = "login.html";

    let location = {
        name,
        mobile,
        email,
        password,
    };

    let arr = localStorage.getItem("login-details");

    if (arr == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(localStorage.getItem("login-details"));
    }

    arr.push(location);
    localStorage.setItem("login-details", JSON.stringify(arr));

    document.getElementById("name").value = null;
    document.getElementById("mobile").value = null;
    document.getElementById("email").value = null;
    document.getElementById("password").value

}