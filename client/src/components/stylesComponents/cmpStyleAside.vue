<template>
  <div
    class="Container_Style_Aside">
    <img id="img_Button" :src="imageProps" />
    <button id="Button_Style_Aside">
      <p>{{ txtButton }}</p>
    </button>
  </div>
</template>

<script>
import "aos/dist/aos.css";
export default {
  data() {
    return {
    activeColor: 'red',
    };
  },
  props: {
    txtButton: Text,
    imageProps: Image,
  },
};
</script>

<style scoped>
#check{
  color: red;
}
.Container_Style_Aside {
  cursor: pointer;
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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  width: 50%;
  height: 45px;
  margin: 0 auto;
}
#Button_Style_Aside > p {
  font-size: 18px;
  font-weight:600;
  color: rgb(36, 35, 35);
}
#img_Button {
  margin-left: auto;
  width: auto;
  height: 30px;
}
</style>
