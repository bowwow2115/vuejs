const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    /*
    일부분만 연산되는 경우 methods가 아니라 computed 프로퍼티를 사용하는 것이 좋다
    ( 바뀐 부분만 연산해주기 때문 )
    메소드처럼 생겼지만 data 내의 프로퍼티 처럼 사용해야한다. 
    ( ex) html내에서 {{result}} 와 같이 사용)
    정의한 함수(computed property)내에서 의존성을 가진 data 프로퍼티의 값이 변경될 때만 동작
    ( cf) 이 경우에서는 this.number )
    */
    result() {
      if (this.number < 37) {
        return "not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else if (this.number > 37) {
        return "Too much!";
      }
    },
  },
  /*
  정의한 watch 프로퍼티가 바뀔 때 마다 작동(이 경우에서는 computed 프로퍼티인 result()다.)
  메소드 내에 value값을 넣어 현재의 값을 얻을 수 있다.
   */
  watch: {
    result() {
      console.log("Watcher aexecuting...");
      setTimeout(() => (this.number = 0), 1000);
    },
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
});
app.mount("#assignment");
