function show(event, loginContent) {
    // Hide all elements within class="container" by default */
    var i, container, login_link;
    container = document.getElementsByClassName("personal_details");
    for (i = 0; i < container.length; i++) {
        container[i].style.display = "none";
    }
    // Get all elements with class="loglink" and remove the class "active"
    login_link = document.getElementsByClassName("login_link");
    for (i = 0; i < login_link.length; i++) {
        login_link[i].className = login_link[i].className.replace(" active", "");
    }
    // Show the current login form, and add an "active" class to the button that opened the login form
    document.getElementById(loginContent).style.display = "flex";
    event.currentTarget.className += " active";
}

function goBack() {
    window.history.back();
}

function ShowHide(ProductInfo) {
    var row = document.getElementById(ProductInfo);
    if (row != null) {
        if (row.style.display == "table-row") {
            row.style.display = 'none';
        }
        else {
            row.style.display = 'table-row';
        }
    }
}

//function to check the username and password during an admin login
function check(form) {
    if(form.admin_name.value === "admin" && form.Admin_Password.value === "pass") {
        location="admin_home.html"
    }
    else {
        alert("Invaild Password or Username")
    }
}

//function to check the username and password during an user login
function CheckUser(form) {
    if(form.user_name.value === "user" && form.Password.value === "pass") {
        location="user_home.html"
    }
    else {
        alert("Invalid username or password")
    }
}