<template>
    <div>
        <input type="checkbox" id="theme-switch" class="theme-switch" v-model="darkMode" />
        <label for="theme-switch">
            <span>
                <img
                    class="mr-5 opacity-75 cursor-pointer lights"
                    alt="logo"
                    src="https://cdn1.iconfinder.com/data/icons/user-interface-16x16-vol-1/16/contrast-circle-512.png"
                    width="21"
                />
            </span>
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            darkMode: false,
        }
    },
    mounted() {
        // check for active theme
        let htmlElement = document.documentElement
        let theme = localStorage.getItem("theme")

        if (theme === "dark") {
            htmlElement.setAttribute("theme", "dark")
            this.darkMode = true
        } else {
            htmlElement.setAttribute("theme", "light")
            this.darkMode = false
        }
    },
    watch: {
        darkMode: function() {
            // add/remove class to/from html tag
            let htmlElement = document.documentElement

            if (this.darkMode) {
                localStorage.setItem("theme", "dark")
                htmlElement.setAttribute("theme", "dark")
            } else {
                localStorage.setItem("theme", "light")
                htmlElement.setAttribute("theme", "light")
            }
        },
    },
}
</script>
<style lang="scss">
.lights {
    filter: var(--logo);
}
</style>
