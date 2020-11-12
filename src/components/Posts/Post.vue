<template>
    <div id="post">
        <Header :avatar="avatar" :username="username" :location="location" />
        
        <div class="post-image">
            <img :src="image" class="w-full" alt="" />
        </div>
        
        <Comments :username="username" />
    </div>
</template>

<script>
import Header from './Header'
import Comments from './Comments'
export default {
    components: {Header, Comments},
    props: ["avatar", "username", "location", "image"],
 
    computed: {
        faces() {
            return this.$store.state.faces
        },
    },
}
</script>

<style lang="scss">
#post {
    width: 100%;
    display: grid;
    background: var(--app-color);
    border-top: 1px solid var(--border-color);
    grid-template-rows: 60px auto auto;
    @include split {
        margin-bottom: 3.75rem;
        border: 1px solid var(--border-color);
        border-radius: 4px;
    }
   
    .post-image {
        object-fit: cover;
    }
    
}
</style>
