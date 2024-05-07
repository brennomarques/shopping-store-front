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
            @click="handleRegister"
          >
            Criar uma conta
          </button>
          <button
            type="button"
            class="btn btn-light"
            @click="handleLogin"
          >
            Fazer login
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

export default {
  methods: {
    handleLogin() {
      this.$router.push('/login');
    },
    handleRegister() {
      this.$router.push('/register');
    }
  }
};
</script>
<style lang=""></style>
