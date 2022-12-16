function like(id, i){
    $.ajax ({
        type: "Post",
        url: "http://localhost:8080/check/" + id,
        headers: {"Authorization": "Bearer " + localStorage.getItem('token')},
        success: function (data){
            let id = i + "p"
            if (data.like){
                document.getElementById(i).src ="images/heart.png";
                document.getElementById(id).innerHTML = data.page.likePages.length;
            }else {
                document.getElementById(i).src ="images/heart.png";
                document.getElementById(id).innerHTML = data.page.likePages.length;
            }

        },
        error: function (error) {
            console.log(error);
        }
    })
}

function pageFriend(id){
    localStorage.setItem("idFriend", id);
    location.href = "profileuser.html"
}

function checkPage(id){
    let idUser = localStorage.getItem("idUser");
    if (idUser == id){
        location.href = "profile.html"
    }else {
        localStorage.setItem("idFriend", id);
        location.href = "profileuser.html"
    }
}






