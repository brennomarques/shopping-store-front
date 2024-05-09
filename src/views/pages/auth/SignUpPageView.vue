<template>
  <div class="container">
    <AlertMessage
      :message="alertMessage.message"
      :visible="alertMessage.showAlert"
      :type="alertMessage.typeMessage"
    />
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-4 shadow-sm bg-body-tertiary rounded p-3">
        <form @submit.prevent="onSubmit">
          <h1 class="h3 mb-3 fw-normal">
            Crie sua conta
          </h1>
          <h1 class="h6 mb-3 fw-normal">
            Diminua os custos e a burocracia do seu negócio
          </h1>

          <div class="form-floating mt-4">
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Nome Completo"
              v-model="fieldName"
            >
            <label for="inputName">Nome Completo</label>
            <p class="my-2 text-danger">
              {{ errors['fieldName'] }}
            </p>
          </div>

          <div class="form-floating mt-2">
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="name@example.com"
              v-model="fieldEmail"
            >
            <label for="inputEmail">E-mail</label>
            <p class="my-2 text-danger">
              {{ errors['fieldEmail'] }}
            </p>
          </div>
          <div class="form-floating mt-2">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="fieldPassword"
            >
            <label for="floatingPassword">Senha</label>
            <p class="my-2 text-danger">
              {{ errors['fieldPassword'] }}
            </p>
          </div>
          <div class="form-floating mt-2">
            <input
              type="password"
              class="form-control"
              id="floatingCPassword"
              placeholder="Confirm Password"
              v-model="fieldCPassword"
            >
            <label for="floatingCPassword">Confirmar senha</label>
            <p class="my-2 text-danger">
              {{ errors['fieldCPassword'] }}
            </p>
          </div>

          <button
            class="btn btn-primary w-100 py-2 mt-5 mb-4"
            type="submit"
            :disabled="hasSpinner"
          >
            <span
              v-if="hasSpinner"
              class="spinner-border spinner-border-sm"
              aria-hidden="true"
            />
            <span> Criar conta</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import AlertMessage from '@/components/AlertMessage.vue';
import type { RegisterPayload } from '@/core/models';
import { RegisterUser } from '@/core/services/registerUser';

export default {
  components: {
    AlertMessage
  },
  data() {
    return {
      fieldName: '',
      fieldEmail: '',
      fieldPassword: '',
      fieldCPassword: '',
      errors: {
        fieldName: '',
        fieldEmail: '',
        fieldPassword: '',
        fieldCPassword: '',
      },
      spinner: false,

      alertMessage: {
        message: 'information saved successfully',
        showAlert: false,
        typeMessage: '',
      }

    };
  },
  computed:{
    hasSpinner() {
      return this.spinner;
    },
  },
  methods: {

    showMessage(msg: string, typeMessage: string) {
      this.alertMessage = {
        message: msg,
        showAlert: true,
        typeMessage: typeMessage,
      };

      setTimeout(() => {
        this.alertMessage.showAlert = false;
      }, 3000);
    },

    
    async onSubmit() {
      
      this.errors.fieldName ='';
      this.errors.fieldEmail ='';
      this.errors.fieldPassword ='';
      this.errors.fieldCPassword ='';

      if (!this.fieldName) {
        this.errors.fieldName = 'Este campo é obrigatório';
        return;
      }
      if (!this.fieldEmail) {
        this.errors.fieldEmail = 'Este campo é obrigatório';
        return;
      }
      if (!this.fieldPassword) {
        this.errors.fieldPassword = 'Este campo é obrigatório';
        return;
      }
      if (!this.fieldCPassword) {
        this.errors.fieldCPassword = 'Este campo é obrigatório';
        return;
      }

      this.spinner = true;

      const payload: RegisterPayload = {
        name: this.fieldName,
        email: this.fieldEmail,
        password: this.fieldPassword,
        c_password: this.fieldCPassword,
      };
      
      const authRegister = new RegisterUser();
      try {
        await authRegister.register(payload);
        this.spinner = false;
        this.showMessage('Cadastro realizado com sucesso! Agora é só fazer login e começar a usar.', 'success');
      } catch (error) {
        this.spinner = false;
        this.showMessage('Ops! Não foi possível criar a conta com o e-mail informado.', 'error');
        console.error(error);
      }
      
    }
  }
};
</script>
<style lang=""></style>
