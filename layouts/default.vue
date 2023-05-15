<template>
  <v-app :style="{ background: COLOR.DARK_WHITE }" class="app">
    <v-card>
      <v-toolbar color="white" flat prominent extended>
        <v-toolbar-title class="mx-auto">
          <v-row class="justify">
            <v-col cols="12" class="text-h5">CROWD</v-col>
          </v-row>
        </v-toolbar-title>

        <!-- <div class="ml-n12">
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </div>-->

        <template v-slot:extension>
          <v-tabs centered color="black">
            <v-tab to="/">TOP</v-tab>
            <v-tab to="/kaii">怪異</v-tab>
            <v-tab to="/line2022">2022年LINE謎</v-tab>
            <!-- <v-tab to="/others">その他</v-tab>  -->
          </v-tabs>
        </template>
      </v-toolbar>
    </v-card>

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer padless>
      <v-row justify="center" no-gutters>
        <v-col cols="12">
          <v-card flat tile class="text-center">
            <v-divider color="grey"></v-divider>

            <v-card-text class="black--text">{{ new Date().getFullYear() }} ー C-lock-row</v-card-text>

            <v-spacer></v-spacer>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { COLOR } from "@/assets/variables/colors"

export default defineComponent({
  setup() {
    // const tweetText = "https://example.com"

    // ======== 共有ボタン ======== 
    // const tweetForShare = () => {
    //   if (!window.open(tweetText, '_blank')) {
    //     location.href = tweetText
    //   }
    // }
    return {
      COLOR
    }
  }
})
</script>


<style scoped>
.app {
  width: 100%;
  overflow-x: hidden;
}
</style>