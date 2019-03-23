// function slideshow(){
//     var x = document.getElementById("check");
//     if (x.style.display === "none"){
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
// }


const restaurantList = [];
const titleFood = [];
const session = [];
const bookingTable = [];
const privatButton = document.getElementById('private-button');
const bookingButton = document.getElementById('booking-button');
const contactButton = document.getElementById('contact-button');


function createForm(){

  var myform = document.createElement('form');
  myform.setAttribute('method', 'post');
  myform.setAttribute('id', 'booking_Table');
  // myform.setAttribute('name', 'url');
  // myform.setAttribute('hidden', 'true');

  var bookingT = document.createElement('div');
  bookingT.setAttribute('class', 'container');
  bookingT.style.width = '800px';
  bookingT.style.height = '700px';
  bookingT.style.display = 'block';
  bookingT.style.top = '0';
  bookingT.style.bottom = '0';
  bookingT.style.left = '0';
  bookingT.style.right = '0';
  bookingT.style.backgroundColor = '#ccc';
  bookingT.className = "form-group row"

  var h3 = document.createElement('h3');
  h3.className += "title-modal";

  var texnode = document.createTextNode('Réserver pour une table');
  bookingT.appendChild(h3);
  h3.appendChild(texnode);


  var inputL = document.createElement('input');
  inputL.setAttribute('type', 'text');
  inputL.setAttribute('name', 'lastName');
  inputL.setAttribute('id', 'last-name');
  inputL.setAttribute('placeholder', 'lastName');
  inputL.className += " col form-control";

  var inputF = document.createElement('input');
  inputF.setAttribute('type', 'text');
  inputF.setAttribute('name', 'firstName');
  inputF.setAttribute('placeholder', 'Firstname');
  inputF.setAttribute('id', 'first-name');
  inputF.className += "col form-control";


  var inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('name', 'email');
  inputEmail.setAttribute('placeholder', 'Email');
  inputEmail.setAttribute('id', 'email');
  inputEmail.className += "col form-control";


  var inputHour = document.createElement('input');
  inputHour.setAttribute('type', 'time');
  inputHour.setAttribute('name', 'hour');
  inputHour.setAttribute('id', 'hour');
  inputHour.className += "col form-control";


  var inputNumber = document.createElement('input');
  inputNumber.setAttribute('type', 'text');
  inputNumber.setAttribute('name', 'number');
  inputNumber.setAttribute('placeholder', 'Telephone');
  inputNumber.setAttribute('id', 'tel');
  inputNumber.className += "col form-control";


  var checkboxe = document.createElement('checkbox');
  checkboxe.setAttribute('type', 'checkbox');
  checkboxe.setAttribute('id', 'checkbox');
  checkboxe.className += "form-check-input";

  //checkboxe.innerHTML = 'Si vous voulez savoir...'

  // var session = document.createElement('select')
  // session.appendChild(optsession);
  // var optsession = document.createElement('option')
  // optsession.setAttribute('value', 'id')
  // session.setAttribute('id', 'select');
  // optsession.className += "form-control";

  var enquires = document.createElement('input')
  enquires.setAttribute('type', 'textarea')
  enquires.setAttribute('id', 'enquire');
  enquires.className += "form-control";
  
  var submit = document.createElement('input')
  submit.setAttribute('type', 'submit')
  submit.setAttribute('id', '.');
  submit.className += "btn btn-primary";
  submit.innerHTML = "Envoyer"

  //appendchilds
  document.body.appendChild(myform);

  myform.appendChild(bookingButton);
  bookingButton.appendChild(bookingT);
  bookingT.appendChild(inputF);
  bookingT.appendChild(inputL);
  bookingT.appendChild(inputEmail);
  bookingT.appendChild(inputHour);
  bookingT.appendChild(inputNumber);
  bookingT.appendChild(checkboxe);
  bookingT.appendChild(submit);

  //bookingTable.push(this);

  const messages = document.createElement('p');
  messages.setAttribute('id', 'errors-msg');

}

////////////////////////////////////////////////////////////

