<template>
  <v-container>
    <div>
      <v-dialog persistent v-model="dialog" width="1000">
        <v-card style="height: auto">
          <v-card-title>
            <span class="text-h5">Search Coins</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-autocomplete
                    v-model="search"
                    :search-input.sync="searchInput"
                    :items="allCoins"
                    item-text="symbol"
                    item-value="symbol"
                    dense
                    filled
                    label="Search Coin"
                    return-object
                    @input="search = $event || ''"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <add-button v-if="addButton == true"></add-button>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <update-button v-if="updateButton == true"></update-button>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="closeModal"> Close </v-btn>
            <v-btn color="green darken-1" text @click="closeModal">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

import AddButton from "@/components/AddButton.vue";
import UpdateButton from "@/components/UpdateButton.vue";

export default {
  components: {
    AddButton,
    UpdateButton,
  },

  data() {
    var self = this;
    return {
      searchInput: null,
      search: null,
      addButton: false,
      updateButton: false,
    };
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

  watch: {
    search() {
      if (
        this.myCoins.find((element) => element.symbol === this.search.symbol)
      ) {
        this.searchCoin.push(this.search);
        this.updateButton = true;
        console.log("girdik");
      } else if (
        this.myCoins.find((element) => element.symbol != this.search.symbol)
      ) {
        this.searchCoin.push(this.search);
        this.addButton = true;
        console.log("girdik");
      }

      if (this.search == "") {
        this.updateButton = false;
        this.addButton = false;
      }
    },

    searchCoin() {
      if (this.searchCoin.length > 1) {
        this.setSelectedCoinEmpty();
        console.log("seks", this.searchCoin);
      }
    },
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
      "setSelectedCoinEmpty",
    ]),

    closeModal() {
      this.setModal(false);
    },

    addUnit() {
      this.unit++;
    },

    removeUnit() {
      this.unit--;
    },

    // getCoinInfo() {
    //   this.getAllCoin().then((response) => {
    //     this.allCoins.push(response.data);
    //     this.allCoins[0].forEach(function (element) {
    //       element.unit = 0;
    //     });
    //     console.log("coins", this.allCoins);
    //     this.myCoins.push(this.allCoins[0].splice(0, 5));
    //     this.myCoins = this.myCoins[0];
    //     console.log("my coins", this.myCoins);
    //   });
    // },
  },
};
</script>

<style>
.centered-input >>> input {
  text-align: center;
}
</style>
