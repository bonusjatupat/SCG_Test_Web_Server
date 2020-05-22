<template>
  <div id="mathPattern">
    <h1 class="question_text">
      LINE BOT
    </h1>
    <v-row align="center">
      <v-col cols="6">
        <v-img
          :src="qrCode"
          width="400px"
          height="400px"
          class="qrCode_picture"
        ></v-img>
      </v-col>
      <v-col cols="4">
        <v-container>
          <div v-if="isSuccess">Message has been send.</div>
          <v-textarea class="message_textarea"
            solo
            name="message"
            label="Deirect Message to Admin"
            height="200px"
            v-model="message"
            @click="isSuccess = false"
          ></v-textarea>
          <v-btn class="button" color="#ac9d89" dark large @click="sendMessage(message)">
            SEND MESSAGE
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
      qrCode: require("@/assets/elements/lineQrCode.png"),
      message: null,
      isSuccess: false,
      errored: null
    };
  },
  methods: {
    sendMessage(message) {
      axios.post("http://localhost:3030/line/noti", {message: message})
           .then(res => (this.isSuccess = true))
           .catch(error => (this.errored = error))
    }
  }
};
</script>

<style scoped>
.question_text {
  color: #ac9d89;
  text-align: left;
  margin-left: 300px;
  margin-top: 150px;
}

.qrCode_picture {
  margin-left: 300px;
}

.message_textarea {
  margin-left: 30px;
}

.title_text {
  text-align: left;
  margin-left: 10px;
}

.button {
  margin-top: 10px;
}
</style>
