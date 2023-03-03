$(document).ready (function(){
$("#submitbtn").click(function (e) {
    e.preventDefault();
    let Name = $('#firstname').val();
    let psw= $('#password').val();
    let cpsw = $('#password1').val();
    // let phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // function isValidEmail(email) {
    //     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    // }


if (Name == "") {
    $('#error1').html('Please enter your Name.');
} else {
    $('#error1').hide();
}

if (psw === "") {
    $('#error2').html('Please enter a password.');
} else {
    $('#error2').hide();

    if (cpsw === "") {
        $('#error3').html('Please enter a confirmed password.');
    } else if (psw !== cpsw) {
        $('#error3').html('Please enter a matching password.');
    } else {
        window.location.href = "login.html";
    }
}
});
});
$(document).ready(function(){
    $("#bttn").click(function () {
           window.location.href="login.html"
       });
       });