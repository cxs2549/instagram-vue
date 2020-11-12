<template>
    <div id="app">
        <svg-sprite />
        <navbar-sm />
        <navbar-md />
        <navbar-lg />
        <stories />
        <posts />
        <sidebar />
        <bottombar />
    </div>
</template>

<script>
export default {
    name: "App",
}
</script>

<style lang="scss">
#app {
    display: grid;
    grid-gap: 0;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 54px 118px auto;
    grid-template-areas:
        "."
        "stories"
        "posts";
    @include split {
        grid-gap: 2rem;
    }
    @include md {
        grid-template-columns: 1fr;
        grid-template-areas:
            "nav"
            "stories"
            "posts";
    }
    @include lg {
        grid-gap: 1.5rem 2rem;
        grid-template-columns: 1fr 614px 293px 1fr;
        grid-template-areas:
            "nav nav nav nav"
            ". stories side ."
            ". posts side .";
    }
}
</style>
