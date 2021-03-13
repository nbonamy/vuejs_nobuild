<template>
  <p>{{ greeting }} {{ name }}!</p>
</template>

<script>
module.exports = {
  props: [ 'name' ],
  data: function () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
