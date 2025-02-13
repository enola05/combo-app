<template>
  <q-card
    class="q-pa-md"
    :style="{ backgroundColor: rgbColor }"
    style="width: 350px"
  >
    <q-card-section>
      <div class="text-h6">Color Converter</div>
    </q-card-section>

    <!-- HEX Input -->
    <q-card-section>
      <q-input
        v-model="hex"
        label="HEX Color (e.g., #FF5733)"
        :input="convertHexToRgb"
        dense
      />
    </q-card-section>

    <!-- RGB Input -->
    <q-card-section>
      <q-input
        v-model="rgbInput"
        label="RGB Color (e.g., 255, 87, 51)"
        @input="convertRgbToHex"
        dense
      />
    </q-card-section>

    <!-- Converted Colors -->
    <q-card-section>
      <div><strong>HEX:</strong> {{ hex }}</div>
      <div><strong>RGB:</strong> {{ rgbColor }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      hex: "#FF5733",
      rgbInput: "255, 87, 51",
      rgbColor: "rgb(255, 87, 51)",
    };
  },
  watch: {
    hex(newHex) {
      this.convertHexToRgb(newHex);
    },
    rgbInput(newRgb) {
      this.convertRgbToHex(newRgb);
    },
    rgbColor(newbg) {
      this.rgbColor = newbg;
    },
  },
  methods: {
    convertHexToRgb(hex) {
        console.log('convertHexToRgb')
      if (!hex || !/^#[0-9A-Fa-f]{6}$/.test(hex)) return;

      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

      this.rgbColor = `rgb(${r}, ${g}, ${b})`;
      this.rgbInput = `${r}, ${g}, ${b}`;
    },

    convertRgbToHex(rgb) {
        console.log('convertRgbToHex')

      const rgbValues = rgb.match(/^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/);

      if (!rgbValues) return;

      const r = parseInt(rgbValues[1]);
      const g = parseInt(rgbValues[2]);
      const b = parseInt(rgbValues[3]);

      if ([r, g, b].some((val) => val < 0 || val > 255)) return;

      this.hex = `#${this.componentToHex(r)}${this.componentToHex(
        g
      )}${this.componentToHex(b)}`;
      this.rgbColor = `rgb(${r}, ${g}, ${b})`;
    },

    componentToHex(c) {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    },
  },
  mounted() {
    this.convertHexToRgb(this.hex);
  },
};
</script>

<style scoped>
.q-page {
  min-height: 100vh;
  transition: background-color 0.5s ease;
}
</style>
