let usuariosRegistrados = [
    {
      "email": "alexandersequera97@gmail.com",
      "contraseña": "alexeque1997",
      "nombre": "Alexander",
      "apellido": "Sequera"
    },
    {
      "email": "lolazo@gmail.com",
      "contraseña": "lolazo123",
      "nombre": "Lolazo",
      "apellido": "Martinez"
    }
  ];
  
  class creadorDeUsuarios {
    constructor(email, contraseña, nombre, apellido) {
      this.email = email;
      this.contraseña = contraseña;
      this.nombre = nombre;
      this.apellido = apellido;
    }
  }
  
  const guardarLocal = (clave, valor) => {
    sessionStorage.setItem(clave, valor);
  };
  
  let mostrarPassword = (passwordInput) => {
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
  };

  let showLogin = (name) => {
    contenedor1.style.display = "none";
      welcomeDiv.style.display = "block";
      welcomeDiv.innerHTML = `<p class="title-text">Bienvenido, ${name}</p>`;
  }
  
  let isSomeoneLogIn = () => {
    let isSomeone = []
    isSomeone += JSON.parse(sessionStorage.getItem("login"))

    if (isSomeone.length > 1) {
      let getName = JSON.parse(sessionStorage.getItem("login")).nombre;
      showLogin(getName)
    } else {
        alert("Holi")
    }

    console.log(isSomeone.length)
  };
  
  let userFinder = (email, password) => {
    for (let i = 0; i < usuariosRegistrados.length; i++) {
      if (usuariosRegistrados[i].email === email && usuariosRegistrados[i].contraseña === password) {
        return true;
      }
    }
    return false;
  };
  
  let userNameFinder = (email, par) => {
    for (let i = 0; i < usuariosRegistrados.length; i++) {
      if (usuariosRegistrados[i].email === email) {
        return usuariosRegistrados[i][par];
      }
    }
    return "";
  };
  
  let userIsLogIn = (user) => {
    alert("Bienvenido");
    contenedor1.style.display = "none";
    welcomeDiv.style.display = "block";
    welcomeDiv.innerHTML = `<p class="title-text">Bienvenido, ${user}</p>`;
    setTimeout(() => {
      window.location.href = '../index.html';
    }, 2000);
  };

  let show
  
  let signLog = document.getElementById('signUp');
  let contenedor1 = document.getElementById('formVisible1');
  let contenedor2 = document.getElementById('formVisible2');
  
  signLog.onclick = function() {
    contenedor1.style.display = 'none';
    contenedor2.style.display = 'block';
  };
  
  let btnMostrar = document.getElementById('btn_button');
  let passwordInput = document.getElementById('passInput');
  
  btnMostrar.onclick = () => {
    mostrarPassword(passwordInput);
  };
  
  let loginButton = document.getElementById("login_button");
  let welcomeDiv = document.getElementById("welcomeDiv");
  
  loginButton.onclick = () => {
    let loginEmail = document.getElementById("email_login").value;
    let loginPassword = document.getElementById("passInput").value;
    let isTextPasswordLogin = isPasswordText(loginPassword);
    let userNameFound = userNameFinder(loginEmail, "nombre");
    let userLastNameFound = userNameFinder(loginEmail, "apellido");
    let isFound = userFinder(loginEmail, isTextPasswordLogin);
  
    if (isFound) {
      userIsLogIn(userNameFound);
      let session = new creadorDeUsuarios(loginEmail, isTextPasswordLogin, userNameFound, userLastNameFound);
      guardarLocal("login", JSON.stringify(session));
    } else if (!isFound) {
      alert("Usted no está registrado");
    } else {
      alert("Usted no ha ingresado nada");
    }
  };
  
  let btnBack = document.getElementById('btn');
  
  btnBack.onclick = function() {
    contenedor1.style.display = 'block';
    contenedor2.style.display = 'none';
  };
  
  /* REGISTRO */
  
  let signUpClick = document.getElementById("signnUpButton");
  
  let isSignedUp = (emailUser, passwordUser) => {
    for (let i = 0; i < usuariosRegistrados.length; i++) {
      if (usuariosRegistrados[i].email === emailUser && usuariosRegistrados[i].contraseña === passwordUser) {
        alert("Ya está registrado");
        return true;
      }
    }
    return false;
  };
  
  let upperCaseConverter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  let isPasswordText = (password) => {
    if (password.type === 'password') {
      password.type = 'text';
    }
    return password;
  };
  
  let signUpProcess = (name, lastName, password, email) => {
    let nameChart = upperCaseConverter(name);
    let lastNameChart = upperCaseConverter(lastName);
    let passwordText = isPasswordText(password);
  
    let newUser = new creadorDeUsuarios(email, passwordText, nameChart, lastNameChart);
    usuariosRegistrados.push(newUser);
    alert("Ya usted ha sido registrado.");
    console.log(usuariosRegistrados);
  };
  
  signUpClick.onclick = () => {
    let userName = document.getElementById("loginName").value;
    let userLastName = document.getElementById("loginLastName").value;
    let userPassword = document.getElementById("loginPassword").value;
    let userEmail = document.getElementById("loginEmail").value;
    let registered = isSignedUp(userEmail, userPassword);
  
    if (!registered) {
      signUpProcess(userName, userLastName, userPassword, userEmail);
    }
  };
  
  let btnMostrarLogin = document.getElementById("btn_buttonLogin");
  let passwordLogin = document.getElementById("loginPassword");
  
  btnMostrarLogin.onclick = () => {
    mostrarPassword(passwordLogin);
  };
  
  isSomeoneLogIn();
