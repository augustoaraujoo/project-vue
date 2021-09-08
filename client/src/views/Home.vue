<template>
  <div>
    <router-link to="/DashBoard">DashBoard</router-link>
    <p>home</p>
    <form @submit.prevent>
      <input type="number" v-model="inputValue.num" />
      <button @click="AddValueInArray(inputValue)">dddd</button>
      <li v-for="arr in array" :key="arr">{{ arr }}</li>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: {
        num: "",
      },
      array: [],
    };
  },
  methods: {
    AddValueInArray(inputValue) {
      this.inputValue.num === "" ? false : this.array.push(this.inputValue.num);
      this.inputValue.num = "";
    },
  },
};
</script>

<style></style>
