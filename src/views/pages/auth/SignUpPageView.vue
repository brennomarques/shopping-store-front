<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-4 shadow-sm bg-body-tertiary rounded p-3">
        <form>
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
              id="floatingInput"
              placeholder="Nome Completo"
            >
            <label for="floatingInput">Nome Completo</label>
          </div>

          <div class="form-floating mt-2">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            >
            <label for="floatingInput">E-mail</label>
          </div>
          <div class="form-floating mt-2">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            >
            <label for="floatingPassword">Senha</label>
          </div>
          <div class="form-floating mt-2">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            >
            <label for="floatingPassword">Confirmar senha</label>
          </div>

          <button
            class="btn btn-primary w-100 py-2 mt-5 mb-4"
            type="submit"
          >
            Criar conta
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
