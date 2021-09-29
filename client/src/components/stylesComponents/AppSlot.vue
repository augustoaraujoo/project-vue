<template>
  <div id="div_DashBoard">
    <slot>
      <img :src="Image" />
    </slot>
  </div>
</template>
<script>
export default {
  name: "slot",
  props: {
    title: {},
    Image: {
      type: Image,
      default: "",
    },
  },
};
</script>
<style>
#div_DashBoard {
  width: 48%;
  display: flex;
  margin-left: auto;
  justify-content: space-evenly;
}
#div_DashBoard > img {
  cursor: pointer;
}
</style>
