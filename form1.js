var response = [];
var object = {};
$(document).ready(function(){
    let searchParams = new URLSearchParams(window.location.search);
      let param = searchParams.get("id");
      if (param != null) {
        edit(param);
      }
$("#submitbtn").click(function () {
    let firstname = $('#fname').val();
    let lastname = $('#lname').val();
    let mail = $('#mail').val();
    let Dofb = $('#Dob').val();
    let leave = $('#cmd').val();
    let Gender = document.querySelector('input[type="radio"]:checked');
    let phno = $('#phonenumber').val();
    let add = $('#address').val();
    let phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let id = $('#id').val();
    function isValidEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    if (firstname == "") {
        $('#error3').html('Please enter your firstname.');
    } else {
        $('#error3').hide();
    }

    if (lastname === "") {
        $('#error4').html('Please enter a lastname.');
    } else {
        $('#error4').hide();
    }
    if (isValidEmail(mail) == "") {
        $('#error5').html('Please enter a valid email.');
    } else {
        $('#error5').hide();
    }

    if (Dofb === "") {
        $('#error9').html('Please enter your Date of birth.');
    } else {
        $('#error9').hide();
    }

    if (Gender) {
        $('#error2').hide();
    } else {
        $('#error2').html('Please enter your gender.');
    }
    // if (typeof language !== '') {
    //     $('#error1').hide();
    // } else {
    //     $('#error1').html('Please select at least one language.');
    // }
    if (phno.match(phoneNum)) {
        $('#error6').hide();
    } else {
        $('#error6').html('Please enter your Phonenumber.');
    }
    if (add === "") {
        $('#error7').html('Please give your address.');
    } else {
        $('#error7').hide();
    }
    if (leave === "") {
        $('#error8').html('Please give your Reason.');
    } else {
        $('#error8').hide();
    }
    let result =
    {
        'finame': firstname,
        'laname': lastname,
        'email': mail,
        'dateofbirth': Dofb,
        'radio': Gender.value,
        'phonenumber': phno,
        'address': add,
        'command': leave
    }


    //  if (firstname && lastname && mail && Dofb && Gender.value && phno && add && leave) {
    //  response.push(result);
    if (id == "") {
        $.ajax({
            type: "POST",
            url: "https://63cfb761e52f587829a384e5.mockapi.io/Teacher",
            data: result,
            dataType: "JSON",
            success: function (value) {
                createTable()
                window.location.href="tlist.html"
                console.log(value);
            }


        });


    }
    else {
        $.ajax({
            type: "PUT",
            url: "https://63cfb761e52f587829a384e5.mockapi.io/Teacher/" + object.id,
            data: result,
            dataType: "JSON",
            success: function (value) {
                createTable()
                window.location.href="tlist.html"
                console.log(value);
            }


        });
    }
    
})
})
function createTable() {
    $.ajax({
        type: "GET",
        url: "https://63cfb761e52f587829a384e5.mockapi.io/Teacher",
        dataType: "JSON",
        success: function (response) {

            let row = '';
            for (i = 0; i < response.length; i++) {

                row +=
                    `<tr>
                        
           <td>${response[i].finame}</td>
           <td>${response[i].laname}</td>
           <td>${response[i].email}</td>    
           <td>${response[i].dateofbirth}</td>
           <td>${response[i].radio}</td>
           <td>${response[i].phonenumber}</td>
           <td>${response[i].address}</td>
           <td>${response[i].command}</td>
           <td>
           <button type='button' class='getEditWin text-white btn btn-primary' onclick='editRow(${response[i].id})'>Edit</button>
           <button type='button' class='deleteRow btn btn-danger ms-2' onclick='deleteRow(${response[i].id})'>Delete</button>
         </td>
       </tr>`;

            }


            table = document.getElementById("mytable").innerHTML = row;//console.log(response);
        }

    });

}

function editRow(id){
    window.location.href="form1.html?id="+id
  }
  function edit(id){
    $.ajax({
        url: "https://63cfb761e52f587829a384e5.mockapi.io/Teacher/" + id,
        type: "GET",
        success: function (response) {
            console.log(response);
            $("#id").val(response.id);
            $("#fname").val(response.finame);
            $("#lname").val(response.laname);
            $("#address").val(response.address);
            $("#Dob").val(response.dateofbirth);
            $("#cmd").val(response.command);
            $("#phonenumber ").val(response.phonenumber);
            $("input[name='gender'][value='" + response.radio + "']").prop("checked", true);
            $("#mail").val(response.email);
            // $('input[type="checkbox"]:checked').each(function() {    // $(':checkbox:checked')
            //     document.body.append(this.value + ' ')
            // })



            object = response;

        }

    })
    // window.location.href="form1.html"
}

function deleteRow(id) {
    $.ajax({
        url: "https://63cfb761e52f587829a384e5.mockapi.io/Teacher/" + id,
        type: "DELETE",
        success: function (response) {
            // alert("This a user id delete!")
            location.reload()
        }
    })
}
function Table(id) {
$.ajax({
    type: "PUT",
    url: "https://63cfb761e52f587829a384e5.mockapi.io/Teacher/" +id,
    data: result,
    dataType: "JSON",
    success: function (value) {
       
        console.log(value);
    }


});

}