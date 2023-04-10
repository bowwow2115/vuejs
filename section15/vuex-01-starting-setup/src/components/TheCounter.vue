<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('counter', ['finalCounter']),
    // counter() {
    //   return this.$store.getters.normalizedConuter;
    // },
  },
};
</script>

<style></style>
