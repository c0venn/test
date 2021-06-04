var Arraynumeros = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", 'Q', 'K'];

var Arraysimbolos = ["&#x2665", "\u2660", '&#x2663', '&#x2666'];
nuevonum = [];
nuevosim = [];

var cantidadcartas = document.getElementById("texto");
var mostrar = document.getElementById("btn3");
var cards = document.getElementById("cards");

mostrar.addEventListener("click", () => {

    cantidadcartas = cantidadcartas.value;
   
ArrayTotal=[];
ArrayTotal2=[];
    for (let i = 0; i < cantidadcartas; i++) {
         
        var numeros = Math.floor(Math.random() * (13));
           
        nuevonum[i] = numeros;
        
        var simbolos = Math.floor(Math.random() * (4));
        nuevosim[i] = simbolos;

        let padre = document.createElement("div");
        let arriba = document.createElement("div");
        let medio = document.createElement("div");
        let abajo = document.createElement("div");

        if (Arraysimbolos[simbolos] == Arraysimbolos[0] || Arraysimbolos[simbolos] == Arraysimbolos[3]) {
            arriba.style.color = 'red';
            abajo.style.color = 'red';
        }

        arriba.innerHTML = Arraysimbolos[simbolos];
        medio.innerHTML = Arraynumeros[numeros];
        abajo.innerHTML = Arraysimbolos[simbolos];
       
        padre.classList.add("creado");
        arriba.classList.add("div1");
        medio.classList.add("div2");
        abajo.classList.add("div3");

        padre.appendChild(arriba);
        padre.appendChild(medio);
        padre.appendChild(abajo);
        cards.appendChild(padre);
    }
    const selectSort = () => {
        let min = 0;
        while (min < nuevonum.length - 1) {
            for (let m = min + 1; m < nuevonum.length; m++) {
                if (nuevonum[min] > nuevonum[m]) {
                    let aux = nuevonum[min];

                    let aux2=nuevosim[min];

                    nuevonum[min] = nuevonum[m];
                    nuevosim[min]=nuevosim[m];
                    nuevosim[m]=aux2;
                    nuevonum[m] = aux;             
                }
            }
         min++;   
        }

        for (h = 0; h < nuevonum.length; h++) {
            let padre = document.createElement("div");
            let arriba = document.createElement("div");
            let medio = document.createElement("div");
            let abajo = document.createElement("div");



            if (Arraysimbolos[nuevosim[h]] == Arraysimbolos[0] || Arraysimbolos[nuevosim[h]] == Arraysimbolos[3]) {
                arriba.style.color = 'red';
                abajo.style.color = 'red';
            }

            arriba.innerHTML = Arraysimbolos[nuevosim[h]];
            medio.innerHTML = Arraynumeros[nuevonum[h]];
            abajo.innerHTML = Arraysimbolos[nuevosim[h]];
                     
            padre.classList.add("creado");
            arriba.classList.add("div1");
            medio.classList.add("div2");
            abajo.classList.add("div3");


            padre.appendChild(arriba);
            padre.appendChild(medio);
            padre.appendChild(abajo);

            cards3.appendChild(padre);

        }

    };

    let btn2 = document.querySelector('#btn2');
    btn2.addEventListener('click', selectSort);
});