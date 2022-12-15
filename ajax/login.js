function login() {
    let email = document.getElementById("username").value;
    let password = document.getElementById("psw-input").value;

    let account = {
        email: email,
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
            alert("dang nhap thanh cong")
            localStorage.setItem("token", data);
            location.href = "index.html"
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
