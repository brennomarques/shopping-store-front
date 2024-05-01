<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <a class="navbar-brand me-4" href="#">
          <img src="@/assets/logo.svg" alt="Bootstrap" width="50" height="50" />
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 link-body-emphasis me-3">Painel</a></li>
          <li><a href="#" class="nav-link px-2 link-body-emphasis me-3">Minhas compras</a></li>
          <li><a href="#" class="nav-link px-2 link-body-emphasis me-3">Produtos</a></li>
          <li><a href="#" class="nav-link px-2 link-body-emphasis me-3">Produtos2</a></li>
        </ul>

        <div class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
        </div>

        <div class="dropdown text-end">
          <a
            href="#"
            class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="32"
              height="32"
              class="rounded-circle"
            />
          </a>
          <ul class="dropdown-menu text-small">
            <li><a class="dropdown-item" href="#">Minhas Compras</a></li>
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Sair</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {}
</script>
<style lang=""></style>
