<template>
  <header id="container">
    <div id="ButtonGrafic">
      <p>Daily Sales</p>
    </div>
    <div id="ButtonGrafic">
      <div>
        <p>{{ txtButtonGrafic }}</p>
      </div>
    </div>
    <div id="ButtonGrafic">
      <p>{{ txtButtonGrafic }}</p>
    </div>
    <div id="ButtonGrafic">
      <p>{{ txtButtonGrafic }}</p>
      <p>gra</p>
    </div>
    <div id="ButtonGrafic">
      <p>{{ txtButtonGrafic }}</p>
      <p>gra</p>
    </div>
    <div id="ButtonGrafic">
      <p>{{ txtButtonGrafic }}</p>
      <p>gra</p>
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
#ButtonGrafic:nth-child(1) {
  background: rgb(250, 250, 250);
}
#ButtonGrafic:nth-child(2) {
  background: rgb(162, 0, 255);
}
#ButtonGrafic:nth-child(3) {
  background: rgb(179, 255, 0);
}

#ButtonGrafic:nth-child(4) {
  background: red;
  height: 190px;
}

#ButtonGrafic:nth-child(5) {
  background: rgb(0, 255, 106);
  height: 190px;
}
#ButtonGrafic:nth-child(6) {
  background: rgb(0, 102, 255);
  height: 190px;
}
</style>
