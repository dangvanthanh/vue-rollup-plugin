<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'VueBase',
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