<template>
    <LayoutPost>

        <main class="project_page main">
            <div class="sumup">
                <div class="heading">
                    <h2 class="project_title center">{{$page.post.title}}</h2>
                    <h3 class="date caption center">{{$page.post.project_date}}</h3>
                </div>
                <div class="image_container">
                 <img class="image_summary" :src="$page.post.hero_image" alt="">
                </div>
                <p class="courant_italic content" v-html="intro"></p>
            </div>
            <div class="separator"></div>
            <div class="x-content" v-html="$page.post.content" ></div>
            <g-link :to="this.next_project.node.path" class="next">
               
              <div class="v-stack">
                <h2>Next project</h2>  
                <p class="">{{this.next_project.node.title}}</p>
              </div>
             
               <img src="/icons/arrow_right.svg" class="right-arrow">
            </g-link>
        </main>
   
    </LayoutPost>
</template>

<page-query>
query ProjectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    intro
    date (format:"MMMM YYYY")
    project_date (format:"MMMM YYYY")
    hero_image 
    content
    next_project
  }
   Projects: allProjectPost(sortBy: "project_date", order: DESC) {
        edges {
            node {
                id
                title
                thumbnail
                path
            }
        }
    }
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
   next_project(){
   
      let next =  this.$page.Projects.edges.find(c => {
          return c.node.path === '/' + this.$page.post.next_project.replace('.md','/').replace('.','-').replace('_','-')
      })
        console.log(next)
      return next
    },
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






/*.x-content {}*/
</style>