function createPrivateForm(){
  var myformPrivate = document.createElement('form');
  myformPrivate.setAttribute('method', 'post');
  myformPrivate.setAttribute('id', 'bookingTable');
  // myformPrivate.setAttribute('action', 'url');
  myformPrivate.setAttribute('hidden', 'true');

  var bookingP = document.createElement('div');
  bookingP.setAttribute('class', 'container');
  bookingP.style.width = '800px';
  bookingP.style.height = '500px';
  bookingP.style.postion = 'fixed';
  bookingP.style.backgroundColor = '#ccc';
  bookingP.style.top = '0';

  var h2 = document.createElement('h2');
  h2.className += "title-modal-private";
  var textNodeP = document.createTextNode('Réserver pour une salle privée');

  bookingP.appendChild(h2);
  h2.appendChild(textNodeP);

  var inputL = document.createElement('input');
  inputL.setAttribute('type', 'text');
  inputL.setAttribute('name', 'lastName');
  inputL.setAttribute('id', 'last-name');
  inputL.setAttribute('placeholder', 'lastName');


  var inputF = document.createElement('input');
  inputF.setAttribute('type', 'text');
  inputF.setAttribute('name', 'firstName');
  inputF.setAttribute('placeholder', 'Firstname');
  inputF.setAttribute('id', 'first-name');


  var inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('name', 'email');
  inputEmail.setAttribute('placeholder', 'Email');
  inputL.setAttribute('id', 'email');


  var inputHour = document.createElement('input');
  inputHour.setAttribute('type', 'time');
  inputHour.setAttribute('name', 'hour');
  inputL.setAttribute('id', 'hour');


  var inputNumber = document.createElement('input');
  inputNumber.setAttribute('type', 'text');
  inputNumber.setAttribute('name', 'number');
  inputNumber.setAttribute('placeholder', 'Telephone');
  inputNumber.setAttribute('id', 'tel');


  var checkboxe = document.createElement('checkbox');
  checkboxe.setAttribute('type', 'checkbox');
  checkboxe.setAttribute('id', 'checkbox');


  // var session = document.createElement('select')
  // session.appendChild(optsession);
  // var optsession = document.createElement('option')
  // optsession.setAttribute('value', 'id')
  // session.setAttribute('id', 'select');

  var enquires = document.createElement('input')
  enquires.setAttribute('type', 'textarea')
  enquires.setAttribute('id', 'enquire');

  document.body.appendChild(myformPrivate);

  myformPrivate.appendChild(privatButton);
  privatButton.appendChild(bookingP);
  privatButton.appendChild(inputF);
  privatButton.appendChild(inputL);
  privatButton.appendChild(inputEmail);
  privatButton.appendChild(inputHour);
  privatButton.appendChild(inputNumber);
  privatButton.appendChild(checkboxe);
  // privatButton.appendChild(session);
  privatButton.appendChild(enquires);

}

/*document.getElementById('.').click = function(){
  var lastname = document.getElementById('last-name');
  var LN = lastname[0].value;
  
  var firstname = document.getElementById('first-name');
  var FN = firstname[0].value;

  var email = document.getElementById('email');
  var EM = email[0].value;

  var hour = document.getElementById('hour');
  var H = hour[0].value;
  
  var tel = document.getElementById('tel');
  var T = tel[0].value;

  var checkbox = document.getElementById('checkbox');
  var CB = checkbox[0].value;

  document.getElementById('spaceBook').innerHTML = 
  LN + " " + FN + " " + EM + " "+ H + " "+ T + " "+ CB;
}*/

$(document).ready(function(){
  $('.submit').click(function(event){
    event.preventDefault()
    console.log('button fonctioonn!!!')
  })
})
/*function makeAppearFormBookingTable(){
  document.querySelector('#booking-button').addEventListener(click, function(e){
    $.get('http://localhost:3000/bookingtable', function(res, err){
      res.forEach(function (foody){
        new bookingTable(foody.titleFood_name, foody.titleFood_description, foody.titleFood_img, foody.titleFood_price, foody.session_id)
      });
      
    });
    e.preventDefault();
  });
}*/

function send(){
  // var lastname = document.getElementById('last-name').value;
  // var firstname = document.getElementById('first-name').value;
  // var email = document.getElementById('email').value;
  // var hour = document.getElementById('hour').value;
  // var tel = document.getElementById('tel').value;
  // var checkbox = document.getElementById('checkbox').value;

  $.post('http://localhost:3000/formulaire',
  {
    lastname: lastname,
    firstname: firstname,
    email: email,
    hour: hour,
    tel: tel,
    checkbox: checkbox
  },
  
  function(response){
    console.log(response)
  })

}

// $.get('http://localhost:3000/session', function(res, err){
//   res.forEach(function (cat){
//     new Category(cat.name)
//   })
// })


// $.get('http://localhost:3000/restaurantList', function(res, err){
//   res.forEach(function (list){
//     new Restaurants(list.restaurantList_title, list.restaurantList_url, restaurantList_adress)
//   })
// })