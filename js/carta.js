const baseURL   = "https://yznmxccjhpfqrqrttdqf.supabase.co";
const apiCallMsyc   = '/rest/v1/menusyc'
const apiCallEmpa   = '/rest/v1/menuEmpa'
const apiCallPlatos   = '/rest/v1/Platos'

const apiKey    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6bm14Y2NqaHBmcXJxcnR0ZHFmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NDU5NjkyOSwiZXhwIjoxOTYwMTcyOTI5fQ.uGw73zmCWanln_lWnXiQI18o3H_ErFAe3xChid3JNno'
const urlMsyc       = baseURL + apiCallMsyc
const urlEmpa       = baseURL + apiCallEmpa
const urlPlatos       = baseURL + apiCallPlatos



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
                         </tr>
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
 
  