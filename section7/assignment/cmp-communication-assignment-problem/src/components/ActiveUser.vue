<template>
  <li>
    <h2>{{ username }}</h2>
    <h3>{{ age }}</h3>
  </li>
</template>

<script>
export default {
    props: {
        username: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        }
    },

}
</script>

<style>

</style>