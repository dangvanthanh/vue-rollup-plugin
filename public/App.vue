<template>
  <div class="app">
    <div><Base msg="Base component" /></div>
    <div><Base msg="Hot module reload base component" /></div>
  </div>
</template>

<script>
import Base from '../src/Index.vue'

export default {
  name: 'App',
  components: { Base },
}
</script>

<style>
body {
  height: 100%;
  margin: 0;
}

.app {
  color: #444;
  max-width: 600px;
  font-family: Helvetica, sans-serif;
  margin: 60px auto 0;
}
</style>