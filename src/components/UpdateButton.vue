<template>
  <v-container>
    <div>
      <v-card>
        <v-row>
          <v-col class="mt-6 ml-8" cols="4">
            <span style="font-size: 18px; font-weight: bold">
              {{ searchCoin[0].symbol }} - {{ searchCoin[0].lastPrice }}
            </span>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            style="font-size: 16px; font-weight: bold"
            class="mt-6"
            cols="2"
          >
            {{ searchUnit }}
          </v-col>
          <v-col cols="3">
            <v-btn class="mt-5" @click="update()" small dense color="primary">
              update
            </v-btn>
            <v-btn
              class="mt-5 ml-2"
              @click="remove()"
              small
              dense
              color="error"
            >
              remove
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    var self = this;
    return {};
  },

  watch: {
    searchCoin() {
      this.myCoins.forEach((element) => {
        if (element.symbol === this.searchCoin[0].symbol) {
          element.unit = this.searchCoin[0].unit;
        }
      });
    },

    myCoins() {
      this.myCoins.forEach((element) => {
        if (element.symbol === this.searchCoin[0].symbol) {
          element.unit = this.searchCoin[0].unit;
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
      "searchUnit",
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
      "setCoinUnit",
    ]),

    update() {
      let x = this.searchUnit;
      this.setCoinUnit(this.searchUnit + 1);
      console.log("x", x);
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
