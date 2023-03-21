<template>
  <section>
  <h2>My Friends</h2>
  <ul>
    <li>asdf</li>
  </ul>
</section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'park',
          name: 'SH Park',
          phone: '010 1111 1111',
          email: 'shpark@google.com'
        },
        {
          id: 'song',
          name : "KH Song",
          phone: "010 2222 2222", 
          email: "khsong@google.com"
        }
        
      ]
    }
  }
}
</script>


