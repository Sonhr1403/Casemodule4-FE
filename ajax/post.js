function createPost() {
    // let owner = localStorage.getItem("user");
    let content = document.getElementById("content").value;

    let post = {
        // owner: owner,
        content: content
    };

    $.ajax({
        type: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/postes",
        data: JSON.stringify(post),
        //xử lý khi thành công
        success: function (data) {
            alert("dang bai viet thanh cong")
            // localStorage.setItem("token", data);
            // location.href = "index.html"
        },
        error: function (err) {
            alert("đăng fail")
        }
    })
    event.preventDefault();
}