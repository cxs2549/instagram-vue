import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import "./assets/css/main.css"
import "./assets/css/app.scss"
import * as svgicon from "vue-svgicon"
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'
import SvgIcon from "./assets/icons/SvgIcon.vue"
import SVGSprite from "./assets/icons/SVGSprite"
import Stories from "./components/Stories/Stories"
import NavbarSm from "./components/Navbar/NavbarSm"
import NavbarMd from "./components/Navbar/NavbarMd"
import NavbarLg from "./components/Navbar/NavbarLg"
import Sidebar from "./components/Sidebar/Sidebar"
import Posts from "./components/Posts/Posts"
import Bottombar from "./components/Bottombar/Bottombar"

Vue.config.productionTip = false

Vue.component("svg-icon", SvgIcon)
Vue.component("svg-sprite", SVGSprite)
Vue.component("theme-switcher", ThemeSwitcher)
Vue.component("stories", Stories)
Vue.component("navbar-sm", NavbarSm)
Vue.component("navbar-md", NavbarMd)
Vue.component("navbar-lg", NavbarLg)
Vue.component("sidebar", Sidebar)
Vue.component("posts", Posts)
Vue.component("bottombar", Bottombar)

Vue.use(svgicon, {
    classPrefix: "AppIcon-",
})

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app")
