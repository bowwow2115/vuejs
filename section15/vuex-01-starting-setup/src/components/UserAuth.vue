<template>
  <button v-if="!userIsAuthenticated" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  mounted() {
    console.log('isLogin: ' + this.userIsAuthenticated);
  },
  computed: {
    ...mapGetters(['userIsAuthenticated']),
    // counter() {
    //   return this.$store.getters.normalizedConuter;
    // },
  },
  methods: {
    ...mapActions(['login', 'logout']),
  },
};
</script>

<style></style>
