const meta = document.getElementById("meta")
const dificuldade= document.getElementById("dificuldade")
const tempoN = document.getElementById("tempoN")
const tempoM = document.getElementById("tempoM")
const pontuation = document.getElementById("pontuation")

function calculate(){
    if(meta.value!=""&&dificuldade.value!=""){
        const calculo = (60/((meta.value/dificuldade.value)/10))/100 
        tempoN.value = (5/100)*calculo + "segundos"
        tempoM.value = calculo + " segundos"
        pontuation.value = meta.value * dificuldade.value + " pontos"
    }
    if(dificuldade.value>5){
        dificuldade.value=5
        calculate()
    }
}