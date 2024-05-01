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
import HeaderPrivate from '@/views/headers/HeaderPrivateView.vue'
import HeaderPublic from '@/views/headers/HeaderPublicView.vue'
import FooterPrivate from '@/views/footers/FooterPrivateView.vue'
import FooterPublic from '@/views/footers/FooterPublicView.vue'

export default {
  components: {
    HeaderPrivate,
    HeaderPublic,
    FooterPrivate,
    FooterPublic
  },
  computed: {
    isLoggedIn() {
      return true
    }
  }
}
</script>
