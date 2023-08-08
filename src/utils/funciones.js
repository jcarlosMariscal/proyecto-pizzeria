import Swal from "sweetalert2";
import axios from "axios";
import router from "@/router";

export function mostrarAlerta(title, icon, foco = "") {
  if (foco != "") {
    document.getElementById(foco).focus();
  }
  Swal.fire({
    title,
    icon,
    customClass: { confirmButton: "btn btn-primary", popup: "animated zoonIn" },
    buttonsStyling: false,
  });
}

export function confirmar(urlConSlash, id, title, text) {
  let url = urlConSlash + id;
  const swal = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-danger me-3",
      cancelButton: "btn btn-secondary",
    },
  });
  swal
    .fire({
      title,
      text,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: `<i class="fa-solid fa-check"></i> Sí, eliminar.`,
      cancelButtonText: `<i class="fa-solid fa-ban"></i> Cancelar.`,
    })
    .then((res) => {
      if (res.isConfirmed) {
        enviarSolicitud("DELETE", { id }, url, "Eliminado con éxito.");
      } else {
        mostrarAlerta("Operación cancelada", "info");
      }
    });
}
export function redirectCustomSelect(title, text, toCancel, toConfirm) {
  const swal = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success me-3",
      cancelButton: "btn btn-secondary",
    },
  });
  swal
    .fire({
      title,
      text,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: `<i class="fa-solid fa-check"></i> Sí, continuar..`,
      cancelButtonText: `<i class="fa-solid fa-ban"></i> En otro momento.`,
    })
    .then((res) => {
      if (res.isConfirmed) {
        router.push(toConfirm);
      } else {
        router.push(toCancel);
      }
    });
  return swal;
}
export function enviarSolicitud(method, parametros, url, mensaje, show = true) {
  return new Promise((resolve, reject) => {
    axios({ method, url, data: parametros })
      .then((res) => {
        console.log(res);
        let state = res.status;
        if (state === 200) {
          if (!show) return resolve(res);
          mostrarAlerta(mensaje, "success");
          resolve(res);
        } else {
          mostrarAlerta("No se pudo recuperar la respuesta", "error");
          reject(new Error("No se pudo recuperar la respuesta"));
        }
      })
      .catch((err) => {
        mostrarAlerta("Servidor no disponible", "error");
        reject(err);
      });
  });
}

export function alertaForm(title, icon, timer = 2000) {
  Swal.fire({
    position: "top-right",
    customClass: { popup: "animated zoonIn" },
    icon: icon,
    toast: true,
    text: title,
    showConfirmButton: false,
    timer: timer,
  });
}
