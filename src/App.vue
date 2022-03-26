<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">CryptoDocQ</div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Crypto />
    </v-main>
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
