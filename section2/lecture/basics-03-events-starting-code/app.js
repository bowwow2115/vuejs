const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },
  computed: {
    fullName() {
      console.log("running");
      if (this.name === "" && this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(() => (this.counter = 10), 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else if (this.lastName === "") {
    //     this.fullName = value + " " + "Park";
    //   } else if (this.lastName !== "") {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
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
