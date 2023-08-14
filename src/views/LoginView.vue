<template>
  <section class="forms">
    <!-- Signup Form -->
    <div class="form signup bg-content">
      <div class="form-content" v-if="!recoverPass">
        <div class="theme-text header-title">Iniciar sesión</div>
        <!-- <div class="method-login">
          <button
            type="button"
            class="method"
            :class="{ active: methodEmail }"
            @click.prevent="changeMethod('email')"
          >
            <i class="fa-regular fa-envelope"></i> Correo
          </button>
          <button
            type="button"
            class="method"
            :class="{ active: !methodEmail }"
            @click.prevent="changeMethod('phone')"
          >
            <i class="fa-solid fa-mobile-screen-button"></i> Teléfono
          </button>
        </div> -->
        <form action="#">
          <div class="field input-field" v-if="methodEmail">
            <input
              type="email"
              placeholder="ejemplo@gmail.com"
              class="input"
              v-model="email"
            />
          </div>
          <div class="field input-field" v-if="!methodEmail">
            <input
              type="text"
              placeholder="2342592122"
              class="input"
              v-model="phone"
            />
          </div>
          <div class="field input-field" v-if="methodEmail">
            <input
              type="password"
              placeholder="Escriba su contraseña"
              class="password"
              v-model="password"
            />
            <i class="fa-regular fa-eye-slash eye-icon" @click="eyeIcon"></i>
          </div>
          <div class="err-form" v-if="errForm" role="alert">
            {{ errMsg }}
          </div>
          <div class="form-link">
            <a href="#" class="forgot-pass" @click.prevent="resetPass"
              >¿Olvídaste tu contraseña?</a
            >
          </div>
          <div class="field button-field">
            <button type="submit" @click="loginUser">Iniciar sesión</button>
          </div>
        </form>
      </div>
      <div class="form-content" v-else>
        <div class="theme-text header-title">Recuperar contraseña</div>
        <p class="recovery-description">
          Escriba el correo con la cuál accede al panel, le envíaremos un enlace
          de recuperación.
        </p>
        <form action="#">
          <div class="field input-field">
            <input
              type="email"
              placeholder="ejemplo@gmail.com"
              class="input"
              v-model="resetEmail"
            />
          </div>
          <div class="form-link">
            <a href="#" class="forgot-pass" @click.prevent="backLogin"
              >Regresar a Inicio de Sesión.</a
            >
          </div>
          <div class="field button-field">
            <button type="submit" @click.prevent="resetContinue">
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { auth } from "../utils/firebaseConfig";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPhoneNumber,
} from "firebase/auth";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { alertaForm } from "../utils/funciones";

const email = ref("");
const phone = ref("");
const password = ref("");
const errForm = ref(false);
const errMsg = ref("");
const router = useRouter(); // get a reference to our vue router
const recoverPass = ref(false);
const resetEmail = ref("");
const methodEmail = ref(true);

onMounted(() => {});

const eyeIcon = (e) => {
  console.log(e);
  const passwordInput = e.target.previousElementSibling;
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    e.target.classList.replace("fa-eye-slash", "fa-eye");
    return;
  }
  passwordInput.type = "password";
  e.target.classList.replace("fa-eye", "fa-eye-slash");
};

const changeMethod = (method) => {
  methodEmail.value = method === "email" ? true : false;
  // methodEmail.value = !methodEmail.value;
  // console.log(methodEmail.value);
  // console.log("cabio");
};

