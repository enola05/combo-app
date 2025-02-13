<template>
    <q-page class="flex flex-center">
      <div class="q-pa-md" style="width: 350px;">
        <q-card>
          <q-card-section>
            <div class="text-h6">BMI Rechner</div>
          </q-card-section>
  
          <!-- Inputs for Height, Weight, Age, Gender -->
          <q-card-section>
            <q-input
              filled
              v-model="weight"
              label="Gewicht (kg)"
              type="number"
              :min="0"
              required
            />
          </q-card-section>
  
          <q-card-section>
            <q-input
              filled
              v-model="height"
              label="Größe (cm)"
              type="number"
              :min="0"
              required
            />
          </q-card-section>
  
          <q-card-section>
            <q-input
              filled
              v-model="age"
              label="Alter"
              type="number"
              :min="0"
              required
            />
          </q-card-section>
  
          <q-card-section>
            <q-select
              filled
              v-model="gender"
              :options="genderOptions"
              label="Geschlecht"
              required
            />
          </q-card-section>
  
          <q-card-section>
            <q-btn @click="calculateBMI" label="Berechnen" color="primary" />
          </q-card-section>
  
          <!-- Result Display -->
          <q-card-section v-if="bmi !== null">
            <div class="text-h6">Ihr BMI: {{ bmi }}</div>
            <div v-if="bmi < 18.5">Sie haben Untergewicht.</div>
            <div v-else-if="bmi >= 18.5 && bmi < 24.9">Sie haben Normalgewicht.</div>
            <div v-else-if="bmi >= 25 && bmi < 29.9">Sie haben leichtes Übergewicht.</div>
            <div v-else-if="bmi >= 30 && bmi < 35">Sie haben Adipositas I.</div>
            <div v-else-if="bmi >= 35 && bmi < 40">Sie haben Adipositas II.</div>
            <div v-else>Sie haben Adipositas III.</div>
  
            <div v-if="age && gender">
              <div v-if="gender === 'Frau'">
                Idealgewicht (nach Alter): {{ getIdealWeightForWomen() }}
              </div>
              <div v-if="gender === 'Mann'">
                Idealgewicht (nach Alter): {{ getIdealWeightForMen() }}
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    data() {
      return {
        weight: null,
        height: null,
        age: null,
        gender: null,
        bmi: null,
        genderOptions: [
          { label: 'Frau', value: 'Frau' },
          { label: 'Mann', value: 'Mann' },
        ],
      };
    },
    methods: {
      calculateBMI() {
        // Ensure height is in meters
        const heightInMeters = this.height / 100; // Convert cm to meters
        // Check for valid inputs
        if (this.weight > 0 && heightInMeters > 0) {
          // Calculate BMI
          this.bmi = (this.weight / (heightInMeters * heightInMeters)).toFixed(1);
        } else {
          this.bmi = 0.0; // Return 0 if invalid
        }
      },
      getIdealWeightForWomen() {
        const minBMI = 19;
        const maxBMI = 24;
        const idealMinWeight = minBMI * (this.height / 100) ** 2;
        const idealMaxWeight = maxBMI * (this.height / 100) ** 2;
        return `${idealMinWeight.toFixed(1)} kg - ${idealMaxWeight.toFixed(1)} kg`;
      },
      getIdealWeightForMen() {
        const minBMI = 19;
        const maxBMI = 24;
        const idealMinWeight = minBMI * (this.height / 100) ** 2;
        const idealMaxWeight = maxBMI * (this.height / 100) ** 2;
        return `${idealMinWeight.toFixed(1)} kg - ${idealMaxWeight.toFixed(1)} kg`;
      },
    },
  };
  </script>
  
  <style scoped>
  .q-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  </style>
  