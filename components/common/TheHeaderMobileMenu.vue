<script>
    import TheHeaderMobileNavigation from "~/components/common/TheHeaderMobileNavigation";
    import TheCallbackButton from "~/components/common/TheCallbackButton";

    export default {
        name: "TheHeaderMobileMenu",
        components: { TheHeaderMobileNavigation, TheCallbackButton },
        methods: {
            closeMenu() {
                this.$emit("on-close");
            },
        },
    };
</script>

<template>
    <div class="the-header-mobile-menu">
        <div class="the-header-mobile-menu__nav">
            <the-header-mobile-navigation
                @on-close="closeMenu"
            ></the-header-mobile-navigation>
        </div>

        <a href="tel:79111111111" class="the-header-mobile-menu__phone">
            +7 (911) 111 11-11
        </a>

        <div class="the-header-mobile__callback">
            <the-callback-button is-dark></the-callback-button>
        </div>
    </div>
</template>

<style lang="scss">
    .the-header-mobile-menu {
        height: 100%;
        padding: 4px 16px 16px;
        background-color: #fff;
    }

    .the-header-mobile-menu__nav {
        margin-bottom: 36px;
    }

    .the-header-mobile-menu__phone {
        display: block;
        margin-bottom: 8px;
        color: $color-base;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        white-space: nowrap;
        text-decoration: none;
    }
</style>
