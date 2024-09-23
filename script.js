function login() {
    var id = document.getElementById("login_id");
    var pw = document.getElementById("login_pw");

    if (id.value == "" || pw.value == "") {
        alert("로그인을 할 수 없습니다. \n아이디 또는 비밀번호를 다시 입력하세요.")
    } else {
        location.href = "index.html"
    }
}

function signup() {
    var id = document.getElementById("signup_id");
    var pw = document.getElementById("signup_pw");
    var pw_check = document.getElementById("signup_pw1");
    var name = document.getElementById("signup_name");
    var addr = document.getElementById("signup_addr");
    var phone = document.getElementById("signup_phone");
    var email = document.getElementById("signup_email");
    var female = document.getElementById("female");
    var male = document.getElementById("male");
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var style = document.getElementById("style");
    var type = document.getElementById("type");
    var body = document.getElementById("body_picture").value;

    /*var idCheck = /^[a-z]+[a-z0-9]{5,15}$/g;
    if (!idCheck.test(id)) {
        alert("아이디는 영문 소문자/숫자 6~16자로 입력해 주세요.")
    }*/

    if (id.value == "") {
        alert("아이디를 입력하세요.");
        id.focus(); // 커서가 깜빡이도록 함 
        return false; // 반환값 x 
    };

    if (pw.value == "") {
        alert("비밀번호를 입력하세요.");
        pw.focus();
        return false;
    };

   /* var pwCheck = /^[a-z]+[a-z0-9]{5,15}$/g;

    if (!pwCheck.test(pw.value)) {
        alert("비밀번호는 영문 소문자 숫자 6~16자로 입력해 주세요.");
        pw.focus;
        return false;
    };*/

    if (pw.value != pw_check.value) {
        alert("비밀번호가 일치하지 않습니다.");
        pw_check.focus();
        return false;
    };

    if (name.value == "" ) {
        alert("이름을 입력하세요.");
        name.focus();
        return false;
    };

    if (addr.value == "" ) {
        alert("주소 입력하세요.");
        addr.focus();
        return false;
    };

    if (phone.value == "" ) {
        alert("연락처를 입력하세요.");
        phone.focus();
        return false;
    };

    var reg = /^[0-9]+/g;

    if(!reg.test(phone.value) ) {
        alert("전화번호는 숫자만 입력 가능합니다.");
        phone.focus();
        return false;
    };
    
    if (email.value == "" ) {
        alert("이메일을 입력하세요.");
        email.focus();
        return false;
    };

    if(!female.checked && !male.checked) {
        alert("성별을 선택해 주세요.");
        male.focus();
        return false;
    };

    if (height.value == "" ) {
        alert("키를 입력하세요.");
        height.focus();
        return false;
    };

    /*if(!reg.test(height.value)) {
        alert("키는 숫자만 입력 가능합니다.");
        height.focus();
        return false;
    };*/

    if (weight.value == "" ) {
        alert("몸무게를 입력하세요.");
        weight.focus();
        return false;
    };

    /*if(!reg.test(weight.value)) {
        alert("몸무게는 숫자만 입력 가능합니다.");
        weight.focus();
        return false;
    };*/

    if(!style.options[style.selectedIndex].value) {
        alert("선호 스타일을 선택해 주세요.")
        style.focus();
        return false;
    };

    if(!type.options[style.selectedIndex].value) {
        alert("신체 유형을 선택해 주세요.")
        type.focus();
        return false;
    };

    /*if(!file) {
        alert("전신 사진을 첨부해 주세요.");
        file.focus();
        return false;
    }*/

    


    alert("회원가입 완료");
    location.href = "login.html";
    
    document.signup.submit();
}