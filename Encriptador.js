const d = document;
const texArea = d.querySelector(".form__input");
const imagenMuneco = d.querySelector(".resultado__img");
const resultadoTitulo =d.querySelector(".resultado__titulo");
const resultadoText =d.querySelector(".resultado__texto");
const loaderBarra =d.querySelector(".loader");
const botonEncriptar =d.querySelector(".form__btn");
const botonDesencriptar =d.querySelectorAll(".form__btn");
const botonCopiar =d.querySelector(".resul__btn");
const llaves=[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufa"],
];
// funcion para encriptar
function encriptamensaje(mensaje){
    let mensajeEncriptado ="";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j=0; j < llaves.length; j++){
            if (letra === llaves[j][0]){
                encriptada = llaves[j][1]; 
                // Remplaza la letra por su equivalente encriptado
                break; 
                 // termina el bucle cuendo se encuentra la correspondencia
            }
            }
            mensajeEncriptado += encriptada;
        } 
         return mensajeEncriptado;
        
    }
    //funcion para desencriptar
    function desencriptarMensaje(mensaje){
        let mensajeDesencriptado = mensaje;
        for(let i = 0; i < llaves.length; i++){
            let regex = new RegExp(llaves[i][1],'g');
            mensajeDesencriptado = mensajeDesencriptado.replace(regex,llaves[i][0]);
        }
        return mensajeDesencriptado;
    }
    //ocultar elementos dinamicamente
    texArea.addEventListener("input", (e)=>{
        imagenMuneco.style.display = "none";
        resultadoTitulo.textContent = "Capturando Mensaje";
        loaderBarra.classList.remove("hidden");
        resultadoText.textContent = "";


    } );
    //funcion del boton encriptar
    botonEncriptar.addEventListener("click",(e)=>{
        e.preventDefault();
        let mensaje = texArea.value.toLowerCase();
        let mensajeEncriptado = encriptamensaje(mensaje);
        resultadoText.textContent = mensajeEncriptado;
        botonCopiar.classList.remove("hidden");
        resultadoTitulo.textContent = "El resultado es:";
    });
    // funcion del boton desencriptar

    botonDesencriptar[1].addEventListener("click",(e)=>{
        e.preventDefault();
        let mensaje = texArea.value.toLowerCase();
        let mensajeDesencriptado = desencriptarMensaje(mensaje);
        resultadoText.textContent = mensajeDesencriptado;
        resultadoTitulo.textContent = "El resultado es:";
        botonCopiar.classList.remove("hidden");
        
    }


    );
    botonCopiar.addEventListener("click",()=>{
        let copiarTexto = resultadoText.textContent;
        navigator.clipboard.writeText(copiarTexto).then(()=>{
        imagenMuneco.style.display = "block";
        loaderBarra.classList.add("hidden");
        resultadoTitulo.textContent = "El texto se copio";
        botonCopiar.classList.add("hidden");
        resultadoText.textContent = " ";
        


        })
    }
    )
