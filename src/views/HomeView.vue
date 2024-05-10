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
import { Authorization } from '@/core/services';

export default {
  components: {
    HeaderPrivate,
    HeaderPublic,
    FooterPrivate,
    FooterPublic,

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

  async created() {
    if (Authorization.isAuthenticated()) {
      this.isLogged = true;
      return;
    }
    this.isLogged = false;
  },
};
</script>
