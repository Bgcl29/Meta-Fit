function showRegister(){

login.classList.add("hidden")
register.classList.remove("hidden")

}

function register(){

let user={

name:name.value,
email:email.value,
pass:pass.value,
age:age.value,
weight:weight.value,
height:height.value

}

localStorage.setItem(user.email,JSON.stringify(user))

alert("Cuenta creada")

location.reload()

}

function login(){

let data=localStorage.getItem(loginEmail.value)

if(!data){

alert("Usuario no encontrado")
return

}

let user=JSON.parse(data)

if(user.pass!=loginPass.value){

alert("Contraseña incorrecta")
return

}

localStorage.setItem("session",loginEmail.value)

showDashboard()

}

function showDashboard(){

login.classList.add("hidden")
dashboard.classList.remove("hidden")

let user=JSON.parse(localStorage.getItem(localStorage.getItem("session")))

let imc=user.weight/((user.height/100)**2)

document.getElementById("imc").innerText="IMC: "+imc.toFixed(2)

}
