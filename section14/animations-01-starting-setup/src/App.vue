<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 200);
    },
    afterEnter() {
      console.log('afterEnter');
    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leave(el, done) {
      let round = 10;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = round * 0.1;
        round--;
        if (round < 1) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 200);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 0.3s ease-out;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-50px); */
  animation: slide-fade 0.3s ease-out forwards;
}

.route-enter-from {
}
.route-enter-active {
  animation: slide-fade 0.4s ease-out;
}
.route-enter-to {
}
.router-leave-active {
  animation: slide-fade 0.4s ease-in;
}

.v-enter-from {
  /* opacity: 0;
  translate: translateY(-30px); */
}
.v-enter-to {
  /* opacity: 1;
  translate: translateY(0px); */
}
/* .para-enter-active {
  animation: slide-fade 0.3s ease-out;
} */
.v-leave-from {
  /* opacity: 1;
  translate: translateY(0px); */
}

.v-leave-to {
  /* opacity: 0;
  translate: translateY(0px); */
}

/* .para-leave-active {
  animation: slide-fade 0.3s ease-in;
} */

/* .fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
} */
@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  100% {
    transform: translate(-150px) scale(1);
  }
}
</style>
