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

function añadirContacto(contacto, index){
  var lista = document.getElementById("contactos");
  lista.innerHTML = "";
    lista.insertAdjacentHTML('beforeend',
    `<li class="contacto">
    <div class="actions">
      <a><i  class="fa fa-trash" onclick="eliminarContacto(` + index + `)"></i></a>
    </div>
    <i class="userIcon fa fa-user"></i>
    <h4 class="nombre">` + contacto.nombre + `</h4>
    <div class="datos">
      <div class="dato">
        <i class="fa fa-building"></i>
        <span>` + contacto.empresa + `</span>
      </div>
      <div class="dato">
        <i class="fa fa-envelope"></i>
        <a>` + contacto.email + `</a>
      </div>
      <div class="dato">
        <i class="fa fa-phone"></i>
        <a>` + contacto.telefono + `</a>
      </div>
    </div>
  </li>`
    );
   imprimirContactos();
}

function eliminarContacto(index){
  contactos.splice(index, 1);
  imprimirContactos();
}

function imprimirContactos(){
  contactos.forEach(añadirContacto);
}

imprimirContactos();