<template>
  <div class="container">
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
import type { LoginPayload } from '@/core/models';
import { Authentication } from '@/core/services/authentication';

export default {
  data() {
    return {
      fieldEmail: '',
      fieldPassword: '',
      errors: {
        fieldEmail: '',
        fieldPassword: '',
      },
      spinner: false,
    };
  },
  computed:{
    hasSpinner() {
      return this.spinner;
    },
  },
  methods: {

    
    async onSubmit() {
      this.errors.fieldEmail ='';
      this.errors.fieldPassword ='';

      if (!this.fieldEmail) {
        this.errors.fieldEmail = 'Este campo é obrigatório';
      }
      if (!this.fieldPassword) {
        this.errors.fieldPassword = 'Este campo é obrigatório';
      }

      this.spinner = true;
     
      // console.log(this.fieldEmail);

      const payload: LoginPayload = {
        email: this.fieldEmail,
        password: this.fieldPassword
      };
      
      const authService = new Authentication();
      try {
        const responseData = await authService.login(payload);
        // console.log(responseData);
        this.spinner = false;
      } catch (error) {
        this.spinner = false;
        console.error(error);
      }
      
    }
  }
};
</script>

<style lang=""></style>
