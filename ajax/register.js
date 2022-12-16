function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let birthday = document.getElementById("birthday").value;
    let address = document.getElementById("address").value;

    let user = {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        email: email,
        phone: phone,
        birthday: birthday,
        address: address
    };

    $.ajax({
        type: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/register",
        data: JSON.stringify(user),
        success: function (data) {
            alert("dang ki thanh cong")
            location.href = "login.html"
        },
        error() {
            document.getElementById("register-err").innerHTML = `<p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Đăng kí tài khoản chưa được !</p>`
        }
    })
}

function checkMail() {
    let email = document.getElementById("email").value;
    $.ajax({
        type: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/checkemail",
        data: {
            'email' : email
        },
        success: function (data) {
            document.getElementById("email-err").innerHTML = ""
        },
        error() {
            document.getElementById("email-err").innerHTML = '<p> email does exist</p>'
        }
    })
}

function checkPassWord() {
    let passWord = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (passWord != confirmPassword) {
        document.getElementById("pass-err").innerHTML = '<p>Mật khẩu không khớp nhau</p>'
    } else {
        document.getElementById("pass-err").innerHTML = ""
    }
}

function checkSdt() {
    let phone = document.getElementById("phone").value;
    $.ajax({
        type: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/checkPhonenumber",
        data: {
            'phone' : phone
        },
        success: function (data) {
            document.getElementById("phone-err").innerHTML = ""
        },
        error() {
            document.getElementById("phone-err").innerHTML = `  <p style="color: red">số điện thoại đã tồn tại</p>`
        }
    })
}
function checkUser() {
    let username = document.getElementById("username").value;
    $.ajax({
        type: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/checkUsername",
        data: {
            'username' : username
        },
        success: function (data) {
            document.getElementById("checkUser-err").innerHTML = ""
        },
        error() {
            document.getElementById("checkUser-err").innerHTML = `  <p style="color: red">tài khoản đã tồn tại!</p>`

        }
    })
}



