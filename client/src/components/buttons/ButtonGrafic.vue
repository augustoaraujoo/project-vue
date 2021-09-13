<template>
  <div id="ButtonGrafic">
    <p>{{ txtButtonGrafic }}</p>
  </div>
</template>

<script>
export default {
  props: {
    txtButtonGrafic: Text
  }
};
</script>

<style scoped>
#ButtonGrafic {
  display: flex;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 230px;
  margin: 10px;
  border-radius: 0.2rem;
}
</style>
