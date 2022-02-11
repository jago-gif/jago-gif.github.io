
// inicia el mapa
function initMap() {
    // agrega las coordenadas 
    const uluru = { lat: -38.24548261876771, lng: -72.66479063103117 };
    // rescatar el mapa y agrega del zoom 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });
    // crea el mapa
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  };
//Validador de nombre
document.getElementById("nombre").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtNombre = input.value;

  // let o const - formas recomendadas de variables o constantes
  const feedbackNombre = document.getElementById("feedback-nombre");

  if( txtNombre.length < 3 ) {        
      feedbackNombre.innerHTML = "El nombre es muy corto.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackNombre.className = "invalid-feedback";
  } else {        
      feedbackNombre.innerHTML = "El nombre es consistennte";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackNombre.className = "valid-feedback";
  }
});  
//Validador de Apellido
document.getElementById("fapellido").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtApellido = input.value;

  // let o const - formas recomendadas de variables o constantes
  const feedbackApellido = document.getElementById("feedback-apellido");

  if( txtApellido.length < 3 ) {        
      feedbackApellido.innerHTML = "El nombre es muy corto.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackApellido.className = "invalid-feedback";
  } else {        
      feedbackApellido.innerHTML = "El nombre es consistennte";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackApellido.className = "valid-feedback";
  }
});  
//Validador de Email
document.getElementById("email").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtEmail = input.value;

  const feedbackEmail = document.getElementById("feedbackEmail");
  //arreglo para correo Electronico [elementos] \ separador (+ para poner otro elemento)  
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(!expr.test(txtEmail) ){        
      feedbackEmail.innerHTML = "Correo Electrónico no valido.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackEmail.className = "invalid-feedback";
  } else {        
      feedbackEmail.innerHTML = "Correo Electrónico valido";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackEmail.className = "valid-feedback";
  }
});  

//Validador de telefono
document.getElementById("fono").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtFono = input.value;

  const feedbackFono = document.getElementById("feedback-fono");

  expr =  /^[0-9]+$/
  if(!expr.test(txtFono) ){  
    feedbackFono.innerHTML = "Solo debe contener numeros.";
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    feedbackFono.className = "invalid-feedback";      
  }
  else{
    if( txtFono.length != 9) {        
      feedbackFono.innerHTML = "El numero debe tener solo 9 digitos.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackFono.className = "invalid-feedback";
  } else {        
      feedbackFono.innerHTML = "Numero Aceptado";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackFono.className = "valid-feedback";
  }
  }
});  
document.getElementById("mensaje").addEventListener("blur", (evento) => {
  const input = evento.currentTarget;
  const txtmsj = input.value;

  const feedbackmsj = document.getElementById("feedback-msj");

  if( txtmsj.length < 10 ) {        
      feedbackmsj.innerHTML = "Su mensaje debe contener al menos 10 caracteres.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackmsj.className = "invalid-feedback";
  } else {        
      feedbackmsj.innerHTML = "El nombre es consistennte";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackmsj.className = "valid-feedback";
  }
});  


function registrar(event){    
  // evito que el formulario haga un submit normal
  // para manejarlo dentro de la función
  event.preventDefault();
  alert("su formulario fue enviado");
  


  const boton = document.getElementById("boton").disabled = true;

  // recuperar datos del formulario
  
  const nombre = document.getElementById("nombre").value
  const apellido = document.getElementById("fapellido").value
  const email = document.getElementById("email").value
  const fono = document.getElementById("fono").value
  const mensaje = document.getElementById("mensaje").value

  
  

      //envio de datos por API REST
      const baseURL   = "https://yznmxccjhpfqrqrttdqf.supabase.co";
      const apiCall   = '/rest/v1/felicitaciones'
      const apiKey    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6bm14Y2NqaHBmcXJxcnR0ZHFmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NDU5NjkyOSwiZXhwIjoxOTYwMTcyOTI5fQ.uGw73zmCWanln_lWnXiQI18o3H_ErFAe3xChid3JNno'
      const url       = baseURL + apiCall
      const paciente  = {
          nombre,
          apellido,
          email,      
          fono,         
          mensaje,            
               
          
      } 
  
      fetch(url, {
          method: 'POST',
          headers: {
              "Content-Type": "application/json",
              "apikey": apiKey,
              "authorization": "Bearer "+apiKey
          },
          body: JSON.stringify(paciente)
      })
}

document.getElementById("formulario-contacto")
  .addEventListener("submit", registrar);
  



 

