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
          <v-col cols="2"> </v-col>
          <v-col cols="2">
            <v-btn class="mt-4" @click="addCoins" small dense color="success">
              Add
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

    addCoins() {
      this.setMyCoins(this.searchCoin);
      alert("succesfulyl added");
    },
  },
};
</script>

<style>
.centered-input >>> input {
  text-align: center;
}
</style>
