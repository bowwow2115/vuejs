const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: "",
    };
  },
  methods: {
    addGoal(event) {
      this.goals.push(this.enteredGoalValue);
      console.log(event);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
