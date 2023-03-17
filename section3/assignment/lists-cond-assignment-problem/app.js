const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputTask: "",
      isVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.isVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
      this.inputTask = "";
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
    showHideList() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
