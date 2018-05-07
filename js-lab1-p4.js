"use strict";
{ /*Start of code block*/

/*AddressBook class*/

class AddressBook {
  constructor(){
    this.contacts = [];
  }

  /*Methods*/

  add(){
    let newContact = new Contact(name.value, email.value, phone.value, relation.value);
    this.contacts.push(newContact);
    console.log(this.contacts);
    // makes new contact object, places in addressBook, pushes it to contacts
  }

  display(){

// Retrieves div, creates another div, p, info, icon, then retrieves button
    let cbox = document.getElementById("cbox");

    let div = document.createElement("div");
    let info = document.createElement("p");
    let icon = document.createElement("i");
    let button = document.getElementById("button");

// Adds CSS classes to newly created elements
    div.classList.add("ccard");
    icon.classList.add("material-icons");
    icon.classList.add("delete");
    icon.innerText = "delete";
    info.innerText = `Name: ${name.value}
      Email: ${email.value}
      Phone: ${phone.value}
      Relation: ${relation.value}
      `;

    div.appendChild(info);
    div.appendChild(icon);
    cbox.appendChild(div);
// Not a method, but achieves the goal of deleting the contact card...
    icon.addEventListener("click", () => {
      div.remove();
      // this.contacts.splice(???,1);

    });

  } /*end of display method*/

  //  deleteAt(){
  //   let cbox = document.querySelector("#cbox");
  //   cbox.removeChild(div);
  //   contacts.splice(1,1);
  //   addressBook.display();
  // }

} /*end of addressBook class*/

/*Contact class*/

class Contact {
  constructor(name, email, phone, relation){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }

} /*end of Contact class*/

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let relation = document.querySelector("#relation");

let addressBook = new AddressBook;

button.addEventListener("click", () =>{
  addressBook.add();
  addressBook.display();
  // Adds contacts, then displays current contacts.  Code below resets form values
  name.value = "";
  email.value = "";
  phone.value = "";
  relation.value = "";
  })

  // Event listener to display contacts when page first loads
window.addEventListener("load", ()=>{
  addressBook.display();
})
// let icon = document.querySelector("i.material-icons.delete");
// this.icon.addEventListener("click", () =>{
//   addressBook.deleteAt();
//   addressBook.display();
// })
// document.querySelector("icon");
// document.querySelector("delete").addEventListener("click", () =>{
//   addressBook.deleteAt();
// })


} /*End of code block*/
