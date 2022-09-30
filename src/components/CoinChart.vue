<template>
  <v-container>
    <v-card>
      <apexchart
        width="750"
        type="pie"
        :options="chartOptions"
        :series="series"
        :labels="labels"
      ></apexchart>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    var self = this;
    return {
      chartOptions: {
        labels: this.labels,
      },
    };
  },

  props: {
    series: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.centered-input >>> input {
  text-align: center;
}
</style>
