<template>
  <div>
    <h1>Welcome to Vue</h1>
  </div>
</template>

<script>
export default {
  name: 'ComponentName',
  data() {
    return {
      message: 'Hello, world!'
    };
  },
  methods: {
    changeMessage() {
      this.message = 'Message updated!';
    }
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>