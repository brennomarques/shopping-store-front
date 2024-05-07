<template>
  <main>
    <HeaderPrivate v-if="isLoggedIn" />
    <HeaderPublic v-if="!isLoggedIn" />
    <router-view />
    <FooterPrivate v-if="isLoggedIn" />
    <FooterPublic v-if="!isLoggedIn" />
  </main>
</template>

<script>
import HeaderPrivate from '@/views/headers/HeaderPrivateView.vue';
import HeaderPublic from '@/views/headers/HeaderPublicView.vue';
import FooterPrivate from '@/views/footers/FooterPrivateView.vue';
import FooterPublic from '@/views/footers/FooterPublicView.vue';
// import LoginPage from '@/views/pages/auth/LoginPageView.vue';
// import SignUpPage from '@/views/pages/auth/SignUpPageView.vue'

export default {
  components: {
    HeaderPrivate,
    HeaderPublic,
    FooterPrivate,
    FooterPublic,
    // LoginPage
    // SignUpPage
  },
  data() {
    return {
      isLogged: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.isLogged;
    }
  },
  beforeCreate() {
    console.log('Vamos fazer login e todos o liugar');
  },
  // created: {
  //   temp() {
  //     console.log('sfsfsd');
  //   }
  // }
};
</script>
