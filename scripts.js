//clase padre para cada cuenta 

class Cuenta {
  constructor(nombre, saldo, password) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.password = password;
  }
  //validador de contraseñas
  validarPassword(password) {
    return password === this.password;
  }
  
  consultarSaldo() {
    return this.saldo;
  }
  //ingreso de monto con condicional de saldo maximo
  ingresarMonto(monto) {
    if (this.saldo + monto > 990) {
      return false;
    } else {
      this.saldo += monto;
      return true;
    }
  }
  //retiro de monto con condicional de saldo minimo
  retirarMonto(monto) {
    if (this.saldo - monto < 10) {
      return false;
    } else {
      this.saldo -= monto;
      return true;
    }
  }
}
//objetos cuentas ---instanciando Cuenta
var cuentas = [
new Cuenta("Pepito", 200, "1234"),
new Cuenta("Maria", 290, "9871"),
new Cuenta("Jose", 67, "5285")
];

var cuentaActiva = null;
//validaciones de inicio de sesion 

function iniciarSesion() {
var nombre = document.getElementById("nombre").value;
var password = document.getElementById("password").value;

var cuenta = cuentas.find(cuenta => cuenta.nombre === nombre);

if (!cuenta) {
  mostrarMensaje("Cuenta no encontrada");
  return;
}

if (!cuenta.validarPassword(password)) {
  mostrarMensaje("Contraseña incorrecta");
  return;
}

cuentaActiva = cuenta;

document.getElementById("nombreUsuario").textContent = cuentaActiva.nombre;

document.getElementById("login").style.display = "none";
document.getElementById("cajero").style.display = "block";
}

function cerrarSesion() {
cuentaActiva = null;

document.getElementById("nombre").value = "";
document.getElementById("password").value = "";

document.getElementById("login").style.display = "block";
document.getElementById("cajero").style.display = "none";
}

function consultarSaldo() {
mostrarMensaje("Tu saldo actual es de $" + cuentaActiva.consultarSaldo());
}

function ingresarMonto() {
var monto = parseFloat(document.getElementById("montoIngresar").value);

if (!cuentaActiva.ingresarMonto(monto)) {
  mostrarMensaje("No puedes tener más de $990 en tu cuenta");
} else {
  mostrarMensaje("Has ingresado $" + monto + ". Tu nuevo saldo es de $" + cuentaActiva.consultarSaldo());
}
}

function retirarMonto() {
var monto = parseFloat(document.getElementById("montoRetirar").value);

if (!cuentaActiva.retirarMonto(monto)) {
  mostrarMensaje("No puedes tener menos de $10 en tu cuenta");
} else {
  mostrarMensaje("Has retirado $" + monto + ". Tu nuevo saldo es de $" + cuentaActiva.consultarSaldo());
}
}

function mostrarMensaje(mensaje) {
document.getElementById("mensaje").textContent = mensaje;
}

/*
class Cuenta {
    constructor(nombre, saldo, password) {
      this.nombre = nombre;
      this.saldo = saldo;
      this.password = password;
    }
    
    validarPassword(password) {
      return password === this.password;
    }
    
    consultarSaldo() {
      return this.saldo;
    }
    
    ingresarMonto(monto) {
      if (this.saldo + monto > 990) {
        return false;
      } else {
        this.saldo += monto;
        return true;
      }
    }
    
    retirarMonto(monto) {
      if (this.saldo - monto < 10) {
        return false;
      } else {
        this.saldo -= monto;
        return true;
      }
    }
  }
  
  var cuentas = [
    new Cuenta("Pepito", 200, "1234"),
    new Cuenta("Maria", 290, "9871"),
    new Cuenta("Jose", 67, "5285")
  ];
  
  function cajero() {
    while (true) {
      var cuentaSeleccionada = prompt("Ingresa el nombre de la cuenta con la que deseas interactuar (Pepito, Maria, Jose)");
      var cuenta = cuentas.find(cuenta => cuenta.nombre === cuentaSeleccionada);
      
      if (!cuenta) {
        alert("Cuenta no encontrada");
        continue;
      }
      
      var password = prompt("Ingresa el password de la cuenta");
      
      if (!cuenta.validarPassword(password)) {
        alert("Password incorrecto");
        continue;
      }
      
      var continuar = true;
      
      while (continuar) {
        var opcion = prompt("Selecciona una opción:\n1. Consultar tu saldo\n2. Ingresar monto\n3. Retirar monto\n4. Salir");
        
        switch(opcion) {
          case "1":
            alert("Tu saldo actual es de $" + cuenta.consultarSaldo());
            break;
          case "2":
            var monto = parseFloat(prompt("Ingresa el monto a ingresar"));
            if (!cuenta.ingresarMonto(monto)) {
              alert("No puedes tener más de $990 en tu cuenta");
            } else {
              alert("Has ingresado $" + monto + ". Tu nuevo saldo es de $" + cuenta.consultarSaldo());
            }
            break;
          case "3":
            var monto = parseFloat(prompt("Ingresa el monto a retirar"));
            if (!cuenta.retirarMonto(monto)) {
              alert("No puedes tener menos de $10 en tu cuenta");
            } else {
              alert("Has retirado $" + monto + ". Tu nuevo saldo es de $" + cuenta.consultarSaldo());
            }
            break;
          case "4":
            continuar = false;
            break;
          default:
            alert("Opción inválida");
            break;
        }
      }
    }
  }
  
  cajero();*/
 
