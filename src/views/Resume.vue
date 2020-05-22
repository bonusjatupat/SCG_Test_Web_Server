<template>
  <div id="resume">
    <div class="page-1 page pl-2 ml-12 pt-12 mt-5">
      <v-row align="center">
        <v-col cols="6">
          <v-img
            :src="profile"
            width="450px"
            height="550px"
            class="spacing_profile"
          ></v-img>
        </v-col>
        <v-col cols="4">
          <v-container class="spacing_text">
            <h3 style="color:#AC9D89; text-align:center">JATUPAT TONGMAK</h3>
            <span>
              CS student, with experience in real programs usage as well as
              process development, who wants to apply knowledge from the
              classroom to a real life situation and obtain new experience in an
              organization.
            </span>
            <v-app>
              <div class="text-center">
                <v-dialog v-model="dialog" width="800">
                  <template v-slot:activator="{ on }">
                    <v-btn class="ma-2" color="#AC9D89" dark v-on="on">VIEW RESUME</v-btn>
                  </template>

                  <v-card>
                    <v-card-title primary-title>
                    Resume
                    </v-card-title>
                    <v-img :src="resume"></v-img>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-app>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      profile: require("@/assets/profile.png"),
      resume: require("@/assets/resume.png"),
      dialog: false
    };
  }
};
</script>

<style scoped>
#resume {
  background-image: url("../assets/backgrounds/background.jpg");
  background-color: transparent;
  -webkit-background-size: cover;
  background-size: cover;
  text-align: justify;
  width: 100vw;
  height: 40vh;
}

.spacing_profile {
  margin-top: 50px;
  margin-left: 200px;
}

.spacing_text {
  background-color: transparent;
  margin-top: 330px;
  margin-left: 60px;
}

.text-center {
  margin-top: 10px;
}
</style>
