const seccionProductos=document.querySelectorAll(".card");



const lista=document.createElement("ul");
 
seccionProductos.appendChild(lista)
 

let arregloDeProductos:string[]=new Array(2);

arregloDeProductos.forEach(item =>{
const items=document.createElement("li");

items.textContent=item;
lista.appendChild(items);
})