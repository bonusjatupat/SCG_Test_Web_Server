<template>
  <div id="mathPattern">
    <h1 class="question_text">
      Find B and C, if given A=21, A+B=23, and A+C=-21
    </h1>
    <v-row align="center">
      <v-col cols="9">
        <v-card class="answer_card" max-width="1000" height="300" outlined>
          <div class="overline mb-4 answer_text">ANSWER</div>
          <h3 v-if="!isHide && (answer.A != null)" class="answer">
            A = {{ answer.A }}, B = {{ answer.B }}, C = {{ answer.C }}
          </h3>
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
        A: null,
        B: null,
        C: null
      },
      errored: null,
      isHide: false
    };
  },
  methods: {
    getAnswer() {
      axios
        .get("http://localhost:3030/doscg/find/value")
        .then(res => {
                        this.answer.A = res.data.A;
                        this.answer.B = res.data.B;
                        this.answer.C = res.data.C;
                    })
        .catch(error => (this.errored = error));
      this.isHide = false;
      return this.answer;
    },
    hideAnswer() {
      this.isHide = true;
      return this.isHide;
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
