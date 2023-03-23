<template>
  <form @submit.prevent="submitData">
    <div>
      <label>User Name</label>
      <input type="text" v-model="enteredUserName">
    </div>
    <div>
      <label>Age</label>
      <input type="text" v-model="enteredAge">
    </div>
    <button>submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredUserName: '',
      enteredAge: ''
    };
  },
  methods: {
    submitData() {
        this.$emit(
        'add-user',
        this.enteredUserName,
        this.enteredAge
      )
    }
  }
  
}
</script>

<style>

</style>