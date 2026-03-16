function showRegister(){

document.getElementById("login").style.display="none";
document.getElementById("register").style.display="block";

}

function registerUser(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;
let age=document.getElementById("age").value;
let weight=document.getElementById("weight").value;
let height=document.getElementById("height").value;

if(!name || !email || !pass){

alert("Completa todos los campos");
return;

}

let user={

name:name,
email:email,
pass:pass,
age:age,
weight:weight,
height:height

};

localStorage.setItem(email,JSON.stringify(user));

alert("Cuenta creada correctamente");

document.getElementById("register").style.display="none";
document.getElementById("login").style.display="block";

}

function loginUser(){

let email=document.getElementById("loginEmail").value;
let pass=document.getElementById("loginPass").value;

let data=localStorage.getItem(email);

if(!data){

alert("Usuario no encontrado");
return;

}

let user=JSON.parse(data);

if(user.pass!==pass){

alert("Contraseña incorrecta");
return;

}

localStorage.setItem("session",email);

showDashboard();

}

function showDashboard(){

document.getElementById("login").style.display="none";
document.getElementById("dashboard").style.display="block";

let email=localStorage.getItem("session");
let user=JSON.parse(localStorage.getItem(email));

let imc=user.weight/((user.height/100)*(user.height/100));

document.getElementById("imc").innerText="Tu IMC es: "+imc.toFixed(2);

}
