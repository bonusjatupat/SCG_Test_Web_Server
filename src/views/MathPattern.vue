<template>
  <div id="mathPattern">
    <h1 class="question_text">
      Find X, Y, Z if values given are X, Y, 5, 9, 15, 23, Z
    </h1>
    <v-row align="center">
      <v-col cols="9">
        <v-card class="answer_card" max-width="1000" height="300" outlined>
          <div class="overline mb-4 answer_text">ANSWER</div>
          <h3 v-if="!isHide && (answer.X != null)" class="answer">X = {{answer.X}}, Y = {{answer.Y}}, Z = {{answer.Z}} </h3>
        </v-card>
      </v-col>
      <v-col cols="1">
        <v-container class="button_container">
          <v-btn class="button" color="#5499C7" dark large @click="getAnswer">
            VIEW ANSWER
          </v-btn>
          <v-btn class="button" color="#C6CACD" dark large @click="hideAnswer">
            HIDE ANSWER
          </v-btn>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MathPattern",
  data() {
    return {
      answer: {
        X: null,
        Y: null,
        Z: null
      },
      errored: null,
      isHide: false
    };
  },
  methods: {
    getAnswer() {
      axios.get("http://localhost:3030/doscg/find/pattern")
           .then(res => {
                          this.answer.X = res.data.X
                          this.answer.Y = res.data.Y
                          this.answer.Z = res.data.Z
                        })
           .catch(error => this.errored = error)
      this.isHide = false
    },
    hideAnswer() {
      this.isHide = true
    }
  }
};
</script>

<style scoped>
.question_text {
  color: #ac9d89;
  text-align: left;
  margin-left: 200px;
  margin-top: 150px;
}

.answer_card {
  margin-top: 15px;
  margin-left: 200px;
}

.answer_text {
  text-align: left;
  margin-top: 10px;
  margin-left: 10px;
}

.answer {
  color: #ac9d89;
  text-align: center;
  margin-top: 60px;
}

.button_container {
  margin-top: 60px;
}

.button {
  margin-top: 30px;
}
</style>
