import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const truncate = (str, maxLength) =>
    str.length <= maxLength ? str : str.substring(0, maxLength) + "..."

export default new Vuex.Store({
    state: {
        faces: [
            {
                avatar:
                    "https://yt3.ggpht.com/a/AATXAJyVxbwZxVUk3doFkkEeTqRW0KMgB202f5MPbdXBkw=s176-c-k-c0x00ffffff-no-rj-mo",
                username: truncate("gabsmolders", 9),
                fullUsername: " gabsmolders ",
                image: "",
            },
            {
                avatar:
                    "https://yt3.ggpht.com/a/AATXAJxrWnb56CNIfXblbiETKLO-g3hO8Hrtoofdh0Hn=s176-c-k-c0x00ffffff-no-rj-mo",
                username: truncate("thisisicarus", 12), fullUsername: "thisisicarus"
            },
            {
                avatar:
                    "https://yt3.ggpht.com/a/AATXAJx89Wxi8mhGREAnZymb1-UBgnFYimXomv9r1DOPhA=s176-c-k-c0x00ffffff-no-rj-mo",
                username: truncate("jennaezarik", 13), fullUsername: "jennaezarik"
            },
            {
                avatar:
                    "https://yt3.ggpht.com/a/AATXAJxVOMbfkdZ0_lzrrpqVJ6uh8xmoaQ5arIDorbSB=s176-c-k-c0x00ffffff-no-rj-mo",
                username: truncate("lisapeachy", 10), fullUsername: "lisapeachy"
            },
            {
                avatar:
                    "https://yt3.ggpht.com/a/AATXAJyuuNTpjo9TsVN4lUaLTawPF2UU7EiNTC1oa0MH=s176-c-k-c0x00ffffff-no-rj-mo",
                username: truncate("wilcerla", 9), fullUsername: "wilcerla"
            },
            {
                avatar:
                    "https://yt3.ggpht.com/a/AATXAJzhWxRgzaXhxVEcfN3PQn69OQGDLuRVAHeAJ-aB6Q=s176-c-k-c0x00ffffff-no-rj-mo",
                username: truncate("rosannapansino", 9), fullUsername: "rosannapansino"
            },
            {
                avatar:
                    "https://yt3.ggpht.com/a/AATXAJzydh3qUqcouUiPz8dtoXV8WJl8mW18iAu6aVdCjQ=s176-c-k-c0x00ffffff-no-rj-mo",
                username: "rac", fullUsername: "rac"
            },
            {
                avatar:
                    "https://yt3.ggpht.com/a/AATXAJyrWDG5WHCvtWSEI9q1965hDeUTPTvdWBk_CYc-dQ=s176-c-k-c0x00ffffff-no-rj-mo",
                username: "thefarhang", fullUsername: "thefarhang", info: "New to Instagram"
            },
            {
                avatar:
                    "https://yt3.ggpht.com/a/AATXAJwH4-maaFoQ65nDvn-dNHc2P8q54XvBu_l6VMJYdA=s88-c-k-c0x00ffffff-no-rj",
                username: truncate("dougbenson", 9), fullUsername: "dougbenson", info: "Followed by emilihaha"
            },
            {
                avatar:
                    "https://yt3.ggpht.com/a/AATXAJz_XKaiOzTuNqmUObuUawrrV62f6aQg5COaLlcAbw=s88-c-k-c0x00ffffff-no-rj",
                username: truncate("wetmovie1", 9), fullUsername: "wetmovie1", info: "Followed by samanthasambile"
            },
            {
                avatar:
                    "https://yt3.ggpht.com/a/AATXAJz91La5GgdqI2FA3B_gieBIOJxeYAnSsOLSI1rg9g=s88-c-k-c0x00ffffff-no-rj",
                username: "ijustine", fullUsername: "ijustine", info: "Followed by wilcerla + 1"
            },
            {
                avatar:
                    "https://yt3.ggpht.com/a/AATXAJxM_jO6HKgtchBif1zeLUEb5GtdybqEFhZryRMb=s88-c-k-c0x00ffffff-no-rj",
                username: truncate("jennywakeandbake", 12), fullUsername: "jennywakeandbake", info: "New to Instagram"
            },
        ],

        posts: [
            {
                avatar: "https://randomuser.me/api/portraits/men/97.jpg",
                username: "rockmclean",
                location: "Queens",
                image: "http://unsplash.it/600?random&gravity=center",
            },
            {
                avatar: "https://randomuser.me/api/portraits/men/98.jpg",
                username: "alexreeves",
                location: "Baltimore, MD",
                image: "http://unsplash.it/601?random&gravity=center",
            },
            {
                avatar: "https://randomuser.me/api/portraits/men/99.jpg",
                username: "danieljaggi",
                location: "Silver Spring, MD",
                image: "http://unsplash.it/602?random&gravity=center",
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
})
