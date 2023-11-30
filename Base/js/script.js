
let buttonStart = document.getElementById('button_start');

buttonStart.addEventListener("click", function(){
 containerPadre.innerHTML = " "
 let input_difficulty = document.getElementById('difficolta');
 let difficulty = parseInt(input_difficulty.value);
 console.log(difficulty)


    switch (difficulty){
      case 1:
        containerPadre.innerHTML = " "
        for(i=0; i<100; i++){
          creazioneDiUnQuadrato();
            }
            break
      case 2:
        containerPadre.innerHTML = " "
        for(i=0; i<81; i++){
          creazioneDiUnQuadrato();
            }
            containerPadre.classList.add("container_81")

            break
      case 3:
         containerPadre.innerHTML = " "
         for(i=0; i<49; i++){
           creazioneDiUnQuadrato();
            }
            containerPadre.classList.add("container_49")
             break     

    }
    
   
})

let containerPadre = document.getElementById('container_padre')

  function creazioneDiUnQuadrato () {
    let nuovoQuadrato = document.createElement("div");
    nuovoQuadrato.classList.add("casella");
    containerPadre.appendChild(nuovoQuadrato);
    nuovoQuadrato.textContent = (i+1);
    nuovoQuadrato.addEventListener("click", function onClick(event){
    nuovoQuadrato.classList.toggle("bg-warning");
    console.log(nuovoQuadrato.textContent)

    })
}