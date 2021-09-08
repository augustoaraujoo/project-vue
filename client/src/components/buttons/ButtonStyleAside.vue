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

<style>
.Container_Style_Aside {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
#Button_Style_Aside {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgb(19, 18, 17);
  width: 10vw;
  height: 50px;
}
#img_Button {
  margin-left:auto ;
  width: auto;
  height: 30px;
}
</style>
