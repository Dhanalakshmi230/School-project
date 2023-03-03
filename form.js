var response = [];
var object = {};
$(document).ready(function(){
let searchParams = new URLSearchParams(window.location.search);
  let param = searchParams.get("id");
  if (param != null) {
    edit(param);
  }
$("#submit").click(function (e) {
  e.preventDefault();
  let id = $('#id').val();
  let name = $('#Name').val();
  let fathername = $('#Fathername').val();
  let mail = $('#Email').val();
  let Dob = $('#Dateofbirth').val();
  let Gender = document.querySelector('input[type="radio"]:checked');
  let phno = $('#Phonenumber').val();
  let add = $('#Address').val();
  let phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  // let id = $('#id').val();
  function isValidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }


  if (name == "") {
    $('#error1').html('Please enter your Name.');
  } else {
    $('#error1').hide();
  }

  if (fathername == "") {
    $('#error2').html('Please enter your Fathername.');
  } else {
    $('#error2').hide();
  }
  if (isValidEmail(mail) == "") {
    $('#error3').html('Please enter a valid email.');
  } else {
    $('#error3').hide();
  }

  if (Dob == "") {
    $('#error4').html('Please enter your Date of birth.');
  } else {
    $('#error4').hide();
  }

  if (Gender) {
    $('#error6').hide();
  } else {
    $('#error6').html('Please enter your gender.');
  }
  if (phno.match(phoneNum)) {
    $('#error7').hide();
  } else {
    $('#error7').html('Please enter your Phonenumber.');
  }
  if (add === "") {
    $('#error5').html('Please give your address.');
  } else {
    $('#error5').hide();
  }
 if (typeof language !== '') {
        $('#error6').hide();
    } else {
        $('#error6').html('Please select at least one language.');
    }

let result =
    {
        'name': name,
        'Dadname': fathername,
        'email': mail,
        'dateofbirth': Dob,
        'radio': Gender.value,
        'phonenumber': phno,
        'address': add
    }
    // console.log(result);


    // if (firstname && fathername && mail && Dob && Gender.value && language && phno && add) {
    // storedData.push(response);
    if (id == "") {
        $.ajax({
            type: "POST",
            url: "https://63cfb761e52f587829a384e5.mockapi.io/student",
            data: result,
            dataType: "JSON",
            success: function (value) {
                buildTable()
                console.log(value);
                window.location.href="slist.html"
            }


        });


    }
    else {
        $.ajax({
            type: "PUT",
            url: "https://63cfb761e52f587829a384e5.mockapi.io/student/" + object.id,
            data: result,
            dataType: "JSON",
            success: function (value) {
                buildTable()
                console.log(value);
                window.location.href="slist.html"
            }


        });
    }
  })
    
})
function buildTable() {
  $.ajax({
      type: "GET",
      url: "https://63cfb761e52f587829a384e5.mockapi.io/student",
      dataType: "JSON",
      success: function (response) {

          let row = '';
          for (i = 0; i < response.length; i++) {

              row +=
                  `<tr>
                  
     <td>${response[i].name}</td>
     <td>${response[i].Dadname}</td>
     <td>${response[i].email}</td>    
     <td>${response[i].dateofbirth}</td>
     <td>${response[i].radio}</td>
     <td>${response[i].phonenumber}</td>
     <td>${response[i].address}</td>
     <td>
     <button type='button' class='getEditWin text-white btn btn-primary' onclick='editRow(${response[i].id})'>Edit</button>
     <button type='button' class='deleteRow btn btn-danger ms-2' onclick='deleteRow(${response[i].id})'>Delete</button>
   </td>
 </tr>`;

          }


           document.getElementById("mytable").innerHTML = row;//console.log(response);
      }

  });

}
function editRow(id){
  window.location.href="form.html?id="+id
}

  function edit(id){
  $.ajax({
      url: "https://63cfb761e52f587829a384e5.mockapi.io/student/" + id,
      type: "GET",
      success: function (response) {
          console.log(response);
          $("#id").val(response.id);
          $("#Name").val(response.name);
          $("#Fathername").val(response.Dadname);
          $("#Address").val(response.address);
          $("#Dateofbirth").val(response.dateofbirth);
          $("#Phonenumber ").val(response.phonenumber);
          $("input[name='gender'][value='" + response.radio + "']").prop("checked", true);
          $("#Email").val(response.email);
          



          object = response;

      }

  })
}
 


function deleteRow(id) {
  $.ajax({
      url: "https://63cfb761e52f587829a384e5.mockapi.io/student/" + id,
      type: "DELETE",
      success: function (response) {
          // alert("This a user id delete!")
          location.reload()
      }
  })
}
// function table(id) {
//   $.ajax({
//     type: "PUT",
//     url: "https://63cfb761e52f587829a384e5.mockapi.io/student/" + id,
//     data: result,
//     dataType: "JSON",
//     success: function (value) {
      
//         console.log(value);
//     }


// });
// }

