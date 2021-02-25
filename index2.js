const usuario = prompt("Ingrese el usuario");
const password = prompt("Ingrese la contraseña");

function login(usuario, password) {
    if (usuario == "admin" && password == 123456) {
        return true;
    } else {
        return false;
    }
}
let estaLogeado = login(usuario,password);
if (estaLogeado == true) {
    alert("Bienvenida Admin");
    opcionCajero();
} else {
    alert("Usuario y/o contraseña incorrectos");
}

function agregarSaldo() {
    let numeroDeCuenta = 0;
    let saldo = 0;
    let opcion = prompt("Ingrese el numero de cuenta: 1)567, 2)789");
    if (opcion == 1) {
        let numeroDeCuenta = 567,
            saldo = Number(prompt("Monto a ingresar")),
            saldoActualizado = saldo + 10000;
            alert(`La cuenta 567 posee ${saldoActualizado} pesos`);

    } else if (opcion == 2) {
        let numeroDeCuenta = 789,
            saldo = Number(prompt("Monto a ingresar"));
            saldoActualizado = saldo + 5000;
            alert(`La cuenta 789 posee ${saldoActualizado} pesos`)
    } else {
        alert("Opción inválida");
    }
}

function retirarSaldo() {
    let numeroDeCuenta = 0;
    let saldo = 0;
    let opcion = prompt("Ingrese el numero de cuenta: 1)567, 2)789");
    if (opcion == 1) {
        let numeroDeCuenta = 567,
            saldo = Number(prompt("Monto a debitar")),
            saldoActualizado = saldo - 10000;
            alert(`La cuenta 567 posee ${saldoActualizado} pesos`);
    } else if (opcion == 2) {
        let numeroDeCuenta = 789,
            saldo = Number(prompt("Monto a debitar"));
            saldoActualizado = saldo - 5000;
            alert(`La cuenta 789 posee ${saldoActualizado} pesos`)
    } else {
        alert("Opción inválida");
    }

}

function verificarCuenta() {
    let numeroDeCuenta = 0;
    let saldo = 0;
    let opcion = prompt("¿Qué cuenta desea verificar?: 1)567, 2)789");
    if (opcion == 1) {
        alert(`La cuenta 567 posee 10000 pesos`);
    } else if (opcion == 2) {
        alert(`La cuenta 789 posee 5000 pesos`);
    }
}

function opcionCajero() {
    let menu = prompt("Elija una opción: a)Ingresar dinero, b)Retirar dinero o c)Verificar el monto en cuenta");
    if (menu == "a") {
        agregarSaldo();
    } else if (menu == "b") {
        retirarSaldo();
    } else if (menu == "c") {
        verificarCuenta();
    } else {
        alert("Opción incorrecta");
    }
}   
