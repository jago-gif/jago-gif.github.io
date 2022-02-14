var SUPABASE_URL = "https://hwwyuypdcxdigyfznqcw.supabase.co";
var SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzODM4OTEyLCJleHAiOjE5NTk0MTQ5MTJ9.tNykPvbzGeUsS7UoP2mNJNBjKUG6R76HPcNtLT1TjBc";

var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.userToken = null;

const baseURL = "https://yznmxccjhpfqrqrttdqf.supabase.co";
const apiCallMsyc = "/rest/v1/menusyc";
const apiCallEmpa = "/rest/v1/menuEmpa";
const apiCallPlatos = "/rest/v1/Platos";
const apiCallBbstbs = "/rest/v1/Bebestibles";
const apiCallPostres = "/rest/v1/Postres";

const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6bm14Y2NqaHBmcXJxcnR0ZHFmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NDU5NjkyOSwiZXhwIjoxOTYwMTcyOTI5fQ.uGw73zmCWanln_lWnXiQI18o3H_ErFAe3xChid3JNno";
const urlMsyc = baseURL + apiCallMsyc;
const urlEmpa = baseURL + apiCallEmpa;
const urlPlatos = baseURL + apiCallPlatos;
const urlBbstbs = baseURL + apiCallBbstbs;
const urlPostres = baseURL + apiCallPostres;


//crear cuenta de usuarios

document.addEventListener("DOMContentLoaded", function (event) {
  let signUpForm = document.querySelector("#sign-up");
  signUpForm.onsubmit = signUpSubmitted.bind(signUpForm);
});
const signUpSubmitted = (event) => {
  event.preventDefault();
  const email = event.target[0].value;
  const password = event.target[1].value;

  supabase.auth
    .signUp({ email, password })
    .then((response) => {
      response.error ? alert(response.error.message) : setToken(response);
    })
    .catch((err) => {
      alert(err);
    });
};
function setToken(response) {
  if (response.user.confirmation_sent_at && !response?.session?.access_token) {
    alert("Correo de Confirmación Enviado");
  } else {
  }
}

//forms de menu

//mostrar menu Sandwiches y Completos
const contenedorMsyc = document.querySelector("#Msyc");
let resultados = "";

const mostrarMSyC = (MenuSyC) => {
  MenuSyC.forEach((menusyc) => {
    resultados += ` 
                         <tr>
                             <td>${menusyc.Nombre}</td>
                             <td>${menusyc.contiene}</td>
                             <td>${menusyc.precio}</td>
                             <td> <a class="btnEditar btn btn-primary fa-solid fa-pen-to-square"></a></td>
                             <td><a class="btnbSyC btn btn-danger  fa-regular fa-trash-can"> </a></td>                         </tr>
                        `;
  });
  contenedorMsyc.innerHTML = resultados;
};

fetch(urlMsyc, {
  headers: {
    method: "GET",
    "Content-Type": "application/json",
    apikey: apiKey,
    authorization: "Bearer " + apiKey,
  },
})
  .then((response) => {
    console.dir(response);
    return response.json();
  })
  .then((data) => {
    console.dir(data);
    mostrarMSyC(data);
    return data;
  })
  .catch((error) => {
    console.dir(error);
    return error;
  });
//mostrar menu Empanadas
const contenedorempa = document.querySelector("#Empa");
let resultadosEmpa = "";

const mostrarEmpa = (MenuEmpa) => {
  MenuEmpa.forEach((menuEmpa) => {
    resultadosEmpa += ` 
                         <tr>
                             <td>${menuEmpa.Nombre}</td>
                             <td>${menuEmpa.contenido}</td>
                             <td>${menuEmpa.precio}</td>
                             <td> <a class="btnEditar btn btn-primary fa-solid fa-pen-to-square"></a></td>
                             <td><a class="btnbEmpa btn btn-danger fa-regular fa-trash-can"></a></td>

                         </tr>
                        `;
  });
  contenedorempa.innerHTML = resultadosEmpa;
};

