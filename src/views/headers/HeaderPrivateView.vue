<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <router-link
          to="/dashboard"
          class="navbar-brand me-4"
        >
          <img
            src="@/assets/logo.svg"
            alt="Bootstrap"
            width="50"
            height="50"
          >
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-item">
            <!-- Utilizando o Router Link para abrir a rota /product -->
            <router-link
              to="/dashboard"
              class="nav-link px-2 link-body-emphasis me-3"
            >
              Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/shopping"
              class="nav-link px-2 link-body-emphasis me-3"
            >
              Minhas compras
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/product"
              class="nav-link px-2 link-body-emphasis me-3"
            >
              Produtos
            </router-link>
          </li>
   
          <li class="nav-item">
            <router-link
              to="/order"
              class="nav-link px-2 link-body-emphasis me-3"
            >
              Meu carrinho
            </router-link>
          </li>
        </ul>

        <div
          class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
          role="search"
        >
          <h5 class="text-primary-emphasis">
            {{ user.username }}
          </h5>
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
            >
          </a>
          <ul class="dropdown-menu text-small">
            <li>
              <router-link
                to="/shopping"
                class="dropdown-item"
              >
                Minhas compras
              </router-link>
            </li>
            <li>
              <router-link
                to="/profile"
                class="dropdown-item"
              >
                Perfil
              </router-link>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click="logout"
              >Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { Authorization } from '@/core/services';
import { Logout } from '@/core/services/logout';

export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
      },
    };
  },

  created() {
    this.prepareUser();
  },
  methods: {
    prepareUser() {
      const user = new Authorization().getUser();
      this.user = {
        username: user!.name,
        email: user!.email,
      };
    },

    async logout(){
      console.log('application Logout');
      await new Logout().logout()
        .then(() => {
          window.location.href = '/login';
        })
        .catch(error => {
          console.error(error);
        });
    }
    
  }
};
</script>
<style lang=""></style>
