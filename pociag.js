
var predkoscPociagu = 250;
var pozycjaPociagu = 0;
var animacja;

var pociag = document.getElementById("pociag"); 
pociag.addEventListener("click", przyspiesz);

var przyciskStop = document.getElementById("przyciskStop");
przyciskStop.addEventListener("click", zatrzymajPociag); 

function przyspiesz() {
if (predkoscPociagu > 10) {
    predkoscPociagu -= 10; 
    }
    
    clearInterval(animacja);
    animacja = setInterval(klatka, predkoscPociagu); 
}




function klatka() {
    pozycjaPociagu += 2;
    pociag.style.left = pozycjaPociagu + 'px'; 
    sprawdzPozycje(pozycjaPociagu);
}

function sprawdzPozycje(obecnaPozycja) {
    if (obecnaPozycja === 800) {
        alert ("Ale kraksa!");
        console.log("Rozbiłeś się");
            clearInterval(animacja);
    }
}

function zatrzymajPociag() {
    if (pozycjaPociagu < 900);
        clearInterval(animacja);
}