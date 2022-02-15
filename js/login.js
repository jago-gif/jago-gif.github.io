var SUPABASE_URL = "https://hwwyuypdcxdigyfznqcw.supabase.co";
var SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzODM4OTEyLCJleHAiOjE5NTk0MTQ5MTJ9.tNykPvbzGeUsS7UoP2mNJNBjKUG6R76HPcNtLT1TjBc";

var supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// el evento DOMContentLoaded nos asegura que nuestro código
// se va a ejecutar cuando todo el HTML ya haya sido cargado
window.addEventListener("DOMContentLoaded", (eventoLoaded) => {
  document.querySelector("form").addEventListener("submit", (eventoSubmit) => {
    eventoSubmit.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const emailValido = emailEsValido(email);
    const passwordValida = passwordEsValida(password);
    const logInSupabase = (event) => {
      event.preventDefault();
      const email = event.target[0].value;
      const password = event.target[1].value;

      supabase.auth
        .signIn({ email, password })
        .then((response) => {
          response.error ? alert(response.error.message) : setToken(response);
        })
        .catch((err) => {
          alert(err.response.text);
        });
    };
    function setToken(response) {
      if (
        response.user.confirmation_sent_at &&
        !response?.session?.access_token
      ) {
        return false;
      } else {
        return true;
      }
    }
    if (emailValido && passwordValida && logInSupabase) {
      redirigirAPaginaPrincipal();
    } else {
      mostrarMensajesError();
    }
    return false;
  });
});

function redirigirAPaginaPrincipal() {
  window.location = "/privado/dashboard.html";
}

function mostrarMensajesError() {
  // <div class="alert alert-danger" role="alert">Lorem</div>
  const divAlerta = document.createElement("div");
  divAlerta.className = "alert alert-danger";
  divAlerta.setAttribute("role", "alert");
  const mensaje = document.createTextNode(
    "Por favor revise que su email o contraseña sean correctos."
  );
  divAlerta.appendChild(mensaje);
  document.querySelector("#mensajes").appendChild(divAlerta);
}

function emailEsValido(email) {
  const emailRegexp = new RegExp(
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i
  );
  return emailRegexp.test(email);
}

function passwordEsValida(password) {
  if (password.length >= 3) {
    return true;
  } else {
    return false;
  }
}
