<template>
    <g-link to="/" class="fixed_header bg-grey" :style="{'background':bg}">
        <img src="/icons/logo.svg" alt="">
    </g-link>
</template>

<script>
export default {
    props:['bg'],
    data(){
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style lang="scss" >
.header {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.fixed_header {
  padding: 1.5rem 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
