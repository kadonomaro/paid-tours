export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: "%s - Увлекательные путешествия по приемлимым ценам",
        title: "",
        htmlAttrs: {
            lang: "ru",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content:
                    "Эксперты в области креативных и нестандартных решений для натяжных потолков в городе Севастополь и в Республике Крым. Высокое качество и доступные цены",
            },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap",
            },
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicons/favicon.ico",
            },

            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicons/apple-touch-icon.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicons/favicon-16x16.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicons/favicon-32x32.png",
            },
            {
                rel: "manifest",
                href: "/favicons/site.webmanifest",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/css/index.scss"],
    styleResources: {
        scss: ["@/assets/css/variables.scss", "@/assets/css/mq.scss"],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/plugins/event-bus.js" },
        { src: "~/plugins/modals.js" },
        { src: "~/plugins/global.js" },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/axios", "@nuxtjs/style-resources", "@nuxtjs/robots"],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "https://api-stretch-ceiling.vercel.app/",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    loading: {
        color: "#00477e",
        height: "2px",
    },

    generate: { fallback: true },

    robots: {
        UserAgent: "*",
    },

    router: {
        scrollBehavior: async (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition;
            }

            const findEl = (hash, x) => {
                return (
                    document.querySelector(hash) ||
                    new Promise((resolve, reject) => {
                        if (x > 50) {
                            return resolve();
                        }
                        setTimeout(() => {
                            resolve(findEl(hash, ++x || 1));
                        }, 100);
                    })
                );
            };

            if (to.hash) {
                const el = await findEl(to.hash);
                if ("scrollBehavior" in document.documentElement.style) {
                    return window.scrollTo({
                        top: el.offsetTop - 60,
                        behavior: "smooth",
                    });
                } else {
                    return window.scrollTo(0, el.offsetTop - 60);
                }
            }

            return { x: 0, y: 0 };
        },
    },
};
