<template>
  <div id="mathPattern">
    <h2 class="question_text">
      Find the best way to go to Central World from SCG Bangsue
    </h2>
    <iframe class="map" :src="getEmbed()"> </iframe>
    <v-app>
      <div class="text-center">
        <v-dialog v-model="dialog" width="800">
          <template v-slot:activator="{ on }">
            <v-btn class="ma-2" color="#AC9D89" dark v-on="on" @click="getAnswer">VIEW JSON RESULT</v-btn>
          </template>

          <v-card>
            <v-card-title primary-title>
              JSON RESULT
            </v-card-title>
            <div>{{answer}}</div>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MathPattern",
  data() {
    return {
      answer: null,
      errored: null,
      dialog: false
    };
  },
  methods: {
    getAnswer() {
      axios
        .get("http://localhost:3030/google/direction")
        .then(res => (this.answer = res.data))
        .catch(error => (this.errored = error));
      return this.answer;
    },
    getEmbed() {
      return "https://www.google.com/maps/embed/v1/directions?key=AIzaSyCHoKeFQZ3g5Iyiwq932WoyO45ZRg1f2NU&origin=place_id:ChIJe5WIpnOc4jARoEQ-IqXo9HA&destination=place_id:ChIJ4VX0ws-e4jARBGaQ2IACrcQ&avoid=tolls|highways";
    }
  }
};
</script>

<style scoped>
.question_text {
  color: #ac9d89;
  text-align: center;
  margin-top: 100px;
}

.map {
  margin-top: 15px;
  width: 70%;
  height: 400px;
}
</style>
