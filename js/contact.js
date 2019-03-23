//test jquery envoi demail avec form action="https://formspree.io/joe.minimax@gmail.com" 

// $(document).ready(function(){
//     $('.submit').click(function(event){
//       console.log('button fonctioonn!!!')

//       var email = $('.email').val();
//       var name = $('.lastname').val();
//       var firstname = $('.firstname').val();
//       var msg = $('.messages');
//       msg.empty()

//       if (email.length >= 5 && email.includes('@') && email.includes('.')){
//         msg.append("<span>L'email est bien valide<span>")
//       } else {
//         event.preventDefault()
//         msg.append("<span>L'email n'est pas valide</span>")
//       }

//       if (firstname.length >= 5 && name.length >= 5){
//         msg.append("<span>Everything good</span>")
//       } else {
//         event.preventDefault()
//         msg.append("<span>First name ou Last name doivent avoir plus de 5 caractere</span>")
//       }

//     })
// })
$.get('http://localhost:3000/contacts', function (response) {
  response.forEach(function (contact) {
    const div = document.createElement('div');
    
    div.innerHTML = contact.contact_firstname;
    // div.innerHTML = contact.contact_lastname;
    // div.innerHTML = contact.contact_mail;

    document.body.appendChild(div)
  });
});

function send(){
  var contact_firstname = document.querySelector('#contact_firstname').value;
  // var contact_lastname = document.querySelector('#contact_lastname').value;
  // var contact_mail = document.querySelector('#contact_mail').value;
  console.log(contact_firstname),
  // console.log(contact_lastname),
  // console.log(contact_mail),
  $.post('http://localhost:3000/contact', {contact_firstname : contact_firstname},
    function(response){
    console.log(response)
  });
}
/*
function createcontact(contacts, index){
  var contact = document.createElement('div');
  contact.className = "contact_wrapper";
  contact.id = "contact_wrapper"+index;

  contact.firstname =document.createElement('h3');
  contact.firstname.className = "contact_firstname";
  contact.firstname.id = "contact_firstname"+index;
  contact.firstname.textContent = contacts.contact_firstname;

  contact.lastname =document.createElement('h3');
  contact.lastname.className = "contact_lastname";
  contact.lastname.id = "contact_lastname"+index;
  contact.lastname.textContent = contacts.contact_lastname;

  contact.mail =document.createElement('h3');
  contact.mail.className = "contact_mail";
  contact.mail.id = "contact_mail"+index;
  contact.mail.textContent = contacts.contact_mail;



}*/