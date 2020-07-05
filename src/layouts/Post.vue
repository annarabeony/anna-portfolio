<template>
<div class="layout">
       
    <Header bg="#FFFFFF" />
    <transition name="fade" appear>
        <div>
             <slot></slot>
        </div>
    </transition>
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
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
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

.next{
  margin: 4rem 0 0 0;
  display: flex;
   align-items: center;
  flex-direction: row;
  border-top: 2px solid #FAFAFA;
  background: #FAFAFA;
  border-radius: 6px;
  padding: 30px 40px;
  @media screen and (max-width: 500px) {
    padding: 20px 20px;
    flex-direction: column;
    align-items: flex-start;
  }
 
  justify-content: space-between;
  position: relative;
  box-shadow: 0px 9.51638px 16.5284px rgba(0, 0, 0, 0.0), 0px 76px 0px rgba(0, 0, 0, 0.0);
  transition: all .4s ease-in-out;
  &:hover{
    box-shadow: 0px 9.51638px 16.5284px rgba(0, 0, 0, 0.035), 0px 76px 90px rgba(0, 0, 0, 0.07);
  }
  .v-stack{
    display: flex;
    flex-direction: column;
    
    h2{
      margin: 0;
      padding: 0 0 1rem;
       @media screen and (max-width: 500px) {
        padding: 0 0 0 0;
      }
    }
    p{
      max-width: 80%;
      @media screen and (max-width: 500px) {
        max-width: 100%;
      }
     
    }
  }
  .right-arrow{
     @media screen and (max-width: 500px) {
        display: none;
      }
    height:24px;
    width:24px;
  }
}


</style>
