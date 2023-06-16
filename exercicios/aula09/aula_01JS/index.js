/*
Função Básica em JS:

function comer (comida, vezes){
    for(let i = 0; i < vezes; i++){
        console.log(comida);
    }
}

Arrow Fuction:

let f_comer = (comida, vezes) => {
    for(let i = 0; i < vezes; i++){
        console.log(comida);
    }
}

let gato ={

    comida_favorita: "Carne de Peixe",
    comer: function (){
        for(let i = 0; i < 5; i++){
            console.log(this.comida_favorita);
        }
    },
}

gato.comer();

let f_somar = (a, b)=>{
    return a +b;
}

console.log(f_somar(5,10));

*/

let escolha = confirm("Deseja ir ao Mar?");

if(escolha){
    
    let mar = document.querySelector(".mar").getAttribute("class");
    let praia =  document.querySelector(".praia").getAttribute("class");

    document.querySelector(".mar").setAttribute("class", mar + " visivel");    
    document.querySelector(".praia").setAttribute("class", praia + " invisivel");  

}else{
    console.log("Você continua na praia")
};
/*

Alterar imagem com setAtribute:

if(escolha){
    
    document.querySelector(".mar").setAttribute("class", "visivel");
    document.querySelector(".praia").setAttribute("class", "invisivel");
    

}else{
    console.log("Você continua na praia")
};


Alterar IMG utilizando querySelector().style:

if(escolha){

    document.querySelector(".praia").style.display="none";
    document.querySelector(".mar").style.display="inline-block";
    

}else{
    console.log("Você continua na praia")
};
*/