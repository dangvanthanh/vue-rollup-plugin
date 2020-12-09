<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Base',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.25rem;
  line-height: 1.1;
}
</style>