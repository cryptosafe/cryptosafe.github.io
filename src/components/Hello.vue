<template>
  <div class="hello">
    <img class="logo" src="../assets/cryptologo.png">
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>


<style scoped>
.hello {
    margin: auto;
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.logo {
  width: 132px;
  height: 132px;
}
</style>
