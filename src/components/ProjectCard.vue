<template>
    <div class="card_project margin_right" :key="item.id">
        <g-link :to="item.node.path">
            <div class="image_container">
                <img :src="item.node.thumbnail" alt="">
            </div>
            <div class="description">
                <h4 class="courant_italic">{{item.node.title}}</h4>
            </div>
        </g-link> 
    </div>
</template>

<script>
export default {
    props : ['item']
}
</script>

<style lang="scss">
.card_project {
    transition: 0.4s ease;
    .image_container{
        position: relative;
        padding-bottom: 100%;
        overflow: hidden;
        background: #FAFAFA;
        border-radius: 4px;
        img {
           position: absolute;
           top:0;
           left:0;
           right:0;
           bottom:0;
           width:100%;
           object-fit: cover;
        }
    } 
    .description {
        margin: 1rem 0 0 0;
    }
    &:hover {
        transform: translateY(-20px);
        transition: 0.4s ease;
    }
}
</style>