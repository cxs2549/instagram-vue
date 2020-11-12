<template>
    <div id="sidebar" class="grid">
        <div class="fixed mt-1 fixed-wrap">
            <div class="flex items-center mt-4 avatar-info">
                <img class="rounded-full " src="../../assets/images/profile.jpg" alt="" />
                <div class="flex flex-col ml-4 leading-5">
                    <div class="font-semibold">cxs86</div>
                    <div class="text-gray-dim">Cliff S</div>
                </div>
            </div>

            <div class="flex items-center justify-between text-sm font-semibold suggest ">
                <div class="text-gray-dim">Suggestions for you</div>
                <span class="text-xs font-semibold">See All</span>
            </div>

            <div v-for="(face, index) in 5" :key="face" class="flex items-center justify-between">
                <div class="flex items-center">
                    <img
                        class="w-8 h-8 rounded-full"
                        :src="faces[index + 7].avatar"
                        alt=""
                    />
                    <div class="flex flex-col ml-3 font-semibold name-info">
                        <span>{{faces[index + 7].fullUsername}}</span>
                        <div class="mt-1 text-xs font-normal text-gray-dim">{{faces[index + 7].info}}</div>
                    </div>
                </div>
                <div class="text-xs font-semibold text-blue-600 cursor-pointer">Follow</div>
            </div>

            <ul class="flex flex-wrap mt-2 leading-5 text-tiny text-gray-dim">
                <li v-for="link in links" :key="link" class="capitalize cursor-pointer">
                    {{ link }}
                </li>
            </ul>
            <footer class="text-tiny text-gray-dim">&copy; 2020 SuperVision Design</footer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                "about",
                "help",
                "press",
                "jobs",
                "privacy",
                "terms",
                "locations",
                "top accounts",
                "hashtags",
                "language",
            ],
        }
    },
    computed: {
        faces() {
            return this.$store.state.faces
        }
    }
}
</script>

<style lang="scss">
#sidebar {
    display: none;
    /* margin-left: auto; */
    grid-area: side;
    max-width: 293px;
    max-height: 416px;
    border-radius: 4px;
    height: 100%;
    width: 100%;

    @include lg {
        display: grid;
    }
    @include xl {
        left: 950px;
        margin-top: 0.75rem;
    }
    .fixed-wrap {
        max-width: 293px;
        max-height: 416px;
        display: grid;
        grid-template-rows: 74px 18px repeat(5, auto) 36px 13px;
        grid-template-columns: 1fr;
        grid-gap: 1.2rem;
    }
    .avatar-info {
        img {
            width: 60px;
            height: 60px;
        }
    }
    ul {
        li::after {
            padding-right: 0.3rem;
            content: "\00B7";
            padding-left: 0.25rem;
        }
        li:last-child::after {
            content: "";
        }
    }
    .name-info {
        line-height: 1em;
    }
}
</style>
