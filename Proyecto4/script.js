// deg hace referencia a los grados

const deg = 6;
const horas = document.querySelector('.Hora');
const minutos = document.querySelector('.Minuto');
const segundos = document.querySelector('.Segundo');

setInterval(() => {
    let tiempo = new Date();
    let hr = tiempo.getHours() * 30 + tiempo.getMinutes() / 12;
    let min = tiempo.getMinutes() * deg + tiempo.getSeconds() / 60;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${hr}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;
})

function calcularTiempo() {
    let tiempo = new Date();
    let Hora = tiempo.getHours();
    let Minuto = tiempo.getMinutes();
    let Segundo = tiempo.getSeconds();
    let periodo = Hora < 12 ? 'AM' : 'PM';  

    Hora = Hora % 12;
    Hora = Hora === 0 ? 12 : Hora;
    Hora = Hora < 10 ? "0" + Hora : Hora;
    Minuto = Minuto < 10 ? "0" + Minuto : Minuto;
    Segundo = Segundo < 10 ? "0" + Segundo : Segundo;    
    
    let pantallaReloj = Hora + ":" + Minuto + ":" + Segundo + " " + periodo;
    let relojDigital = document.querySelector(".Digital");
    relojDigital.innerHTML = pantallaReloj;
}

setInterval(calcularTiempo,1000);