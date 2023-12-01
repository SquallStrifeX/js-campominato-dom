
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


buttonStart.addEventListener("click", function(){
  containerPadre.innerHTML = " "
    for(i=1; i<100; i++){
    nuovoQuadrato = document.createElement("div")
    nuovoQuadrato.classList.add("casella");
    containerPadre.appendChild(nuovoQuadrato);
    nuovoQuadrato.textContent = (i);
    console.log(nuovoQuadrato)

     
   
      
    }})

    nuovoQuadrato.addEventListener("click", function(){
      nuovoQuadrato.classList.add("bg-primary")
      })
  