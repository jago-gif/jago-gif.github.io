const { createClient } = supabase;
const baseURL = "https://hwwyuypdcxdigyfznqcw.supabase.co";
const apiCall = "/rest/v1/usuarios";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzODM4OTEyLCJleHAiOjE5NTk0MTQ5MTJ9.tNykPvbzGeUsS7UoP2mNJNBjKUG6R76HPcNtLT1TjBc";
const url = baseURL + apiCall;

//variable contenedor
var usuarios = "";
var clave = "";
const mostrarusuarios = (registros) => {
  registros.forEach((registro) => {
    usuarios += ` 
                            ${registro.usuario}
                        `;
    clave += ` 
                            ${registro.password}
                        `;
  });
usuarios.innerHTML= usuarios
clave.innerHTML= clave
};


  fetch(url, {
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
      mostrarusuarios(data);
      return data;
    })
    .catch((error) => {
      console.dir(error);
      return error;
    });

function login(){
    let user,pass;
    user = document.getElementById("usuario").value
    pass = document.getElementById("password").value
    if(user== "admin" && pass == "admin" ){
        window.location= "fichas.html";
    }
    else{
        //alerta de error
       alert("Usuario = admin \n contraseña = admin  \n sorry no pude sacarlo desde la base de datos")
       //borrar informacion de los input
       document.getElementById("usuario").value = "";
       document.getElementById("password").value = "";
    }
}