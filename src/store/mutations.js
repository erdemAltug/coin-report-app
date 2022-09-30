export default {
  setModal(state, val) {
    state.dialog = val;
  },

  setAllCoins(state, val) {
    var data = val;
    var l = data.length,
      i;
    for (i = 0; i < l; i++) {
      state.allCoins.push(data[i]);
    }
  },

  setMyCoins(state, val) {
    var data = val;
    var l = data.length,
      i;
    for (i = 0; i < l; i++) {
      state.myCoins.push(data[i]);
    }
  },

  setSelectedCoin(state, val) {
    var data = val;
    var l = data.length,
      i;
    for (i = 0; i < l; i++) {
      state.searchCoin.push(data[i]);
    }
  },

  setSelectedCoinEmpty(state) {
    state.searchCoin = [];
  },

  setAddButtonCoins(state, val) {
    var data = val;
    var l = data.length,
      i;
    for (i = 0; i < l; i++) {
      state.addButtonCoins.push(data[i]);
    }
  },

  setUpdateButtonCoins(state, val) {
    var data = val;
    var l = data.length,
      i;
    for (i = 0; i < l; i++) {
      state.updateButtonCoins.push(data[i]);
    }
  },

  setPortfolio(state, val) {
    var data = val;
    var l = data.length,
      i;
    for (i = 0; i < l; i++) {
      state.myPortfolio.push(data[i]);
    }
  },

  setCoinUnit(state, value) {
    state.searchUnit = value;
  },
};
