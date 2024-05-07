<template>
  <div class="container mt-5">
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
  
<script>
export default {
  data() {
    return {
      user: {
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        // Outros dados do usuário...
      },
      password: '', // Senha temporária para atualização
    };
  },
  methods: {
    updateProfile() {
      // Aqui você pode adicionar lógica para enviar os dados atualizados para o servidor
      const updatedUser = { ...this.user, password: this.password };
      console.log('Dados atualizados:', updatedUser);
  
      // Limpar campo de senha após atualização
      this.password = '';
      alert('Perfil atualizado com sucesso!');
    },
  },
};
</script>
  
  <style>
  /* Adicione estilos personalizados aqui, se necessário */
  </style>
  