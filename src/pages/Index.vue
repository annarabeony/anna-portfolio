<template>
  <Layout>
    <div class="hero bg-grey">
        
        <div class="intro">
            <h2 class="project_title">{{settings.hero_title}}</h2>
            <p class="" v-html="settings.hero_text"></p>
	    
	    <a :href="settings.resume" target="_blank">
	     	<div class="resume_link">
			<p class="resume">Read Resumé</p>
			<img src="/icons/arrow_right.svg" alt="">
	     	</div>
	    </a>
        </div>
	
	

        <div class="scroll bg-grey"> 
            <h5 class="courant_regular opacity_50">Scroll Down</h5>
            <img src="/icons/arrow-down.svg" alt="">
        </div>
    </div>
     <main class="main">

        <!-- main projects-->
        <h1 class="project_title margin-body">Cases Studies</h1>

        <div class="case_studies projects_section grid-col2">
            <ProjectCard v-for="item in CaseStudies" :item="item" :key="item.id"/>
        </div>


        <!-- main projects-->
        <h1 class="project_title margin-body">Experience</h1>

        <div class="case_studies projects_section grid-col2">
            <ProjectCard v-for="item in $page.Experiences.edges" :item="item" :key="item.id"/>
        </div>


        <!-- main projects-->
        <h1 class="project_title margin-body">Side Projects</h1>

        <div class="main_projects projects_section grid-col2">
            <ProjectCard v-for="item in $page.Projects.edges" :item="item" :key="item.id"/>
        </div>
           
       </main>
  </Layout> 
</template>

<page-query>

query Home {
	CaseStudies: allCaseStudyPost(sortBy: "project_date", order: DESC) {
        edges {
            node {
                id
                title
                thumbnail 
                path
            }
        }
    },
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
export default {
    data(){
        return {
            settings: require("../../data/theme.json")
        }
    },
    mounted(){
        let x = this.settings.home_page_case_studies.map(d => {
            let path = '/'+d.replace('.md','/').replace('_','-').replace('.','-')
            let node = this.$page.CaseStudies.edges.find(e => {
                return e.node.path == path
            })
            return node
        })
    },
    computed : {
        CaseStudies(){
            let CaseStudies= this.settings.home_page_case_studies.map(d => {
                let path = '/'+d.replace('.md','/').replace('_','-').replace('.','-')
                let node = this.$page.CaseStudies.edges.find(e => {
                    return e.node.path == path
                })
                return node
            })
            return CaseStudies
        }
    }
}
</script>

<style lang="scss" >
	.resume_link {
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  align-content: center;
	  font-style: italic;
	  padding:2rem 0;
	}
	.resume_link img {
	  align-content: center;
	  align-self: center;
	}
</style>

