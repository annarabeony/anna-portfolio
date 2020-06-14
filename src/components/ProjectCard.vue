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

<style>

</style>