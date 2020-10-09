var img_user     = document.getElementById('user') ;
var img_cpu      = document.getElementById('cpu') ;
var winner       = document.getElementById('ganador').innerText;
var btn_iniciar  = document.getElementById("Iniciar");
var user_point   = document.getElementById('user-point').innerText;
var cpu_point    = document.getElementById('cpu-point').innerText;
var user         = num_aleatorio();
var cpu          = num_aleatorio();

function num_aleatorio() {
    return parseInt(Math.random() * 3);
}
function imgCpu(opcion) {
    if (opcion == 0) {
        img_cpu.src = "./img/Piedra.png";
    } else if (opcion == 1) {
        img_cpu.src = "./img/Papel.png";
    } else {
        img_cpu.src = "./img/Tijeras.png";
    }
}
function imgUser(opcion) {
    if (opcion == 0) {
        img_user.src = "./img/Piedra.png";
    } else if (opcion == 1) {
        img_user.src = "./img/Papel.png";
    } else {
        img_user.src = "./img/Tijeras.png";
    }
}
function game(user, cpu) {
    if (user != cpu) {
        if (
		(user === 0  && cpu === 2) || 
		(user === 1  && cpu === 0) || 
		(user === 2  && cpu === 1) 
        ){
            user_point++;
            document.getElementById('user-point').innerText = user_point;
            winner = "Ganador es User";
            document.getElementById('ganador').innerText = winner;
        }
        else if(user == undefined) {
            alert("Escoje una opcion")
        }
        else{
            winner = "Ganador es CPU";
            document.getElementById('ganador').innerText = winner;
            cpu_point++;
            document.getElementById('cpu-point').innerText = cpu_point;
        }
    }
    else if(user === cpu) {
        winner = "Empate";
            document.getElementById('ganador').innerText = winner;
    }
    else {
        alert("Error")
    } 
};

btn_iniciar.onclick = function() {
    cpu = num_aleatorio();
    user = num_aleatorio();
    imgUser(user);
    imgCpu(cpu);
    game(user, cpu);
}
