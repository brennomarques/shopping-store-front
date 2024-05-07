<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <a
          class="navbar-brand me-4 d-flex gap-4"
          href="#"
        >
          <img
            src="@/assets/logo.svg"
            alt="Bootstrap"
            width="50"
            height="50"
          >
          <img
            src="@/assets/name.svg"
            alt="Bootstrap"
            width="250"
            height="50"
          >
        </a>

        <div class="col-12 col-lg-auto mb-3 mb-lg-0 ms-lg-auto d-flex gap-3 justify-content-end">
          <button
            type="button"
            class="btn btn-primary"
          >
            Criar uma conta
          </button>
          <button
            type="button"
            class="btn btn-light"
            @click="handleLogin"
            target="_blank"
          >
            Fazer login
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { AuthenticationService } from '@/core/services/authentication.service.ts';

export default {
  methods: {
    handleLogin() {
      const authService = new AuthenticationService();
      authService
        .login()
        .then((responseData) => {
          console.log(responseData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
};
</script>
<style lang=""></style>
