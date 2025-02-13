<template>
  <q-page class="flex justify-center" style=" min-height: auto;
">
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          Calculator
        </div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          BMI
        </div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          Weather
        </div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          ToDo
        </div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          Temperature converter
        </div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          Aunthentication
        </div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          Unit converter
        </div>
      </q-img>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
  margin: 1vh;
}
</style>
