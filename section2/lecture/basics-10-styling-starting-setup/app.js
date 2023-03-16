const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    /* 연산 프로퍼티를 사용하는 것이
    :class="{active: boxBSelected}"
    해당코드보다 더 불편하다.
    코드가 아주 길지않는 이상 html에 사용하는 것이 더 직관적일 듯
    */

    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});
app.mount("#styling");
