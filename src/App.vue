<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h2>Introduce My Self</h2>
      <v-spacer/>
      <v-tabs>
        <v-tab @click="scrollTo('home')">Home</v-tab>
        <v-tab @click="scrollTo('about')">About Me</v-tab>
        <v-tab @click="scrollTo('education')">Education</v-tab>
        <v-tab @click="scrollTo('habit')">Habit</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  methods: {
    scrollTo(id) {
      const element = document.getElementById(id)

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }
};
</script>
