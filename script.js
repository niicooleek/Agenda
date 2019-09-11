var contactos = [
  { nombre: "Macarena Poo García", 
    empresa: "Retail Zipline", 
    email: "macarenapoo@gmail.com", 
    telefono: "5556801216" },
  { nombre: "Juan Fernando Donoso", 
    empresa: "Universidad Iberoamericana", 
    email: "juan.donoso@uia.mx", 
    telefono: "5555555555" }
];


function mostrarForm(){
    document.getElementById("modal").classList.toggle("forma");
}

function añadirArreglo(){
  var nombre = document.getElementById("nombre").value;
  var empresa = document.getElementById("empresa").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  contactos.push({ 'nombre': nombre, 'empresa': empresa, 'email': email, 'telefono': telefono});

}

//function añadir
