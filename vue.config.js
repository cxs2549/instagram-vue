module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "src/assets/css/app.scss";`,
            },
        },
    },
    pwa: {
        name: "Test",
        iconPaths: {
            favicon32: "(any icon file here)",
            favicon16: "(any icon file here)",
            appleTouchIcon: "(any icon file here)",
            maskIcon: "(any icon file here)",
            msTileImage: "(any icon file here)",
        },
    },
}
