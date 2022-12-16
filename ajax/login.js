function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("psw-input").value;
    let account = {
        username: username,
        password: password,
    };
    $.ajax({
        type: "POST",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/login",
        data: JSON.stringify(account),
        //xử lý khi thành công
        success: function (data) {
            // console.log(data);
            alert("dang nhap thanh cong")
            localStorage.setItem("user", data.username);
            location.href = "index.html"
            localStorage.setItem("token", data.accessToken)
        },
        error: function (err) {
            alert("login fail")
        }
    })
    event.preventDefault();
}
function logout() {
    localStorage.setItem("token", "")
    location.href = "sign-in-advance.html"
}

 document.getElementById("showUser").innerHTML = localStorage.getItem("user")
