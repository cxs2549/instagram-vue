<template>
    <div id="navbar-lg" class="px-4">
        <div class="mt-1 logo">
            <img src="../../assets/images/logo.png" alt="" />
        </div>
        <div class="relative search">
            <input type="search" placeholder="Search" class="placeholder-gray-dim" />
            <svg-icon icon="search" class="absolute search-icon" />
        </div>
        <div class="flex icons">
            <svg-icon :icon="icon" v-for="icon in icons" :key="icon" class="mr-5" />
            <theme-switcher />
            <img class="rounded-full profile-img" src="../../assets/images/profile.jpg" alt="" />
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
#navbar-lg {
    display: none;
    position: fixed;
    height: 54px;
    z-index: 100;
    width: 100vw;
    grid-area: nav;
    background: var(--app-color);
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    @include lg {
        display: grid;
        grid-template-columns: 1fr 360px 215px 360px 1fr;
        grid-template-areas: ". logo search icons .";
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
            left: 0.6rem;
            top: 50%;
            width: 1.25rem;
            transform: translateY(-50%);
            color: var(--search-color);
        }
    }
    .icons {
        grid-area: icons;
        justify-self: end;
    }
    .profile-img {
        width: 24px;
        height: 24px;
    }
}
</style>
