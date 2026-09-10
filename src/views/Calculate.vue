<template>
  <div class="calculate-container">
    <v-card class="calculate-card">
      <v-card-title>
        <h1>Grade Calculate</h1>
      </v-card-title>
      <v-card-actions>

      </v-card-actions>
      <v-card-text>
        <v-text-field
          v-model="score"
          label="Score"
          type="number"
        />

        <v-btn
          color="success"
          block
          @click="calculateGrade"
        >
          Submit
        </v-btn>

        <div class="text-center mt-6">
          <h3>Your Grade is:</h3>
          <h1>{{ grade }}</h1>
        </div>
      </v-card-text>
    </v-card>
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
  methods: {
    calculateGrade() {
      if (this.score > 100){
        alert('Score must in 1-100')
        this.score = 0
      }
      else if (isNaN(this.score)){
        alert('Score must be Number')
        this.score = 0
      }
      else {
        if (this.score >= 80) {
          this.grade = 'A'
        }
        else if (this.score >= 70) {
          this.grade = 'B'
        }
        else if (this.score >= 60) {
          this.grade = 'C'
        }
        else if (this.score >= 50) {
          this.grade = 'D'
        } else {
          this.grade = 'F'
        }
      } 
    }
  }
}
</script>

<style>
.calculate-container {
  width: 50vw;
  height: 50vh;

  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
}

.calculate-card {
  width: 100%;
}
</style>
