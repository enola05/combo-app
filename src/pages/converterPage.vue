<template>
    <q-page class="flex flex-center">
      <q-tabs
        v-model="tab"
        class="text-grey bg-white"
        dense
        narrow-indicator
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="unit" label="Unit Converter" />
        <q-tab name="currency" label="Currency Converter" />
        <q-tab name="math" label="Math Converter" />
        <q-tab name="color" label="Color Converter" />
      </q-tabs>
  
      <q-separator />
  
      <div v-show="tab === 'unit'">
        <unit-converter />
      </div>
      <div v-show="tab === 'currency'">
        <currency-converter />
      </div>
      <div v-show="tab === 'math'">
        <math-converter />
      </div>
      <div v-show="tab === 'color'">
        <color-converter />
      </div>
    </q-page>
  </template>
  
  <script>
  import UnitConverter from 'components/UnitConverter.vue'
  import CurrencyConverter from 'components/CurrencyConverter.vue'
  import MathConverter from 'components/MathConverter.vue'
  import ColorConverter from 'components/ColorConverter.vue'
  
  export default {
    components: {
      UnitConverter,
      CurrencyConverter,
      MathConverter,
      ColorConverter,
    },
    data() {
      return {
        tab: 'unit',
      };
    },
  };
  </script>
  
  <style scoped>
  .q-page {
    max-width: 800px;
    margin: auto;
  }
  </style>
  