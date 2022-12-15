function register() {
    let userName = document.getElementById("email").value;
    let passWord = document.getElementById("psw-input").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let fistName = document.getElementById("fistName").value;
    let lastName = document.getElementById("lastName").value;
    let birthDay = document.getElementById("birthDay").value;
    let address = document.getElementById("address").value;

    let user = {
        email: userName,
        password: passWord,
        phoneNumber:phoneNumber,
        fistName:fistName,
        lastName:lastName,
        birthDay:birthDay,
        address:address
    };

    $.ajax({
        type: "POST",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/register",
        data: JSON.stringify(user),
        success: function (data) {
            // Swal.fire({
            //   position: 'center',
            //   icon: 'success',
            //   title: 'Creat account Success',
            //   showConfirmButton: false,
            //   timer: 1500
            // }
            alert("dang ki thanh cong")
            location.href("/login.html")
        },
        error() {
            document.getElementById("register-err").innerHTML = `<p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Create account fail !</p>`
        }
    })
}

function checkMail() {
    let email = document.getElementById("email").value;
    $.ajax({
        type: "GET",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/registers/checkemail",
        data: {
            userName: email,
        },
        success: function (data) {
        },
        error() {
            document.getElementById("email-err").innerHTML = '<p> email does exist</p>'
        }
    })
}
function checkPassWord() {
    let passWord = document.getElementById("psw-input").value;
    let confirmPassword = document.getElementById("repass").value;
    if (passWord!=confirmPassword){
        document.getElementById("pass-err").innerHTML= '<p>password does not match</p>'
    }else {
        document.getElementById("pass-err").innerHTML= ""
    }
}
