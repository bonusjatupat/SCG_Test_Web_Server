<template>
  <div id="footer">
    <v-footer padless class="footer_custom">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>JATUPAT T.</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
#footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}

.footer_custom {
    background-color: #F0E9DD;
}
</style>
