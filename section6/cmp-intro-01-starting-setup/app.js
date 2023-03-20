const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "park",
          name: "SH Park",
          phone: "010 1234 1234",
          email: "SHPark@google.com",
        },
        {
          id: "sung",
          name: "KH Sung",
          phone: "010 1111 1111",
          email: "KHSung@google.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.component("friend-contact", {
  template: `
         <li v-for="friend in friends" :key="friend.id">
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails()">
            {{detailsAreVisible ? 'Hide' : 'Show'}} Details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: "park",
        name: "SH Park",
        phone: "010 1234 1234",
        email: "SHPark@google.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
