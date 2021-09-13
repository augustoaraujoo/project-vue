<template>
  <header id="container">
    <div id="ButtonGrafic">
      <p>{{ txtButtonGrafic }}</p>
    </div>
    <div id="ButtonGrafic">
      <div>
        <p>dsadasd</p>
        <p>{{ txtButtonGrafic }}</p>
      </div>
    </div>
    <div id="ButtonGrafic">
      <p>{{ txtButtonGrafic }}</p>
    </div>
    <div id="ButtonGrafic">
      <p>{{ txtButtonGrafic }}</p>
    </div>
    <div id="ButtonGrafic">
      <p>{{ txtButtonGrafic }}</p>
    </div>
    <div id="ButtonGrafic">
      <p>{{ txtButtonGrafic }}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    txtButtonGrafic: Text,
  },
};
</script>

<style scoped>
#container {
  padding: 5px;
  height: 1fr;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
#ButtonGrafic {
  display: flex;
  background: #d4cdcd;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  width: 350px;
  height: 230px;
  margin: 10px;
  border-radius: 0.2rem;
}
</style>
