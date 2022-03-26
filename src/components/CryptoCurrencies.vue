<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <Table :headers="headers" :items="info" />
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
    info: [],
    headers: [
      {
        text: "Symbol",
        align: "start",
        sortable: false,
        value: "symbol",
      },
      { text: "Nome", value: "name" },
      { text: "Valor", value: "latest" },
      {
        text: "Variação",
        value: "percent_change",
      },
    ],
  }),

  beforeMount() {
    axios
      .get(
        "https://www.coinbase.com/api/v2/assets/search?base=BRL&country=BR&include_prices=true&limit=30"
      )
      .then((response) => (this.info = response.data.data));
  },
};
</script>
