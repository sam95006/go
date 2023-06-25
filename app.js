function show_hide() {
    var login = document.getElementById("container1");
    var signup = document.getElementById("container2");
    var copyright = document.getElementById("copyright");

    if (login.style.display === "none") {
        login.style.display = "block";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        signup.style.display = "none";
        copyright.style.margin = "200px 0px 0px 0px";
    } else {
        login.style.display = "none";
        signup.style.display = "block";
        signup.style.visibility = "visible";
        copyright.style.margin = "200px 0px 0px 0px";

        document.getElementById("fullname").value = "";
        document.getElementById("username2").value = "";
        document.getElementById("password2").value = "";
        document.getElementById("comfirm_password").value = "";
    }
}

const log = console.log

function testFetch() {

    fetch('http://localhost:3000/login')
        .then(res => res.text())
        .then(data => {
            console.log(data)
        })
}
testFetch()

function register() {

    fetch('http://localhost:3000/register')
        .then(res => res.text())
        .then(data => {
            console.log(data)
        })
}
register()