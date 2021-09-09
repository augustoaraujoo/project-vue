<template>
  <!-- https://vuejsbr-docs-next.netlify.app/guide/computed.html#exemplo-basico -->
<div id="computed-basics">
  <p>Possui livros publicados:</p>
  <span>{{ publishedBooksMessage }}</span>
</div>
</template>

<script>
export default {
 data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Guia Avançado',
          'Vue 3 - Guia Básico',
          'Vue 4 - O Mistério'
        ]
      }
    }
  },
  computed: {
    // uma função "getter" computada (computed getter)
    publishedBooksMessage() {
      // `this` aponta para a instância Vue `vm` de `Vue.createApp(...)`
      return this.author.books.length > 0 ? console.log("s"): console.log("s");
    }
  }
};
</script>

<style></style>
