<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase pa-6 ma-6 pr-12 mr-12">
      <span>
        <img src="../assets/icons/logo.png" width="45px" height="45px" />
      </span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <router-link to="/math/pattern">
      <v-btn text><span class="mr-2">Math Pattern</span></v-btn>
    </router-link>
    <router-link to="/math/equation">
      <v-btn text><span class="mr-2">Math Equation</span></v-btn>
    </router-link>
    <router-link to="/google/api">
      <v-btn text><span class="mr-2">Google API</span></v-btn>
    </router-link>
    <router-link to="/linebot">
      <v-btn text><span class="mr-2">Line bot</span></v-btn>
    </router-link>
    <router-link to="/resume">
      <v-btn text><span class="mr-2">About Me</span></v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {};
</script>
