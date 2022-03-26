<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2>Crypto Currency List</h2>
      </v-col>
      <v-col cols="12">
        <v-card> </v-card>
        <Table :headers="headers" :items="formatFieds(info)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Table from "../components/Table.vue";
import axios from "axios";

export default {
  name: "Crypto",
  components: {
    Table,
  },
  data: () => ({
    tab: null,
    info: [],
    headers: [
      { text: "Symbol", align: "center", value: "symbol" },
      { text: "Name", value: "name", align: "center" },
      { text: "Value", value: "latest", align: "center" },
      { text: "Variation", value: "percent_change", align: "center" },
    ],
  }),

  beforeMount() {
    axios
      .get(
        "https://www.coinbase.com/api/v2/assets/search?base=BRL&country=BR&include_prices=true&limit=50"
      )
      .then((response) => (this.info = response.data.data));
  },

  methods: {
    formatFieds: function (value) {
      var info = value.map(function (currency) {
        var cryptoFormated = [];

        cryptoFormated["latest"] = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(currency.latest);
        cryptoFormated["symbol"] = currency.symbol;
        cryptoFormated["name"] = currency.name;
        cryptoFormated["percent_change"] = Intl.NumberFormat("pt-BR", {
          style: "percent",
          minimumFractionDigits: 1,
          maximumFractionDigits: 2,
        }).format(currency.percent_change);

        return cryptoFormated;
      });

      return info;
    },
  },
};
</script>
