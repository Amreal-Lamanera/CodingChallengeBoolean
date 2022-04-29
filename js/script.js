// COMMENTI PRESENTI IN INDEX:

// Qua ho deciso di complicarmi un po' la vita... ho studiato javascript in passato, ma essendo passati molti anni non ricordo molto bene come utilizzarlo, comunque con l'aiuto di google sono giunto ad una soluzione. Il problema è che la funzione prenota deve dare output/alert diverso a seconda che sia stato selezionato un monopattino o meno, non posso avere a schermo l'alert con scritto che sono riuscito se poi html mi chiede di selezionare almeno un input radio tramite "required". La soluzione implementata è stata:
// - creo una funzione che mi controlla se almeno un radio è selezionato così composta:
// 1. variabile radios di tipo lista di elementi tramite getElementsByName con il nome dato ai radio;
// 2. un for che scorre la lista e controlla ogni elemento, se ne trova uno selezionato (checked) ritorna il valore true, altrimenti ritorna false;
// - a questo punto con un if chiamo la funzione check e se ha risultato true mando l'alert di prenotazione effettuata, altrimenti mando l'alert di selezionare almeno un monopattino e ne seguirà, grazie a html5, il messaggio (derivato da aver messo la caratteristica "required" nei radio) di selezionare almeno un radio.

//FINE


// Creo 4 variabili globali che mi saranno utili in funzioni diverse: prenotato mi serve per capire se ho un monopattino già prenotato, radios è un array contenente tutti gli elementi input radio, option contiene i blocchi section, quindi tutti dati sui monopattini singolarmente, e light contiene il pulsante per accendere/spegnere le luci.
var prenotato = false;
var radios = document.getElementsByName("monopattino");
var options = document.getElementsByTagName("section");
var light = document.getElementById("luci");

//La funzione check l'ho descritta sopra, l'unica differenza è che in questa versione del progetto è fuori da prenota() in quanto non sarà l'unica funzione ad utilizzarla.
function check(){
  var radios = document.getElementsByName("monopattino");
  for (var i = 0, len = radios.length; i < len; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  return false;
}

//Prima di tutto controllo se un monopattino è stato scelto, altrimenti non faccio niente e mando un messaggio a schermo. Se ho scelto un monopattino allora: tolgo da schermo il pulsante "prenota", tolgo anche i blocchi contenenti i monopattini non selezionati, imposto la variabile globale prenotato su true e mando il messaggio che la prenotazione è andata a buon fine.
function prenota() {
  if (check() == true){
    document.getElementById("prenota").style.display = "none";
    for (var i = 0, len = radios.length; i < len; i++) {
      if (radios[i].checked == false) {
        options[i].style.display = "none";
      }
    }
    prenotato = true;
    window.alert("MONOPATTINO PRENOTATO!");
  } else {
     window.alert("SELEZIONA ALMENO UN MONOPATTINO!");
  }
}

//Prima di tutto controllo se un monopattino è stato prenotato in precedenza, altrimenti non faccio niente e mando un messaggio a schermo. Se ho un monopattino allora: faccio tornare a schermo tutti i monopattini disponibili e resetto gli input radio, faccio tornare a schermo il pulsante "Prenota", imposto la variabile globale prenotato su false, spengo la luce del monopattino e mando il messaggio di fine noleggio.
function termina() {
  if (prenotato == true){
    for (var i = 0, len = radios.length; i < len; i++) {
      options[i].style.display = "block";
      radios[i].checked = false;
    }
    document.getElementById("prenota").style.display = "inline";
    prenotato = false;
    light.value = "Accendi Luci";
    window.alert("NOLEGGIO TERMINATO!");
  } else {window.alert("NON HAI MONOPATTINI PRENOTATI!");}
}

//Prima di tutto controllo se un monopattino è stato prenotato in precedenza, altrimenti non faccio niente e mando un messaggio a schermo. Se ho un monopattino allora controllo il valore del pulsante: se è "spegni luci" lo trasformo in "accendi luci" e mando il messaggio a schermo "luci spente", altrimenti faccio l'operazione inversa.
function luci() {
  if (prenotato == true){
   if (light.value == "Spegni Luci"){
     light.value = "Accendi Luci";
     window.alert("LUCI SPENTE!");
   }else{
     light.value = "Spegni Luci";
     window.alert("LUCI ACCESE!");
   }
 } else {window.alert("NON HAI MONOPATTINI PRENOTATI!");}
}
