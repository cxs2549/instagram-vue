<template>
    <div id="navbar" class="px-4">
        <div class="camera text-2xl">
            <i class="fa fa-camera" aria-hidden="true"></i>
        </div>
        <div class="logo mt-1">
            <img src="../../assets/images/logo.png" alt="" />
        </div>

        <div class="direct flex">
            <theme-switcher />
            <svg-icon icon="direct" />
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#navbar {
    display: grid;
    grid-area: nav;
    position: fixed;
    height: 54px;
    width: 100vw;
    z-index: 100;
    grid-template-areas: "camera logo direct";
    background: var(--app-color);
    grid-template-columns: 90px 1fr 90px;
    align-items: center;
    @include split {
        border-bottom: 1px solid var(--border-color);
    }
    @include md {
        display: none;
    }
    .camera {
        grid-area: camera;
    }
    .logo {
        grid-area: logo;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: var(--logo);
    }

    .direct {
        grid-area: direct;
        justify-self: end;
        @include md {
            display: none;
        }
    }
}
</style>
