<template>
  <div class="Container_Style_Aside">
    <img
      id="img_Button"
      src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png"
      alt=""
    />
    <button id="Button_Style_Aside">
      {{ txtButton }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    txtButton: Text,
  },
};
</script>

<style scoped>
*{
color: #fff;
}
.Container_Style_Aside {
  cursor: pointer;
  background: #172C72;
  border-radius: 3px;
  padding: 5px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
#Button_Style_Aside {
  background: transparent;
  position: relative;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  width: 80%;
  height: 45px;
  margin: 0 auto;
}
#img_Button {
  width: auto;
  height: 30px;
}
</style>
