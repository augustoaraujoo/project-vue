<template>
  <header class="home">
    <aside class="aside_container">
      <div class="aside_elements">
        <ButtonStyleAside
          txtButton="DashbBoard"
          imageProps="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNSAxOWgtNHYtNGg0djR6bTYgMGgtNHYtOGg0djh6bTYgMGgtNHYtMTNoNHYxM3ptNiAwaC00di0xOWg0djE5em0xIDJoLTI0djJoMjR2LTJ6Ii8+PC9zdmc+"
        />
        <ButtonStyleAside
          txtButton="Profile"
          imageProps="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgNy4wMDFjMCAzLjg2NS0zLjEzNCA3LTcgN3MtNy0zLjEzNS03LTdjMC0zLjg2NyAzLjEzNC03LjAwMSA3LTcuMDAxczcgMy4xMzQgNyA3LjAwMXptLTEuNTk4IDcuMThjLTEuNTA2IDEuMTM3LTMuMzc0IDEuODItNS40MDIgMS44Mi0yLjAzIDAtMy44OTktLjY4NS01LjQwNy0xLjgyMi00LjA3MiAxLjc5My02LjU5MyA3LjM3Ni02LjU5MyA5LjgyMWgyNGMwLTIuNDIzLTIuNi04LjAwNi02LjU5OC05LjgxOXoiLz48L3N2Zz4="
        />
        <ButtonStyleAside
          txtButton="Maps"
          imageProps="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtMy4xNDggMC02IDIuNTUzLTYgNS43MDIgMCA0LjY4MiA0Ljc4MyA1LjE3NyA2IDEyLjI5OCAxLjIxNy03LjEyMSA2LTcuNjE2IDYtMTIuMjk4IDAtMy4xNDktMi44NTEtNS43MDItNi01LjcwMnptMCA4Yy0xLjEwNSAwLTItLjg5NS0yLTJzLjg5NS0yIDItMiAyIC44OTUgMiAyLS44OTUgMi0yIDJ6bTEyIDE2bC02LjcwNy0yLjQyNy01LjI5MyAyLjQyNy01LjU4MS0yLjQyNy02LjQxOSAyLjQyNyA0LTkgMy45Ni0xLjU4NGMuMzguNTE2Ljc0MSAxLjA4IDEuMDYxIDEuNzI5bC0zLjUyMyAxLjQxLTEuNzI1IDMuODggMi42NzItMS4wMSAxLjUwNi0yLjY4Ny0uNjM1IDMuMDQ0IDQuMTg5IDEuNzg5LjQ5NS0yLjAyMS40NjUgMi4wMjQgNC4xNS0xLjg5LS42MTgtMy4wMzMgMS41NzIgMi44OTYgMi43MzIuOTg5LTEuNzM5LTMuOTc4LTMuNTgxLTEuNDE1Yy4zMTktLjY1LjY4MS0xLjIxNSAxLjA2Mi0xLjczMWw0LjAyMSAxLjU4OCAzLjkzNiA5eiIvPjwvc3ZnPg=="
        />
        <ButtonStyleAside
          txtButton="Logout"
          imageProps="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMSAyMWg4di0ybDEtMXY0aC05djJsLTEwLTN2LTE4bDEwLTN2Mmg5djVsLTEtMXYtM2gtOHYxOHptMTAuMDUzLTlsLTMuMjkzLTMuMjkzLjcwNy0uNzA3IDQuNSA0LjUtNC41IDQuNS0uNzA3LS43MDcgMy4yOTMtMy4yOTNoLTkuMDUzdi0xaDkuMDUzeiIvPjwvc3ZnPg=="
        />
      </div>
    </aside>
    <nav>
      <header class="header_container_dashbBoard">
        <div id="p_dashbBoard">
          <p>DashbBoard</p>
        </div>
        <div id="div_dashbBoard">
          <input
            type="text"
            v-model="color"
            placeholder="color"
            @keyup="mudarBackground"
          />
          <p>🏬</p>
          <p>📩</p>
          <p>💁</p>
        </div>
      </header>
      <div class="elements_nav">
        <ButtonGrafic txtButtonGrafic="gap1" />
        <p v-for="api in api_infos" :key="api">{{ api.ask }}</p>
      </div>
      <div class="elements_nav_end">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          consectetur. Voluptatem consectetur deleniti ipsa nam delectus
          sapiente! Repellat porro dolor quisquam magni nemo ratione inventore
          laboriosam quis repellendus, consequuntur tempora? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Reiciendis quas aperiam cum
          itaque! Excepturi non perferendis ipsam dignissimos numquam
          consequuntur, eveniet voluptate impedit porro temporibus culpa omnis
          quia quisquam reiciendis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aperiam voluptatum sequi, similique aliquam ipsa
          fugiat expedita sint fugit, facilis neque dolorum vitae debitis
          mollitia consectetur ad nobis excepturi, officia sapiente?.
        </p>
      </div>
    </nav>
  </header>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import ButtonStyleAside from "../components/buttons/ButtonStyleAside.vue";
import ButtonGrafic from "../components/buttons/ButtonGrafic.vue";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      api_infos: null,
      color: ``,
    };
  },
  mounted() {
    this.getApi();
  },

  methods: {
    async getApi() {
      try {
        axios
          .get(`https://economia.awesomeapi.com.br/USD-BRL/1`)
          .then((response) => {
            this.api_infos = response.data;
            console.log(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    },
    mudarBackground() {
      let home = document.querySelector(`.home`);
      home.style.backgroundColor = this.color;
    },
  },
  components: {
    HelloWorld,
    ButtonStyleAside,
    ButtonGrafic,
  },
};
</script>
<style scoped>
.home {
  background: #eeeeee;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas: "aside_container" "nav";
  grid-template-columns: 20% 1fr;
}
.aside_container {
  height: 100vh;
  background: #050917;
  grid-area: "aside_container";
}
.aside_elements {
  padding: 5px;
  width: auto;
  height: 100vh;
}
nav {
  grid-area: "nav";
}
.elements_nav {
  padding: 5px;
  height: 1fr;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.elements_nav_end {
  background: rgb(30, 57, 58);
  padding: 5px;
  height: 1fr;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.header_container_dashbBoard {
  background: #eeeeee;
  height: 15vh;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}
#div_dashbBoard {
  width: 50%;
  display: flex;
  margin-left: auto;
  justify-content: space-evenly;
}
#div_dashbBoard > p {
}

.header_container_dashbBoard > #p_dashbBoard {
  width: 16%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
