<template>
    <div id="posts">
        <post
            v-for="post in posts"
            :key="post"
            :avatar="post.avatar"
            :username="post.username"
            :location="post.location"
            :image="post.image"
        />
    </div>
</template>

<script>
import Post from "./Post"
export default {
    components: { Post },
    data() {
        return {
            posts: [
                {
                    avatar: "https://randomuser.me/api/portraits/men/96.jpg",
                    username: "rockmclean",
                    location: "Queens",
                    image: "http://unsplash.it/600?random&gravity=center",
                },
                {
                    avatar: "https://randomuser.me/api/portraits/men/98.jpg",
                    username: "alexreeves",
                    location: "Baltimore, MD",
                    image: "http://unsplash.it/601?random&gravity=center",
                },
                {
                    avatar: "https://randomuser.me/api/portraits/men/99.jpg",
                    username: "danieljaeggi",
                    location: "Silver Spring, MD",
                    image: "http://unsplash.it/602?random&gravity=center",
                },
            ],
        }
    },
}
</script>

<style lang="scss">
#posts {
    grid-area: posts;
    background: transparent;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 614px;
    margin-bottom: 70px;
    @include split {
        margin-bottom: 0;

        border-radius: 4px;
        margin-top: -0.55rem;
    }
    @include xl {
        margin-top: 0.75rem;
    }
}
</style>
