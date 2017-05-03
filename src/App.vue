<template>
    <hello></hello>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
@import '../node_modules/kickstart-node/css/kickstart.css';

html, body {
    margin: 0;
    height: 100%;
}

body {
  background-color: #2e5785;
}

#app {
  text-align: center;
  min-height: 100%;
}

</style>
