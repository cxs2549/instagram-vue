<template>
    <div id="navbar-md" class="px-5">
        <div class="logo mt-1">
            <img src="../../assets/images/logo.png" alt="" />
        </div>
        <div class="search relative">
            <input type="search" placeholder="Search" />
            <svg-icon icon='search' class="absolute search-icon" />
        </div>
        <div class="icons flex">
            <svg-icon :icon="icon" v-for="icon in icons" :key="icon" class="mr-5" />
            <theme-switcher />
            <img class="w-6 h-6 rounded-full" src="../../assets/images/profile.jpg" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: ["home", "direct", "find", "likes"],
        }
    },
}
</script>

<style lang="scss">
#navbar-md {
    position: fixed;
    height: 54px;
    z-index: 100;
    display: none;
    width: 100vw;
    grid-area: nav;
    background: var(--app-color);
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    @include md {
        display: grid;
        grid-template-columns: 352px 215px 352px;
        grid-template-areas: "logo search icons";
    }
    @include lg {
        display: none;
    }
    .logo {
        grid-area: logo;
        display: flex;
        align-items: center;
        justify-content: center;
        @include md {
            align-items: flex-start;
            justify-content: start;
        }
        filter: var(--logo);
    }
    .search {
        grid-area: search;
        input {
            min-width: 215px;
            min-height: 32px;
            padding-left: 2.1rem;
            background: var(--input-color);
            border: 1px solid var(--border-color);
            border-radius: 4px;
        }
        .search-icon {
            left: .6rem;
            top: 50%;
            width: 1.25rem;
            transform: translateY(-50%);
        }
    }
    .icons {
        grid-area: icons;
        justify-self: end;
    }
}
</style>
