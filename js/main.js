const hamburguer = document.querySelector(".hamburguer");
const btn = document.querySelector(".btn");

hamburguer.addEventListener("mousemove", function(e){
    const position = hamburguer.getBoundingClientRect(); //devuelve el tamaño del elemento y la posicion según el viewport
    const x = e.pageX - position.left - position.width / 2; //saca un estimado de la posición del mouse en X
    const y = e.pageY - position.top - position.height / 2; //saca un estimado de la posición del mouse en Y

    btn.style.transform = "scale(1.3)" + "translate(" + x * 0.3 + "px, "+ y * 0.5 + "px)";//Le agrego el movimiento y un scale para que se agrande un poco el boton
})

hamburguer.addEventListener("mouseout", function(e){
    btn.style.transform = "translate(0px, 0px)"; //cuando el mouse sale del area del botón, la posición vuelve a su lugar original
})

/*
Modificando los valores podes centrar más el elemento porque si te alejas mucho del botón el mouse se separa del botón,
también otra solución es hacer crecer más el botón con un scale para que cubra más o hacer más chiquita el area donde
se detecta el mouse
*/