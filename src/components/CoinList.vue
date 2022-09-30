<template>
  <v-container>
    <v-card
      style="overflow: auto; max-height: 75vh"
      min-height="20vh"
      class="ml-6"
    >
      <v-card-title>My Coins</v-card-title>
      <v-card-text style="text-align: center" v-if="myCoins.length == 0">
        <p>There is no stock, you can use add stock button</p>
      </v-card-text>
      <v-card style="margin: 2%" v-for="item in myCoins" :key="item.symbol">
        <v-row style="margin: 1%">
          <v-col class="mt-4" cols="4">
            <span style="font-size: 16px; font-weight: bold">
              {{ item.symbol }} - {{ item.lastPrice }} -
              {{ item.weightedAvgPrice }}</span
            >
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="mt-4" cols="2">
            {{ item.unit }}
          </v-col>
          <v-col cols="5">
            <v-btn
              class="mt-4"
              small
              dense
              color="primary"
              @click="update(item)"
            >
              Update
            </v-btn>
            <v-btn
              class="mt-4 ml-4"
              small
              dense
              color="warning"
              @click="remove(item)"
            >
              Remove
            </v-btn>
            <v-btn
              class="mt-4 ml-4"
              small
              dense
              color="error"
              @click="deleteCoins(item)"
            >
              Delete
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-divider></v-divider>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    var self = this;
    return {
      searchedCoin: "",
      btnName: "Add/Update",
    };
  },
  computed: {
    ...mapState(["dialog", "allCoins", "myCoins", "searchCoin", "myPortfolio"]),
  },

  watch: {
    myCoins() {
      console.log(this.myCoins);
      this.deleteCoins();
    },
  },

  methods: {
    ...mapActions([
      "setModal",
      "getAllCoin",
      "setAllCoins",
      "setMyCoins",
      "setSelectedCoin",
      "setPortfolio",
    ]),

    deleteCoins(item) {
      var index = this.myCoins.indexOf(item);
      if (index !== -1) {
        this.myCoins.splice(index, 1);
      }
    },

    update(item) {
      this.$set(item, item.unit, item.unit++);
      console.log(item.unit);
    },

    remove(item) {
      if (item.unit != 0) {
        this.$set(item, item.unit, item.unit--);
        console.log(item.unit);
      }
    },
  },
};
</script>

<style>
.centered-input >>> input {
  text-align: center;
}
</style>
