const baseURL   = "https://yznmxccjhpfqrqrttdqf.supabase.co";
const apiCallMsyc   = '/rest/v1/menusyc'
const apiCallEmpa   = '/rest/v1/menuEmpa'
const apiCallPlatos   = '/rest/v1/Platos'
const apiCallBbstbs   = '/rest/v1/Bebestibles'
const apiCallPostres   = '/rest/v1/Postres'


const apiKey    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6bm14Y2NqaHBmcXJxcnR0ZHFmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NDU5NjkyOSwiZXhwIjoxOTYwMTcyOTI5fQ.uGw73zmCWanln_lWnXiQI18o3H_ErFAe3xChid3JNno'
const urlMsyc       = baseURL + apiCallMsyc
const urlEmpa       = baseURL + apiCallEmpa
const urlPlatos       = baseURL + apiCallPlatos
const urlBbstbs       = baseURL + apiCallBbstbs
const urlPostres       = baseURL + apiCallPostres





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
    MenuPostres.forEach((Bebestibles) => {
    resultadosPostres += ` 
                         <tr>
                             <td>${Bebestibles.Nombre}</td>
                             <td>${Bebestibles.contenido}</td>
                             <td>${Bebestibles.precio}</td>
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