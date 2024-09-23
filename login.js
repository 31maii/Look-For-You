function login() {
    var id = document.getElementById("login_id");
    var pw = document.getElementById("login_pw");

    if (id.value == "" || pw.value == "") {
        alert("로그인을 할 수 없습니다. \n아이디 또는 비밀번호를 다시 입력하세요.")
    } else {
        location.href = "index.html"
    }
}
