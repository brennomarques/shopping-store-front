<template>
  <div class="container mt-5">
    <AlertMessage
      :message="alertMessage.message"
      :visible="alertMessage.showAlert"
      :type="alertMessage.typeMessage"
    />
    <h1 class="text-center mb-4">
      Perfil do Usuário
    </h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="mb-3">
          <label
            for="username"
            class="form-label"
          >Nome de Usuário:</label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="user.username"
          >
        </div>
        <div class="mb-3">
          <label
            for="email"
            class="form-label"
          >E-mail:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            readonly
            v-model="user.email"
          >
        </div>
        <div class="mb-3">
          <label
            for="password"
            class="form-label"
          >Nova Senha:</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
          >
        </div>
        <button
          @click="updateProfile"
          class="btn btn-primary"
        >
          Atualizar Perfil
        </button>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import AlertMessage from '@/components/AlertMessage.vue';
import { Authorization } from '@/core/services';

export default {
  components: {
    AlertMessage
  },
  data() {
    return {
      user: {
        username: '',
        email: '',
      },
      password: '',
      alertMessage: {
        message: 'information saved successfully',
        showAlert: false,
        typeMessage: '',
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

    showMessage(msg: string, typeMessage: string) {
      this.alertMessage = {
        message: msg,
        showAlert: true,
        typeMessage: typeMessage,
      };

      setTimeout(() => {
        this.alertMessage.showAlert = false;
      }, 4000);
    },

    updateProfile() {
      this.showMessage(`O usuário ${this.user.username} foi atualizado`, 'success');
    },
  },
};
</script>
  
  <style>
  /* Adicione estilos personalizados aqui, se necessário */
  </style>
  