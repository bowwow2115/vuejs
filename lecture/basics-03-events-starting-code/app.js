const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
    };
  },
  computed: {
    outputFullname() {
      console.log("running");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Park";
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      if (this.counter <= 0) return;
      this.counter = this.counter - num;
    },
    submitForm() {
      alert("Submitted");
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
