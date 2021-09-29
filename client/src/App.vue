<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&display=swap");
* {
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
svg{
  cursor:pointer;
}
#app {
  width: 100%;
  height: 100vh;
}
</style>
