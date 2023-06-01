
/* VARIABLES PARA LOS BOTONES DE HOME */

let logOutButton_home = document.getElementById("logOu");
let userIcon = document.getElementById("userIcon_notLogin");
let userIconLoged = document.getElementById("userIcon_loginAlready");

/* FUNCIÓN PARA MOSTRAR UNA ALERTA AL MOMENTO DE COLOCAR EL MOUSE ENCIMA DEL ICONO DE USER EN HOME */

let showUser = () => {
  let AlertContenedor = document.getElementById("userIcon_loginAlready");
  let divNuevo = document.createElement('div');
  divNuevo.classList.add("showUserAlert");
  divNuevo.innerHTML = '<p class="textUserAlert">Bienvenido</p>';

  userIconLoged.onmouseover = () => {
    AlertContenedor.append(divNuevo);
    setTimeout(() => {
      divNuevo.classList.add("showUserAlert_Opacity");
    }, 10); 
  };

  userIconLoged.onmouseout = () => {
    divNuevo.classList.remove("showUserAlert_Opacity");
    setTimeout(() => {
      divNuevo.remove();
    }, 4000);
};
}

/* FUNCIÓN PARA SABER SI ALGUIEN ESTÁ LOGEADO, ESTO HARÁ QUE SE MUESTRE EL ICONO DE LOG OUT Y UNA VERSIÓN CLARA DEL ICONO DE USER */

let isSomeoneLogIn_home = () => {
  let isSomeone_home = []
  isSomeone_home += JSON.parse(sessionStorage.getItem("login")).nombre;

  if (isSomeone_home.length > 1) {
    logOutButton_home.style.display = 'block';
    userIcon.style.display = 'none';
    userIconLoged.style.display = 'block';
    console.log(isSomeone_home)
  } else {
    userIcon.style.display = 'block';
    userIconLoged.style.display = 'none';
  }
};

/* FUNCION DE ALERTA CUANDO EL USUARIO SE DESLOGEA */

let logOut_action = () => {
  isSomeone_home = []
  sessionStorage.removeItem("login")
  logOutButton_home.style.display = 'none'
  userIconLoged.style.display = 'none'
  userIcon.style.display = 'block'

  alert("Usted ha cerrado sesión")
}

logOutButton_home.onclick = () => {
  logOut_action()
}

isSomeoneLogIn_home()

showUser()

