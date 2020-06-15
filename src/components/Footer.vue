<template>
    <footer class="footer">
            <div class="contact" v-if="hasContact"> 
                <h2 class="project_title">{{settings.footer_title}}</h2>
                <p class=""  v-html="settings.footer_text" ></p>


                <a :href="settings.resume" target="_blank">
                     <div class="resume_link">
                         <p class="resume">Read Resumé</p>
                         <img src="/icons/arrow_right.svg" alt="">
                 
                     </div>
                </a>

                <div class="social_media">
                     <a href="https://www.instagram.com/anna.rabeony.pro/" target="_blank">
                         <img src="/icons/Instagram.svg" alt="">
                     </a>
                     <a href="https://dribbble.com/AnnaRabeony/" target="_blank">
                         <img src="/icons/Dribbble.svg" alt="">
                     </a>
                     <a href="mailto:contact@anna-rabeony.com" target="_blank">
                         <img src="/icons/Mail.svg" alt="">
                     </a>
                     <a href="https://www.linkedin.com/in/anna-rabeony-747b35149/" target="_blank">
                         <img src="/icons/Linkedin.svg" alt="">
                     </a>
                     <a href="https://medium.com/@anna.rabeony.pro" target="_blank">
                         <img src="/icons/Medium.svg" alt="">
                     </a>
                </div>
 
            </div>
            <div class="credit">
                <h5 class="footer_italic center" >{{settings.copyright}}</h5>
            </div>
        </footer>
</template>

<script>

export default {
    props: {
        hasContact : String,
        default: 'true'
    },
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style lang="scss" >
/* Footer */
.footer {
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 28vw 0 28vw;
}

.footer .contact .project_title {
  margin: 0 0 1rem 0;
}

.footer .contact .resume_link {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  font-style: italic;
}

.footer .contact .resume_link img {
  margin: 0.3rem 0 0 0.5rem;
  align-content: center;
  align-self: center;
}

.footer .social_media {
  margin: 50px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
}

.credit {
  padding: 2rem 0;
  margin: 6rem 0 0 0;
}

</style>
