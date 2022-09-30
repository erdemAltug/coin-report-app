<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "App",

  data: () => ({
    timer: null,
  }),

  computed: {
    ...mapState([
      "dialog",
      "allCoins",
      "myCoins",
      "searchCoin",
      "addButtonCoins",
      "updateButtonCoins",
    ]),
  },

  created() {
    this.getCoinInfo();
  },

  mounted() {
    this.timer = setInterval(() => {
      this.getCoinInfo();
      this.render = true;
    }, 1200000);
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  methods: {
    ...mapActions([
      "setModal",
      "getAllCoin",
      "setAllCoins",
      "setMyCoins",
      "setSelectedCoin",
      "setAddButtonCoins",
      "setUpdateButtonCoins",
    ]),

    getCoinInfo() {
      this.getAllCoin().then((response) => {
        this.setAllCoins(response.data);
      });
    },

    openModal() {
      this.setModal(true);
    },
  },
};
</script>
