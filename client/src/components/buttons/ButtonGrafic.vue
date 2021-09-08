<template>
  <div id="ButtonGrafic">
    <a>{{ txtButtonGrafic }}</a>
  </div>
</template>

<script>
export default {
  props: {
    txtButtonGrafic: Text,
  },
};
</script>

<style scoped>
#ButtonGrafic {
  display: flex;
  background: rgb(255, 255, 255);
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 120px;
  margin: 10px;
  border-radius: 5px;
}
</style>
