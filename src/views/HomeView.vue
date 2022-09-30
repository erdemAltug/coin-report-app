<template>
  <v-app>
    <div class="home">
      <v-row>
        <v-col class="ml-12 mt-12" cols="12">
          <v-btn @click="openModal" dense color="primary" class="ml-8 mt-8">
            {{ myCoins.length != 0 ? btnName : "Add Stock" }}
          </v-btn>
          <v-btn dense color="primary" class="ml-8 mt-8"> Refresh </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <coin-list></coin-list>
        </v-col>

        <v-col cols="6">
          <coin-chart :labels="labels" :series="series"> </coin-chart>
        </v-col>
      </v-row>

      <find-coin> </find-coin>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import FindCoin from "@/components/FindCoin.vue";
import CoinList from "@/components/CoinList.vue";
import CoinChart from "@/components/CoinChart.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    FindCoin,
    CoinList,
    CoinChart,
  },

  data() {
    var self = this;
    return {
      searchedCoin: "",
      btnName: "Add/Update",
      series: [],
      labels: [],
    };
  },

  created() {
    this.getCoinInfo();
  },

  watch: {
    myCoins() {
      console.log("my Coins", this.myCoins);
      this.series = [];
      this.labels = [];
      this.myCoins.forEach((element) => {
        if (element.symbol) {
          this.labels.push(element.symbol);
        }

        if (element.unit) {
          this.series.push(element.unit);
        }
      });
    },
  },

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
        this.allCoins.forEach(function (element) {
          element.unit = 1;
        });
        console.log("all coins", this.allCoins);
        this.setMyCoins(this.allCoins.splice(0, 3));
        console.log("my coins", this.myCoins);
      });
    },

    openModal() {
      this.setModal(true);
    },
  },
};
</script>
