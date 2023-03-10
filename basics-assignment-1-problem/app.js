const app = Vue.createApp({
  data() {
    return {
      myName: "Park",
      myAge: "30",
      myImage: "taiwan.jpg",
    };
  },
  methods: {
    // outputGoal: function () {
    //   const randomNumber = Math.random();
    //   if (randomNumber < 0.5) {
    //     return this.courseGoalA;
    //   } else {
    //     return this.courseGoalB;
    //   }
    // },
  },
});
app.mount("#assignment");
