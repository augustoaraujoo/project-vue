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
  background: rgb(224, 200, 200);
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 230px;
  margin: 10px;
  border-radius: 5px;
}
</style>
