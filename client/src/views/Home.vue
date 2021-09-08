<template>
  <header class="home">
    <aside class="aside_container">
      <div class="aside_elements">
        <ButtonStyleAside txtButton="DashbBoard" />
        <ButtonStyleAside txtButton="DashbBoard" />
        <ButtonStyleAside txtButton="DashbBoard" />
      </div>
    </aside>
    <nav>
      <div class="elements_nav">
        <ButtonGrafic txtButtonGrafic="gap1" />
        <ButtonGrafic txtButtonGrafic="gap2" />
        <ButtonGrafic txtButtonGrafic="gap3" />
        <ButtonGrafic txtButtonGrafic="gap4" />
        <ButtonGrafic txtButtonGrafic="gap5" />
      </div>
      <div class="elements_nav">
        <p>
        <ButtonGrafic txtButtonGrafic="gap5" />
        </p>
      </div>
    </nav>
    <!-- <footer>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          a non magnam vel recusandae iusto officia veniam in temporibus. Animi
          dignissimos eaque, quaerat distinctio aliquid ex error ut non
          repudiandae?
        </p>
      </div>
    </footer> -->
  </header>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import ButtonStyleAside from "../components/buttons/ButtonStyleAside.vue";
import ButtonGrafic from "../components/buttons/ButtonGrafic.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    ButtonStyleAside,
    ButtonGrafic,
  },
};
</script>
<style scoped>
.home {
  background: #fff;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: "aside_container" "nav" ;
  grid-template-columns: 20% 1fr ;
}
.aside_container {
  height: 100vh;
  background: #050917;
  grid-area: "aside_container";
}
.aside_elements {
  width: auto;
  height: auto;
  margin: 5px;
  margin-right: 10px;
}
nav {
  grid-area: "nav";
}
.elements_nav {
  background: rgb(112, 132, 133);
  padding: 5px;
  height: 50vh;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
}


</style>
