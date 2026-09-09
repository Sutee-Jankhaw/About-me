<template>
  <div class="calculate">
    <h1>Grade Calculate</h1>
    <v-text-field
      v-model="score"
      label="score"
    >
    </v-text-field>
    <h2>Your Grade is:</h2>
    <h2>{{ grade }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      grade: ''
    }
  },
  methods() {

  }
}
</script>
