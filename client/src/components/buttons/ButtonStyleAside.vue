<template>
  <div class="Container_Style_Aside">
    <img id="img_Button" :src="c" />
    <button id="Button_Style_Aside">
      <p>{{ txtButton }}</p>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    txtButton: Text,
    c: Image,
  },
};
</script>

<style scoped>
* {
  color: #fff;
}
.Container_Style_Aside {
  cursor: pointer;
  background: #172c72;
  border-radius: 3px;
  padding: 5px;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
#Button_Style_Aside {
  background: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  width: 50%;
  height: 45px;
  margin-right: auto;
}
#Button_Style_Aside >p{
  background: rgba(255, 0, 0, 0.349);
  font-size:18px;
}
#img_Button {
  margin-left: auto;
  width: auto;
  height: 30px;
}
</style>
