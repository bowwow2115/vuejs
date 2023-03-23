<template>
  <section>
    <user-data @add-user="addUser"></user-data>
    <ul>
      <active-user 
      v-for="user in users"
      :key="user.username"
      :username="user.username"
      :age="user.age"
      ></active-user>
  </ul>
</section>
</template>

<script>
import UserData from './components/UserData.vue';
export default {
  components: { UserData },
  data() {
    return {
      users: [
        {
          username: 'user1',
          age: '23'
        },
        {
          username: 'user2',
          age: '30'
        }
      ]
    };
  },
  methods: {
    addUser(userName, age) {
      this.users.push(
        {
          username: userName,
          age: age
        }
      );
    },
  }
}
</script>

<style>

</style>