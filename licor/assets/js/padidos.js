var cards = document.querySelectorAll('.carta');

// Agregamos un evento de clic a cada elemento
cards.forEach(function (element) {
    element.addEventListener('click', function () {
        // Abrimos el modal con id "hola"
        var nombre_bebida = document.getElementById("nombre_bebida");
        var datos = document.getElementById("datos");
        var precio = document.getElementById("precio");
        var img_bebida = document.getElementById("img_bebida");
        var stars_e = document.getElementById("stars");

        // Seleccionamos los elementos dentro de la carta clickeada
        var nombre_trago = element.querySelector(".nombre_trago");
        var info_trago = element.querySelectorAll(".info_trago li");
        var precio_trago = element.querySelector(".precio_trago");
        var Img_bebida = element.querySelector(".Img_bebida");
        var stars = element.querySelectorAll(".stars i");  // Aquí usamos querySelectorAll

        document.getElementById('carrito').style.display = 'block';

        nombre_bebida.textContent = nombre_trago.textContent;
        datos.innerHTML = '';
        stars_e.innerHTML = '';
        img_bebida.src = Img_bebida.src;

        // Asegúrate de agregar cada estrella
        stars.forEach(function (is){
            var newI = document.createElement("i");
            is.classList.forEach(function (className) {
                newI.classList.add(className);  // Aquí agregamos todas las clases
            });
            stars_e.appendChild(newI);
        });

        // Agregamos cada elemento <li> al modal
        info_trago.forEach(function (li) {
            var newLi = document.createElement('li');
            newLi.textContent = li.textContent;
            datos.appendChild(newLi);
        });

        precio.textContent = precio_trago.textContent;
    });
});


document.getElementById("comprar").addEventListener("click", function(event) {
    event.preventDefault();
    
    var nombre_bebida = document.getElementById("nombre_bebida").textContent;
    var datosElementos = document.querySelectorAll("#datos li");
    var datos = Array.from(datosElementos).map(li => `- _${li.textContent}_`).join("\n");
    var precio = document.getElementById("precio").textContent;
    var numeroWhatsApp = "916860297";
    // L> ⓘ #Este usuario fue suspendido temporalmente de WhatsApp por participar en grupos criminales asociados con la mafia Mexicana. Este WhatsApp está siendo investigado por la Policia_
    var texto = `*╠══ ${nombre_bebida} ══╣*\n\n*Datos:*\n${datos}\n╔═════╗\n║ *${precio}*  ║\n╚═════╝\n\n\n https://daddy-liquors.netlify.app/`;
    var mensaje = encodeURIComponent(texto);
    var enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    
    window.open(enlaceWhatsApp, "_blank");
});
