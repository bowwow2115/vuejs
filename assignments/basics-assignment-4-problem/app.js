const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      isVisible: true,
      inputBackgroundColor: "",
    };
  },
  computed: {
    paraClasses() {
      /*
        해당 객체의 프로퍼티 중 
        true 값을 가진 경우만
        문자열로 반환.
      */
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
  methods: {
    toggleParagraph() {
      this.isVisible = !this.isVisible;
    },
  },
});
app.mount("#assignment");
