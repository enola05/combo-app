<template>
    <q-card>
      <q-card-section>
        <div class="text-h6">Currency Converter</div>
      </q-card-section>
  
      <!-- Input field for the value to convert -->
      <q-card-section>
        <q-input v-model="value" label="Amount to convert" type="number" />
      </q-card-section>
  
      <!-- Select for the currency to convert from -->
      <q-card-section>
        <q-select
          v-model="fromCurrency"
          :options="currencyTypes"
          label="From Currency"
          outlined
          dense
        />
      </q-card-section>
  
      <!-- Select for the currency to convert to -->
      <q-card-section>
        <q-select
          v-model="toCurrency"
          :options="currencyTypes"
          label="To Currency"
          outlined
          dense
        />
      </q-card-section>
  
      <!-- Display the converted amount -->
      <q-card-section v-if="convertedAmount !== null">
        <div class="text-h6">Converted Amount</div>
        <div>{{ convertedAmount }} {{ toCurrency }}</div>
      </q-card-section>
    </q-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        value: null,
        fromCurrency: 'EUR', // Default from currency
        toCurrency: 'USD',   // Default to currency
        currencyTypes: ['EUR', 'GBP', 'INR', 'AUD', 'USD'],
        convertedAmount: null,
        conversionRates: {
          EUR: 1.18,  // 1 EUR = 1.18 USD
          GBP: 1.35,  // 1 GBP = 1.35 USD
          INR: 0.014, // 1 INR = 0.014 USD
          AUD: 0.74,  // 1 AUD = 0.74 USD
          USD: 1      // 1 USD = 1 USD
        },
      };
    },
    watch: {
      value() {
        this.convert();
      },
      fromCurrency() {
        this.convert();
      },
      toCurrency() {
        this.convert();
      },
    },
    methods: {
      convert() {
        if (this.value == null || this.fromCurrency == null || this.toCurrency == null) return;
  
        // Get the conversion rates for both fromCurrency and toCurrency
        const fromRate = this.conversionRates[this.fromCurrency];
        const toRate = this.conversionRates[this.toCurrency];
  
        // Convert the value to USD first (using fromCurrency rate), then convert to the target currency
        const valueInUSD = this.value * fromRate;
        this.convertedAmount = valueInUSD / toRate;
      },
    },
  };
  </script>
  