//// cajero funcional arriba modificar para generar un form 



  //****************************************************** */
  /*class Cuenta {
    constructor(nombre, saldo, password) {
      this.nombre = nombre;
      this.saldo = saldo;
      this.password = password;
      this.historial = [];
    }
    
    validarPassword(password) {
      return password === this.password;
    }
    
    consultarSaldo() {
      console.log("Tu saldo actual es de $" + this.saldo);
      this.historial.push("Consulta de saldo: $" + this.saldo);
      return this.saldo;
    }
    
    ingresarMonto(monto) {
      if (this.saldo + monto > 990) {
        console.log("No puedes tener más de $990 en tu cuenta");
        this.historial.push("Intento fallido de ingresar $" + monto);
        return false;
      } else {
        this.saldo += monto;
        console.log("Has ingresado $" + monto + ". Tu nuevo saldo es de $" + this.saldo);
        this.historial.push("Ingreso de $" + monto + ". Nuevo saldo: $" + this.saldo);
        return true;
      }
    }
    
    retirarMonto(monto) {
      if (this.saldo - monto < 10) {
        console.log("No puedes tener menos de $10 en tu cuenta");
        this.historial.push("Intento fallido de retirar $" + monto);
        return false;
      } else {
        this.saldo -= monto;
        console.log("Has retirado $" + monto + ". Tu nuevo saldo es de $" + this.saldo);
        this.historial.push("Retiro de $" + monto + ". Nuevo saldo: $" + this.saldo);
        return true;
      }
    }
    
    mostrarHistorial() {
      console.log("Historial de operaciones:");
      for (var i = 0; i < this.historial.length; i++) {
        console.log(this.historial[i]);
      }
    }
  }
  
  var cuentas = [
    new Cuenta("Persona 1", 200, "1234"),
    new Cuenta("Persona 2", 290, "5678"),
    new Cuenta("Persona 3", 67, "9012")
  ];
  
  function cajero() {
    while (true) {
      var cuentaSeleccionada = prompt("Ingresa el nombre de la cuenta con la que deseas interactuar (Persona 1, Persona 2, Persona 3)");
      var cuenta = cuentas.find(cuenta => cuenta.nombre === cuentaSeleccionada);
      
      if (!cuenta) {
        alert("Cuenta no encontrada");
        continue;
      }
      
      var password = prompt("Ingresa el password de la cuenta");
      
      if (!cuenta.validarPassword(password)) {
        alert("Password incorrecto");
        continue;
      }
      
      var continuar = true;
      
      while (continuar) {
        var opcion = prompt("Selecciona una opción:\n1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto\n4. Mostrar historial\n5. Salir");
        
        switch(opcion) {
          case "1":
            cuenta.consultarSaldo();
            break;
          case "2":
            var monto = parseFloat(prompt("Ingresa el monto a ingresar"));
            cuenta.ingresarMonto(monto);
            break;
          case "3":
            var monto = parseFloat(prompt("Ingresa el monto a retirar"));
            cuenta.retirarMonto(monto);
            break;
          case "4":
            cuenta.mostrarHistorial();
            break;
          case "5":
            continuar = false;
            break;
          default:
            alert("Opción inválida");
            break;
        }
      }
    }
  }
  
  cajero();


  //************************************************************************************* */

/*var cuentas = [
    { nombre: "Persona 1", saldo: 200, password: "1234" },
    { nombre: "Persona 2", saldo: 290, password: "5678" },
    { nombre: "Persona 3", saldo: 67, password: "9012" }
  ];
  
  function cajero() {
    var cuentaSeleccionada = prompt("Ingresa el nombre de la cuenta con la que deseas interactuar (Persona 1, Persona 2, Persona 3)");
    var cuenta = cuentas.find(cuenta => cuenta.nombre === cuentaSeleccionada);
    
    if (!cuenta) {
      alert("Cuenta no encontrada");
      return;
    }
    
    var password = prompt("Ingresa el password de la cuenta");
    
    if (password !== cuenta.password) {
      alert("Password incorrecto");
      return;
    }
    
    var opcion = prompt("Selecciona una opción:\n1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto");
    
    switch(opcion) {
      case "1":
        alert("Tu saldo actual es de $" + cuenta.saldo);
        break;
      case "2":
        var monto = parseFloat(prompt("Ingresa el monto a ingresar"));
        if (cuenta.saldo + monto > 990) {
          alert("No puedes tener más de $990 en tu cuenta");
        } else {
          cuenta.saldo += monto;
          alert("Has ingresado $" + monto + ". Tu nuevo saldo es de $" + cuenta.saldo);
        }
        break;
      case "3":
        var monto = parseFloat(prompt("Ingresa el monto a retirar"));
        if (cuenta.saldo - monto < 10) {
          alert("No puedes tener menos de $10 en tu cuenta");
        } else {
          cuenta.saldo -= monto;
          alert("Has retirado $" + monto + ". Tu nuevo saldo es de $" + cuenta.saldo);
        }
        break;
      default:
        alert("Opción inválida");
        break;
    }
  }
  
  cajero();*/