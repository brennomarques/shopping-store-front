<template>
  <div>
    <h1>Dashboard</h1>
    <button @click="handleLogin">Login</button>
  </div>
</template>
<script>
import { AuthenticationService } from './AuthenticationService'
export default {
  methods: {
    handleLogin() {
      const authService = new AuthenticationService()
      authService
        .login()
        .then((responseData) => {
          console.log(responseData)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
<style lang=""></style>
