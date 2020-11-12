<template>
    <div class="comments">
        <div class="flex items-center justify-between px-3 pt-1">
            <div class="flex">
                <svg-icon v-for="icon in icons" :key="icon" :icon="icon" class="mr-5" />
            </div>
            <div class="text-2xl"><i class="fa fa-bookmark-o" aria-hidden="true"></i></div>
        </div>
        <div class="flex px-3">
            <img class="w-5 h-5 mr-2 rounded-full" :src="faces[0].avatar" alt="" />
            Liked by
            <span class="font-semibold username-span"> {{ faces[0].fullUsername }} </span> and
            <span class="font-semibold username-span">24,530 others</span>
        </div>
        <div class="px-3">
            <span class="font-semibold">{{ username }}</span> <span>fly me away ✈️</span>
        </div>
        <div class="px-3 cursor-pointer text-gray-dim">View all 192 comments</div>
        <div class="flex items-center justify-between px-3">
            <div><span class="font-semibold">sanjayalee</span> <span>👏🏻🔥🔥🔥</span></div>
            <div class="text-xs"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
        </div>
        <div class="flex items-center justify-between px-3">
            <div><span class="font-semibold">rudygo</span> <span> 👏👏👏👏😘😘</span></div>
            <div class="text-xs"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
        </div>
        <div class="px-3 mb-1 text-teeny text-gray-dim">1 DAY AGO</div>
        <div class="flex items-center justify-between px-3 add-comment placeholder-gray-dim">
            <input class="bg-transparent outline-none" type="text" placeholder="Add a comment..." />
            <span class="font-semibold text-blue-300">Post</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ["username"],
    data() {
        return {
            icons: ["likes", "comment", "direct"],
        }
    },
       computed: {
        faces() {
            return this.$store.state.faces
        },
    },
}
</script>

<style lang="scss">
.comments {
    display: grid;
    align-items: center;
    grid-template-rows: auto repeat(7, auto);
    grid-gap: 0.3rem;
}
.box {
    margin-top: 1.75rem;
    min-width: 44px;
    min-height: 44px;
    max-height: 44px;
    border-radius: 50%;
    background-color: #a40606;
    background-image: linear-gradient(315deg, #a40606 0%, #d98324 74%);
    margin-bottom: 1.65rem;
    img {
        margin-top: 0.15rem;
        /* margin-bottom: 4px; */
        position: absolute;
        bottom: 0.15rem;
        border: 2px solid var(--app-color);
    }
}
.username-span {
    margin: 0 3.5px;
}
.add-comment {
    height: 56px;
    display: flex;
    align-items: center;
    border-top: 1px solid var(--border-color);
}
</style>
