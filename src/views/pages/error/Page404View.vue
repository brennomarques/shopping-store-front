<template>
  <div class="container mt-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-start p-5">
        <p class="lead">Parece que esta página não existe.</p>
        <h1 class="display-1">404</h1>
        <p class="lead">Para voltar à página inicial é só clicar no botão abaixo.</p>
        <button class="btn btn-primary" @click="goBack">Página inicial</button>
      </div>
      <div class="col-md-6 text-center">
        <div class="">
          <img
            src="@/assets/images/exclamation.svg"
            alt="Imagem de erro 404"
            width="300"
            height="300"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>
/* Estilos personalizados da página 404 aqui */
</style>
