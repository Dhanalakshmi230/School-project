$(document).ready (function(){
    $("#subbtn").click(function (e) {
        e.preventDefault();
        let mail = $('#Email').val();
        let psw= $('#Password').val();
        function isValidEmail(email) {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }
        if (isValidEmail(mail) == "") {
            $('#error1').html('Please enter a valid email.');
          }
          
          else{
            window.location.href="home.html"
          }
        
        if (psw === "") {
            $('#error2').html('Please enter valid password.');
        } else {
            $('#error2').hide();
           
        }
        });
        });
        // $(document).ready(function(){
        //    $("#btn").click(function () {
        //           window.location.href="index.html"
        //       });
        //       });
        //       $(document).ready(function(){
        //         $("#subbtn").click(function () {
        //                window.location.href="home.html"
        //            });
        //            });
        // $(document).ready(function() {
        //     $("#loginForm").validate({
        //       rules: {
        //           username: {
        //               required: true,
        //           },
        //           password: {
        //               required: true,
        //           },
        //       },
        //       messages: {
        //           username: {
        //               required: "Please enter a username",
        //           },
        //           password: {
        //               required: "Please enter a password",
        //           },
        //       },
               
        //     })
        // })