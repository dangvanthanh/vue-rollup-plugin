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

<style>
</style>