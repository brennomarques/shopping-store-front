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
            Entrar no Shopping Store
          </h1>
          <h1 class="h6 mb-3 fw-normal">
            Preencha os dados abaixo
          </h1>

          <div class="form-floating mt-4">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="fieldEmail"
            >
            <label for="floatingInput">E-mail</label>
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
              {{ errors.fieldPassword }}
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
            <span> Entrar</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AlertMessage from '@/components/AlertMessage.vue';
import type { LoginPayload } from '@/core/models';
import { Authentication } from '@/core/services/authentication';

export default {
  components: {
    AlertMessage
  },
  data() {
    return {
      fieldEmail: '',
      fieldPassword: '',
      errors: {
        fieldEmail: '',
        fieldPassword: '',
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
      this.errors.fieldEmail ='';
      this.errors.fieldPassword ='';

      if (!this.fieldEmail) {
        this.errors.fieldEmail = 'Este campo é obrigatório';
        return;
      }
      if (!this.fieldPassword) {
        this.errors.fieldPassword = 'Este campo é obrigatório';
        return;
      }

      this.spinner = true;
     
      const payload: LoginPayload = {
        email: this.fieldEmail,
        password: this.fieldPassword
      };
      
      try {
        await new Authentication().login(payload);
        this.spinner = false;
        window.location.href = 'dashboard';
      } catch (error) {
        this.spinner = false;
        this.showMessage('Usuário ou senha incorretos, tente novamente.', 'error');
        console.error(error);
      }
      
    }
  }
};
</script>

<style lang=""></style>
