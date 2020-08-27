let definicion = document.querySelectorAll(".definicion");

function mostrarScroll(){
     let scrollTop = 
     document.documentElement.scrollTop;
     for (var i=0; i < definicion.length; i++ ) {
         let alturaAnimado = definicion[i].offsetTop;
        if(alturaAnimado -300 < scrollTop) {
            definicion[i].style.opacity = 1;
            definicion[i]. classList.add("mostrarArriba");
        }
     }
}

window.addEventListener('scroll', mostrarScroll);