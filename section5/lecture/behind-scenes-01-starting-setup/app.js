const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
      // this.message = this.currentUserInput;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("mounted()");
  },
  mounted() {
    console.log("beforeUpdate");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmount");
  },
});

app.mount("#app");

setTimeout(() => app.unmount(), 3000);

const data = {
  message: "Hello!",
  longMessage: "Hello World!",
};

const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!";

console.log(proxy);
