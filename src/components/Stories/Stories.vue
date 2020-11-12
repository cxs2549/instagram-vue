<template>
    <div id="stories" class="relative flex items-center px-4">
        <div class="box" v-for="face in faces" :key="face">
            <div class="relative flex flex-col items-center justify-center">
                <img class="rounded-full" :src="face.avatar" alt="" />
                <span class="absolute mt-1 text-xs text-center username">{{ face.username }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        faces() {
            return this.$store.state.faces
        },
    },
}
</script>

<style lang="scss">
#stories {
    /* width: 100%; */
    max-width: 100vw;
    border: 1px solid var(--border-color);
    border-bottom: none;
    background: var(--app-color);
    grid-area: stories;
    border-radius: 4px;
    /* width: 100vw; */
    height: 100%;
    z-index: 1;
    flex-wrap: nowrap;
    overflow-x: scroll;
    @include md {
    margin: 0 auto;
        max-width: 614px;
        border-bottom: 1px solid var(--border-color);
    }
    @include xl {
        margin-top: 0.5rem;
        max-width: 614px;
    }

    .box {
        min-width: 64px;
        min-height: 64px;
        max-height: 64px;
        border-radius: 50%;
        margin-top: 7px;
        margin-right: 17px;
        background-color: #a40606;
        background-image: linear-gradient(315deg, #a40606 0%, #d98324 74%);

        margin-bottom: 1.65rem;
        img {
            width: 60px;
            height: 60px;
            margin-top: 0.15rem;
            position: absolute;
            top: -0.02em;
            border: 2px solid var(--app-color);
        }
    }
    .username {
        letter-spacing: 0.01em;
        top: 4rem;
    }
}
</style>
