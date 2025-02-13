<template>
  <q-page class="flex justify-center" style=" min-height: auto;
">
    <q-card class="my-card" @click="goToCalc">
      <q-img src="https://static.vecteezy.com/system/resources/previews/000/357/163/original/vector-calculator-icon.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          Calculator
        </div>
      </q-img>
    </q-card>
    <q-card class="my-card" @click="goToBmi">
      <q-img src="https://thumbs.dreamstime.com/b/arrow-speedometer-icon-bmai-arrow-speedometer-vector-illustration-stock-image-arrow-speedometer-icon-bmai-arrow-speedometer-vector-259871590.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          BMI
        </div>
      </q-img>
    </q-card>
    <q-card class="my-card" @click="goToweather">
      <q-img src="https://cdn-icons-png.flaticon.com/512/4059/4059719.png">
        <div class="absolute-bottom text-subtitle2 text-center">
          Weather
        </div>
      </q-img>
    </q-card>
    <q-card class="my-card" @click="goTodo">
      <q-img src="https://icon-library.com/images/to-do-icon/to-do-icon-16.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          ToDo
        </div>
      </q-img>
    </q-card>
    <q-card class="my-card" @click="goToConv">
      <q-img src="https://icon-library.com/images/icon-convert/icon-convert-12.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
           converter
        </div>
      </q-img>
    </q-card>
    <q-card class="my-card" @click="goToAuth">
      <q-img src="https://cdn-icons-png.flaticon.com/512/11895/11895240.png">
        <div class="absolute-bottom text-subtitle2 text-center">
          Aunthentication
        </div>
      </q-img>
    </q-card>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  methods: {
    goToCalc() {
      this.$router.push('/calculator'); // Replace with your actual route
    },
    goToBmi() {
      this.$router.push('/bmi'); // Replace with your actual route
    },
    goToweather() {
      this.$router.push('/weather'); // Replace with your actual route
    },
    goTodo() {
      this.$router.push('/todo'); // Replace with your actual route
    },
    goToConv() {
      this.$router.push('/converter'); // Replace with your actual route
    },
    goToAuth() {
      this.$router.push('/aunthentication'); // Replace with your actual route
    },
  }
})
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
  margin: 1vh;
}
</style>
