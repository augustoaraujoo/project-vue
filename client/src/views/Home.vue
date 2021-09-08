<template>
  <header class="home">
    <aside class="aside_container">
      <div class="aside_elements">
        <ButtonStyleAside txtButton="DashbBoard"/>
        
        <ButtonStyleAside txtButton="DashbBoard"/>
        <ButtonStyleAside txtButton="DashbBoard"/>
      </div>
    </aside>
    <nav>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
          nesciunt commodi provident explicabo libero ducimus eligendi suscipit
          itaque aspernatur, aut repellat architecto! Incidunt repudiandae
          consequatur, tempora aliquam ratione aspernatur dolore?
        </p>
      </div>
    </nav>
    <footer>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          a non magnam vel recusandae iusto officia veniam in temporibus. Animi
          dignissimos eaque, quaerat distinctio aliquid ex error ut non
          repudiandae?
        </p>
      </div>
    </footer>
  </header>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import ButtonStyleAside from '../components/buttons/ButtonStyleAside.vue'
export default {
  name: "Home",
  components: {
    HelloWorld,
    ButtonStyleAside
  },
};
</script>
<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-areas: "aside_container" "nav" "footer";
  grid-template-columns: 20% 1fr 1fr;
}
.aside_container {
  height: 100vh;
  background: rgb(245, 237, 237);
  grid-area: "aside_container";
}
.aside_elements{
  display: grid;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}
nav {
  background: rebeccapurple;
  grid-area: "nav";
}
footer {
  background: purple;
  grid-area: "footer";
}
</style>
