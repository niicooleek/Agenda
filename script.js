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
  var nombre = document.getElementById("nombre");
  var empresa = document.getElementById("empresa");
  var email = document.getElementById("email");
  var telefono = document.getElementById("telefono");
  contactos.push({ 'nombre': nombre.value, 'empresa': empresa.value, 'email': email.value, 'telefono': telefono.value});

}
