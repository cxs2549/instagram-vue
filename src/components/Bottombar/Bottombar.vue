<template>
    <div id="bottombar" class="flex items-start justify-between px-5 pt-3">
        <div>
            <svg-icon icon="home" />
        </div>
        <div>
            <svg-icon icon="search" />
        </div>
        <div class="text-xl">
            <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
        <div>
            <svg-icon icon="likes" />
        </div>
        <img src="../../assets/images/profile.jpg" class="w-8 h-8 rounded-full" alt="">
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#bottombar {
    position: fixed;
    background: var(--app-color);
    border-top: 1px solid var(--border-color);
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    @include md {
        display: none;
    }
}
</style>
