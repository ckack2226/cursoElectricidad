/* =========================================================
   USUARIOS VÁLIDOS
========================================================= */
const USUARIOS = {
  juan:   "1234",
  camilo: "4321",
  jose:   "4567",
  maria:  "7890"
};

/* =========================================================
   Si ya hay sesión activa, saltar directo al curso
========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  const sesion = localStorage.getItem("sesion_activa");
  if (sesion && USUARIOS[sesion]) {
    window.location.href = "curso.html";
  }
});

/* =========================================================
   LOGIN
========================================================= */
const formLogin = document.getElementById("form-login");
const loginError = document.getElementById("login-error");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const usuario = document.getElementById("input-usuario").value.trim().toLowerCase();
  const clave = document.getElementById("input-clave").value.trim();

  if (USUARIOS[usuario] && USUARIOS[usuario] === clave) {
    loginError.hidden = true;
    localStorage.setItem("sesion_activa", usuario);
    window.location.href = "curso.html";
  } else {
    loginError.hidden = false;
  }
});
