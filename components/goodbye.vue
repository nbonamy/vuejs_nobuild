<template>
  <p>{{ greeting }} World!</p>
</template>

<script>
module.exports = {
  data: function () {
    return {
      greeting: 'Goodbye'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
  color: red;
}
</style>