const withEmail = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((response) => {
      router.push("/dashboard"); // redirect to the feed
      alertaForm("Sesión iniciada", "success", 3000);
    })
    .catch((error) => {
      console.log(error);
      const errorMessages = {
        "auth/user-not-found": "No se encontró ninguna cuenta con el correo.",
        "auth/invalid-email":
          "El correo electrónico proporcionado no es válido.",
        "auth/wrong-password": "Contraseña incorrecta",
      };
      errMsg.value =
        errorMessages[error.code] ||
        "Verifique que su correo y contraseña sean correctos.";
      errForm.value = true;
    });
};
const loginUser = async (e) => {
  e.preventDefault();

  if (methodEmail.value) {
    if (!email.value || !password.value) {
      errForm.value = true;
      errMsg.value =
        "Por favor, ingresa un correo electrónico y una contraseña válidos";
      return;
    }
    withEmail();
  } else {
    // Iniciar sesión con número de teléfono
    const phoneNumberWithCountryCode = `+52${phone.value}`; // Agrega el código de país
    // Envia un código de verificación al número de teléfono
    console.log(phoneNumberWithCountryCode);
    await signInWithPhoneNumber(auth, phoneNumberWithCountryCode)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        // Guarda la confirmación resultante en el estado o en algún lugar para su uso posterior
      })
      .catch((err) => {
        // Manejo de errores
        console.log(err);
      });
  }
};

const resetPass = (e) => {
  recoverPass.value = true;
};
const backLogin = (e) => {
  recoverPass.value = false;
};
const resetContinue = (e) => {
  console.log(resetEmail.value);
  sendPasswordResetEmail(auth, resetEmail.value)
    .then(() => {
      alertaForm(
        "Enlace envíado correctamente. Revise su correo y vuelva a iniciar sesión con la nueva contraseña.",
        "success",
        5000
      );
      recoverPass.value = false;
    })
    .catch((err) => {
      console.error(err);
    });
};
</script>

<style scoped>
.forms {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  padding: 3rem 0;
}
.form {
  background: var(--color-dark-secondary);
  width: 35%;
  padding: 30px !important;
  border-radius: 6px;
  /* position: relative; */
}
.header-title {
  font-size: 28px;
  font-weight: 600;
  background-image: var(--color-secondary-main);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
}
.form .field {
  height: 50px;
  width: 100%;
  margin-top: 20px;
  border-radius: 6px;
}
.field input,
.field button {
  height: 100%;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
}
.field input {
  outline: none;
  width: calc(100% - 20px);
  padding: 0 10px;
  border: 1px solid#504f4f;
  color: var(--color-white);
}
.field input::placeholder {
  color: var(--text-input);
}
.field input:focus {
  color: var(--color-white);
}

.field input:focus {
  border-bottom-width: 2px;
}
.recovery-description {
  color: var(--color-white);
}
.input-field {
  position: relative;
}
.eye-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #8b8b8b;
  cursor: pointer;
  padding: 5px;
}
.field button {
  color: #fff;
  background: var(--color-secondary-main);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}
.field button:hover {
  background: var(--color-secondary-hover);
}
.form-link {
  text-align: center;
  margin-top: 10px;
}
.form-link span,
.form-link a {
  font-size: 14px;
  font-weight: 400;
  color: #232836;
}
.form a {
  background-image: var(--color-secondary-main);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-decoration: none;
  font-size: 1rem;
}
.form-content a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 860px) {
  .form {
    width: 50%;
  }
}
@media screen and (max-width: 500px) {
  .form {
    width: 75%;
  }
}
@media screen and (max-width: 400px) {
  .form {
    padding: 20px 10px;
  }
}
.err-form {
  color: rgb(245, 53, 53);
  text-shadow: 0.001px 0.001px 0.001px white;
  /* color: white; */
  padding: 0.5rem;
  font-size: 14px;
  margin-top: 5px;
}
.success-pw {
  font-size: 14px;
  margin-top: 5px;
}
@media screen and (max-width: 360px) {
  .form {
    width: 95%;
  }
}
.method-login {
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
}
.method-login .method {
  /* background: pink; */
  padding: 0.5rem;
  border: 1px solid var(--color-dark-third);
  color: var(--color-white);
  opacity: 0.2;
  cursor: pointer;
}
.method-login .method:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.method-login .method:last-child {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.method-login .method.active {
  background: var(--color-white);
  color: var(--color-border-main);
  opacity: 1;
  cursor: auto;
}
</style>
