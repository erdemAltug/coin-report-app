import axios from "axios";

export default {
  getAllCoin(_, params) {
    return axios.get(`https://api2.binance.com/api/v3/ticker/24hr`, {
      params: params,
      withCredentials: false,
    });
  },

  setModal({ commit }, val) {
    commit("setModal", val);
  },

  setAllCoins({ commit }, item) {
    commit("setAllCoins", item);
  },

  setMyCoins({ commit }, item) {
    commit("setMyCoins", item);
  },

  setSelectedCoin({ commit }, item) {
    commit("setSelectedCoin", item);
  },

  setSelectedCoinEmpty({ commit }) {
    commit("setSelectedCoinEmpty");
  },

  setAddButtonCoins({ commit }, item) {
    commit("setAddButtonCoins", item);
  },

  setUpdateButtoCoins({ commit }, item) {
    commit("setUpdateButtonCoins", item);
  },

  setPortfolio({ commit }, item) {
    commit("setPortfolio", item);
  },

  setCoinUnit({ commit }, value) {
    commit("setCoinUnit", value);
  },
};
