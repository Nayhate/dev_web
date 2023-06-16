let div_destino;
let input_origem;
let preview;

div_destino = document.querySelector("body>div:nth-child(1)");
input_origem = document.querySelector("#texto_button>input");
preview = document.querySelector("body>p");


function limpar_texto(){

    let lista_de_paragrafos = document.querySelectorAll("body>div:nth-child(1)>p");

    for(let i = 0; i < lista_de_paragrafos.length; i++){
        lista_de_paragrafos[i].remove();
    }
}

function alterar_preview(){

    preview.innerHTML = input_origem.value;

}

input_origem.addEventListener("input", alterar_preview);

let button_enviar = document.querySelector("#texto_button>button");
button_enviar.addEventListener("click", () => {

    let novo_paragrafo = document.createElement("p");
    div_destino.appendChild(novo_paragrafo);

    novo_paragrafo.style.color="green";
    novo_paragrafo.innerHTML = input_origem.value;

}
);

let corpo = document.querySelector("body");
let posX = 0;
let posY = 0;
corpo.addEventListener("mousemove", (infos) =>{

    posX = infos.clientX;
    posY = infos.clientY;
    
});

function nova(){
    preview.style.left = posX + "px";
    preview.style.top = posY + "px";
}

setInterval(nova, 200);