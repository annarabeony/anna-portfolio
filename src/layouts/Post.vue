<template>
<div class="layout">
       
    <Header bg="#FFFFFF" />
    <slot></slot>
    <Footer hasContact="false" />
       
</div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default {
      data() {
        return {
            settings: require("../../data/theme.json")
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>


<style lang="scss" >

.image_container{
    position: relative;
    padding-bottom: 70%;
    overflow: hidden;
    border-radius: 3px;
    margin: 2rem 0;
    background: #FAFAFA;
    img{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        object-fit: cover;
    }
}


</style>
