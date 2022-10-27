<template>
  <h1>Counter -Vuex</h1>
  <h2>direct access:{{ $store.state.counter.count }}</h2>
  <h1>mapState:{{ count }}</h1>

  <button @click="increment">increment +1</button>
  <button @click="incrementBy">increment +5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">random</button>

  <h2>Direct Getter:{{ squareCount }}</h2>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("counter", ["count", "isLoading"]),
    ...mapGetters("counter", ["squareCount"]),
  },

  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
    incrementBy() {
      this.$store.commit("counter/incrementBy", 5);
    },

    ...mapActions("counter", ["incrementRandomInt"]),
  },
};
</script>