fetch(urlEmpa, {
  headers: {
    method: "GET",
    "Content-Type": "application/json",
    apikey: apiKey,
    authorization: "Bearer " + apiKey,
  },
})
  .then((response) => {
    console.dir(response);
    return response.json();
  })
  .then((data) => {
    console.dir(data);
    mostrarEmpa(data);
    return data;
  })
  .catch((error) => {
    console.dir(error);
    return error;
  });

//mostrar menu Empanadas
const contenedorPlatos = document.querySelector("#Platos");
let resultadosPlatos = "";

const mostrarPlatos = (MenuPlatos) => {
  MenuPlatos.forEach((Platos) => {
    resultadosPlatos += ` 
                         <tr>
                             <td>${Platos.Nombre}</td>
                             <td>${Platos.contenido}</td>
                             <td>${Platos.precio}</td>
                             <td> <a class="btnEditar btn btn-primary fa-solid fa-pen-to-square"></a></td>
                             <td><a class="btnbPlatos btn btn-danger fa-regular fa-trash-can"></a></td>
                         </tr>
                        `;
  });
  contenedorPlatos.innerHTML = resultadosPlatos;
};

fetch(urlPlatos, {
  headers: {
    method: "GET",
    "Content-Type": "application/json",
    apikey: apiKey,
    authorization: "Bearer " + apiKey,
  },
})
  .then((response) => {
    console.dir(response);
    return response.json();
  })
  .then((data) => {
    console.dir(data);
    mostrarPlatos(data);
    return data;
  })
  .catch((error) => {
    console.dir(error);
    return error;
  });

//mostrar menu Bebestibles
const contenedorBbstbs = document.querySelector("#Bbstbs");
let resultadosBbstbs = "";

const mostrarBbstbs = (MenuBbstbs) => {
  MenuBbstbs.forEach((Bebestibles) => {
    resultadosBbstbs += ` 
                         <tr>
                             <td>${Bebestibles.Nombre}</td>
                             <td>${Bebestibles.contenido}</td>
                             <td>${Bebestibles.precio}</td>
                             <td> <a class="btnEditar btn btn-primary fa-solid fa-pen-to-square"></a></td>
                             <td><a class="btnbBbstbs btn btn-danger fa-regular fa-trash-can"></a></td>
                         </tr>
                        `;
  });
  contenedorBbstbs.innerHTML = resultadosBbstbs;
};

fetch(urlBbstbs, {
  headers: {
    method: "GET",
    "Content-Type": "application/json",
    apikey: apiKey,
    authorization: "Bearer " + apiKey,
  },
})
  .then((response) => {
    console.dir(response);
    return response.json();
  })
  .then((data) => {
    console.dir(data);
    mostrarBbstbs(data);
    return data;
  })
  .catch((error) => {
    console.dir(error);
    return error;
  });
//mostrar menu Postres
const contenedorPostres = document.querySelector("#Postres");
let resultadosPostres = "";

const mostrarPostres = (MenuPostres) => {
  MenuPostres.forEach((Postres) => {
    resultadosPostres += ` 
                         <tr>
                             <td>${Postres.Nombre}</td>
                             <td>${Postres.contenido}</td>
                             <td>${Postres.precio}</td>
                             <td> <a class="btnEditar btn btn-primary fa-solid fa-pen-to-square "></a></td>
                             <td><a class="btnbPostres btn btn-danger fa-regular fa-trash-can"></a></td>
                         </tr>
                        `;
  });
  contenedorPostres.innerHTML = resultadosPostres;
};

