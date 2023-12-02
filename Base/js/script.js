
function numberCasualGenerate (){
  return Math.floor(Math.random() * 100) + 1
}

function bombGenerator (){
j=1;
while (j<=16){
  let numeroCasuale = numberCasualGenerate();
  if(!ArrayCasuale.includes(numeroCasuale)){
    ArrayCasuale.push(numeroCasuale);
    j++;
  }
}}


let ArrayCasuale = []

bombGenerator()
console.log(ArrayCasuale)


let buttonStart = document.getElementById('button_start');

 let containerPadre = document.getElementById('container_padre');  
 let point = 0
 let string_point = document.getElementById('punteggio');


 string_point.innerHTML = "Il tuo punteggio è di " + point + " Punti"


buttonStart.addEventListener("click", function(){
  containerPadre.innerHTML = " "
    for(i=1; i<100; i++){
    let nuovoQuadrato = document.createElement("button")
    nuovoQuadrato.classList.add("casella");
    containerPadre.appendChild(nuovoQuadrato);
    nuovoQuadrato.textContent = (i);
    console.log(nuovoQuadrato)

    nuovoQuadrato.addEventListener("click", function(){
      let numberclick = parseInt(nuovoQuadrato.textContent)
      console.log(numberclick)
      if(ArrayCasuale.includes(numberclick)){
      nuovoQuadrato.classList.add("bg-danger");
      string_point.innerHTML = "Hai perso! Il tuo punteggio totale è di " + point + " Punti";

      }else{
        nuovoQuadrato.classList.add("bg-primary")
        point++
        string_point.innerHTML = "Il tuo punteggio è di " + point + " Punti"
      }
      })
      

   
      
    }})

  
  