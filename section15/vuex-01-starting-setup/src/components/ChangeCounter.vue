<template>
  <slot></slot>
  <button @click="increment">Add 1</button>
  <button @click="incrementWithArg({ value: 10 })">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['increment', 'incrementWithArg']),
    // addOne() {
    // this.$store.commit('increase', { value: 1 });
    // },
  },
};
</script>

<style></style>