fetch(urlPostres, {
  headers: {
    method: "GET",
    "Content-Type": "application/json",
    apikey: apiKey,
    authorization: "Bearer " + apiKey,
  },
})
  .then((response) => {
    console.dir(response);
    return response.json();
  })
  .then((data) => {
    console.dir(data);
    mostrarPostres(data);
    return data;
  })
  .catch((error) => {
    console.dir(error);
    return error;
  });



  //seleccionar envento dentro del tg
  const on = (element, event, selector, handler ) =>{
    element.addEventListener(event, e => {
      if(e.target.closest(selector)){
        handler(e)
      }
    })
  }
  //btn eliminar en sandwich y completos
  //const syc = url+ubicacion+seleccion x nombre para eliminar 
  const syc = "https://yznmxccjhpfqrqrttdqf.supabase.co/rest/v1/menusyc?Nombre=eq.";
  on(document, 'click', ".btnbSyC", e =>{
    const fila = e.target.parentNode.parentNode
    const id= fila.firstElementChild.innerHTML
    alertify.confirm("This is a confirm dialog.",
    function(){
      alertify.success('Ok');
      fetch(syc+id,{
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "apikey": apiKey,
          "authorization": "Bearer "+apiKey
      },
      })  
    },
    function(){
      alertify.error('Cancel');
    });
  
  })
  //btn eliminar en Empanadas
  //const Empa = url+ubicacion+seleccion x nombre para eliminar
  const Empa = "https://yznmxccjhpfqrqrttdqf.supabase.co/rest/v1/menuEmpa?Nombre=eq.";
  on(document, 'click', ".btnbEmpa", e =>{
    const fila = e.target.parentNode.parentNode
    const id= fila.firstElementChild.innerHTML
    alertify.confirm("Esta seguro que desea eliminar.",
    function(){
      alertify.success('Ok');
      fetch(Empa+id,{
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "apikey": apiKey,
          "authorization": "Bearer "+apiKey     
      },
      })
  },
    function(){
      alertify.error('Cancel');
    });
  })
  //btn eliminar en Platos
  //const Platos = url+ubicacion+seleccion x nombre para eliminar
  const Platos = "https://yznmxccjhpfqrqrttdqf.supabase.co/rest/v1/Platos?Nombre=eq.";
  on(document, 'click', ".btnbPlatos", e =>{
    const fila = e.target.parentNode.parentNode
    const id= fila.firstElementChild.innerHTML
    alertify.confirm("Esta seguro que desea eliminar.",
    function(){
      alertify.success('Ok');
      fetch(Platos+id,{
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "apikey": apiKey,
          "authorization": "Bearer "+apiKey     
      },
      })
  },
    function(){
      alertify.error('Cancel');
    });
  })
    //btn eliminar en Bebestibles
  //const Bbstbs = url+ubicacion+seleccion x nombre para eliminar
  const Bbstbs = "https://yznmxccjhpfqrqrttdqf.supabase.co/rest/v1/Bebestibles?Nombre=eq.";
  on(document, 'click', ".btnbBbstbs", e =>{
    const fila = e.target.parentNode.parentNode
    const id= fila.firstElementChild.innerHTML
    alertify.confirm("Esta seguro que desea eliminar.",
    function(){
      alertify.success('Ok');
      fetch(Bbstbs+id,{
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "apikey": apiKey,
          "authorization": "Bearer "+apiKey      
      },
      })


  },
    function(){
      alertify.error('Cancel');
    });      fila.d-none

  })  
    //btn eliminar en Postres
  //const Postres = url+ubicacion+seleccion x nombre para eliminar
  const Postres = "https://yznmxccjhpfqrqrttdqf.supabase.co/rest/v1/Postres?Nombre=eq.";
  on(document, 'click', ".btnbPostres", e =>{
    const fila = e.target.parentNode.parentNode
    const id= fila.firstElementChild.innerHTML
    alertify.confirm("Esta seguro que desea eliminar.",
    function(){
      alertify.success('Ok');
      fetch(Postres+id,{
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "apikey": apiKey,
          "authorization": "Bearer "+apiKey     
      },
      })
  },
    function(){
      alertify.error('Cancelacion de borrado');
    });
  })  
