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
      "searchUnit",
    ]),
  },

  watch: {
    search() {
      if (
        this.myCoins.find((element) => element.symbol === this.search.symbol)
      ) {
        this.searchCoin.push(this.search);
        this.updateButton = true;
      } else if (
        this.myCoins.find((element) => element.symbol != this.search.symbol)
      ) {
        this.searchCoin.push(this.search);
        this.addButton = true;
      }

      if (this.search == "") {
        this.updateButton = false;
        this.addButton = false;
      }
    },

    searchCoin() {
      if (this.searchCoin.length > 1) {
        this.setSelectedCoinEmpty();
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
      "setCoinUnit",
    ]),

    closeModal() {
      this.setModal(false);
    },
  },
};
</script>

<style>
.centered-input >>> input {
  text-align: center;
}
</style>
