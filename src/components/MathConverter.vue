<template>
    <q-card>
      <q-card-section>
        <div class="text-h6">Math & Formula Converter</div>
      </q-card-section>
  
      <q-card-section>
        <q-input v-model="expression" label="Enter mathematical expression" />
      </q-card-section>
  
      <q-card-section v-if="result !== null">
        <div class="text-h6">Result</div>
        <div>{{ result }}</div>
      </q-card-section>
    </q-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        expression: '',
        result: null,
      };
    },
    watch: {
      expression() {
        this.calculate();
      },
    },
    methods: {
      calculate() {
        try {
          this.result = eval(this.expression);
        } catch (e) {
          this.result = 'Invalid expression';
        }
      },
    },
  };
  </script>
  