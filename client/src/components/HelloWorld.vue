<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    valorFinal:{
          a:1,
          b:2
      }
  }
}
</script>

<style scoped lang="scss">

</style>
