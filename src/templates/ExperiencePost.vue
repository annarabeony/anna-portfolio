<template>
    <LayoutPost>
        <main class="project_page main">
            <div class="sumup">
                <div class="heading">
                    <h2 class="project_title center">{{$page.post.title}}</h2>
                    <h3 class="date caption center">{{$page.post.project_start}} - {{$page.post.project_end}}</h3>
                </div>
                <div class="image_container">
                  <img class="image_summary" :src="$page.post.hero_image" alt="">
                </div>
               
                <p class="courant_italic content" v-html="intro"></p>
            </div>
            <div class="separator"></div>
            <div class="content" v-html="$page.post.content">
                
            </div>
           
        </main>

    </LayoutPost>
</template>

<page-query>
query ExperiencePost ($path: String!) {
  post: experiencePost (path: $path) {
    title
    intro
    date (format:"MMMM DD, YYYY")
    project_start (format:"MMMM YYYY")
    project_end (format:"MMMM YYYY")
    hero_image
    content

  }
   Experiences: allExperiencePost(sortBy: "project_start", order: DESC) {
        edges {
            node {
                id
                title
                thumbnail 
                path
            }
        }
    },
}
</page-query>

<script>
import MarkdownIt from 'markdown-it'
const  md = new MarkdownIt();
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'author',
          content: 'Anna Rabeony'
        },
         {
          name: 'description',
          content: this.$page.post.intro
        },{
          name : 'robots',
          content : "index, follow"
        }
      ],
    }
  },
  computed: {
    intro(){
      return md.render(this.$page.post.intro)
    }
  }
}
</script>

<style scoped>
.project-header {
  padding: 20vh 0 4rem 0;
}
.project-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.project-info > div {
  margin-right: 4rem;
}
.project-info > div:last-of-type {
  margin: 0;
}
.category:after {
  content: ', '
}
.category:last-of-type:after {
  content: '';
}





</style>
