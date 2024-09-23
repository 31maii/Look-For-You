function signup() {
    var id = document.getElementById("signup_id");
    var pw = document.getElementById("signup_pw");
    var pw_check = document.getElementById("signup_pw1");
    var name = document.getElementById("signup_name");
    var addr = document.getElementById("signup_addr");
    var phone = document.getElementById("signup_phone");
    var email = document.getElementById("signup_email");
    
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");

    if (id.value == "" || pw.value ==""|| pw_check.value == "" || name.value == ""
    || addr.value == "" || phone.value == "" || email.value == "" || height.value == "" || weight.value == "" ) {
        alert("회원가입을 할 수 없습니다. \n모든 항목을 입력해주세요.")
    } else {
        location.href = "login.html"
    }
}