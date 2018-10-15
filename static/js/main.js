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

function show(rowId) {
    document.getElementById(rowId).style.display = "";
}

  function hideRow(rowId) {
    document.getElementById(rowId).style.display = "none";
}
