<template>
    <q-card>
      <q-card-section>
        <div class="text-h6">Unit Converter</div>
      </q-card-section>
  
      <!-- Input field for the value to convert -->
      <q-card-section>
        <q-input v-model="value" label="Value to convert" type="number" />
      </q-card-section>
  
      <!-- Select for the unit to convert from -->
      <q-card-section>
        <q-select
          v-model="fromUnit"
          :options="unitTypes"
          label="From Unit"
          outlined
          dense
        />
      </q-card-section>
  
      <!-- Select for the unit to convert to -->
      <q-card-section>
        <q-select
          v-model="toUnit"
          :options="unitTypes"
          label="To Unit"
          outlined
          dense
        />
      </q-card-section>
  
      <!-- Display the converted value -->
      <q-card-section v-if="convertedValue !== null">
        <div class="text-h6">Converted Value</div>
        <div>{{ convertedValue }} {{ toUnit }}</div>
      </q-card-section>
    </q-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        value: null,
        fromUnit: 'meters',
        toUnit: 'kilometers',
        unitTypes: ['meters', 'kilometers', 'centimeters', 'millimeters'],
        convertedValue: null,
      };
    },
    watch: {
      value() {
        this.convert();
      },
      fromUnit() {
        this.convert();
      },
      toUnit() {
        this.convert();
      },
    },
    methods: {
      convert() {
        if (this.value == null || this.fromUnit == null || this.toUnit == null) return;
  
        // Conversion factors from one unit to another (reference unit = meters)
        const conversions = {
          meters: 1,
          kilometers: 1000,
          centimeters: 0.01,
          millimeters: 0.001,
        };
  
        // Convert the input value to meters first
        const valueInMeters = this.value * conversions[this.fromUnit];
  
        // Convert from meters to the desired unit
        this.convertedValue = valueInMeters / conversions[this.toUnit];
      },
    },
  };
  </script>
  