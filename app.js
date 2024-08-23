
function escribirFrase(clase1, clase2, texto) {
    let elementoHTML1 = document.querySelector('.' + clase1);
    let elementoHTML2 = document.querySelector('.' + clase2);
    elementoHTML1.innerHTML = texto;
    elementoHTML2.innerHTML = "";
    return;
}


function encriptarTexto(){
    let fraseEscrita = document.getElementById("texto").value;
    let fraseEncriptada = "";
    for (let i = 0; i < fraseEscrita.length; i++){
        let letra = fraseEscrita[i];
        if (letra === 'a'){
            // a = ai
            fraseEncriptada += "ai";
        }
        else if (letra === 'e'){
            // e = enter
            fraseEncriptada += "enter";
        }
        else if (letra === 'i'){
            // i = imes
            fraseEncriptada += "imes";
        }
        else if (letra === 'o'){
            // o = ober
            fraseEncriptada += "ober";
        }
        else if (letra === 'u'){
            // u = ufat
            fraseEncriptada += "ufat";
        }
        else{
            fraseEncriptada += letra;
        }
    }

    let imagenMuñeco = document.querySelector(".contenido__seccionDerecha__muñeco");
    if (imagenMuñeco) {
        imagenMuñeco.style.display = "none";
    }

    escribirFrase('contenido__seccionDerecha__aviso1', "contenido__seccionDerecha__aviso2",  fraseEncriptada);

    let secDerecha = document.querySelector('.contenido__seccionDerecha');
    let botonCopiar = document.querySelector(".contenido__seccionDerecha__copiar");
    botonCopiar.style.display = "block";

    if (window.innerWidth > 1200){
        secDerecha.style.minWidth = "20%";
        secDerecha.style.maxWidth = "45%";
    }

    return;
}

function desencriptarTexto() {
    let fraseEncriptada = document.getElementById("texto").value;
    let fraseDesencriptada = "";

    fraseDesencriptada = fraseEncriptada
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    let imagenMuñeco = document.querySelector(".contenido__seccionDerecha__muñeco");
    if (imagenMuñeco) {
        imagenMuñeco.style.display = "none";
    }
    escribirFrase('contenido__seccionDerecha__aviso1', "contenido__seccionDerecha__aviso2", fraseDesencriptada);
    
    let secDerecha = document.querySelector('.contenido__seccionDerecha');
    let botonCopiar = document.querySelector(".contenido__seccionDerecha__copiar");
    botonCopiar.style.display = "block";

    if (window.innerWidth > 1200){
        secDerecha.style.minWidth = "20%";
        secDerecha.style.maxWidth = "45%";
    }

    return;
}

function copiarTexto(){
    let fraseModificada = document.querySelector('.contenido__seccionDerecha__aviso1').textContent;

    navigator.clipboard.writeText(fraseModificada).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });

    return;
}