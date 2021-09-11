<template>
  <div>
    <router-link to="/DashBoard">DashBoard</router-link>
    <form @submit.prevent>
      <input
        type="number"
        @keypress.enter="AddValueInArray(inputValue)"
        v-model="inputValue.num"
      />
      <button @click="AddValueInArray(inputValue)">dddd</button>
      <li v-for="arr in array" :key="arr">{{ arr }}</li>
    </form>
    <div>
      <p>Possui livros publicados:</p>
      <span>{{ publishedBooksMessage }}</span>
    </div>
    <div>
      <!-- <app-input :msg="message" @messageChanged="message = $event"></app-input> -->
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
  data() {
    return {
      inputValue: {
        num: "",
      },
      array: [],

      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Guia Avançado",
          "Vue 3 - Guia Básico",
          "Vue 4 - O Mistério",
        ],
      },
    };
  },
  components: {
    HelloWorld
      },
  methods: {
    AddValueInArray(inputValue) {
      this.inputValue.num === "" ? false : this.array.push(this.inputValue.num);
      this.inputValue.num = "";
      // this.$router.push("/DashBoard");
      if (this.array.length > 1) {
        return this.array.splice(this.inputValue.num, 1);
      }
    },
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? "S" : "N";
    },
  },
};
</script>
