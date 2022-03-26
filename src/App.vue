<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">CryptoDocQ</div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Crypto />
    </v-main>
      <v-footer
      app
    color="primary"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="primary py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>CryptoCurrency</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
import Crypto from "./components/CryptoCurrencies.vue";

export default {
  name: "App",

  components: {
    Crypto,
  },

  data: () => ({
    //
  }),
};
</script>
