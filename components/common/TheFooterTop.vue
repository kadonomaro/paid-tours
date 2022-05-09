<script>
    import { menu } from "~/settings";
    import TheFooterNavigation from "~/components/common/TheFooterNavigation";
    import TheSocialLinks from "~/components/common/TheSocialLinks";
    import TheLogo from "~/components/common/TheLogo";

    export default {
        name: "TheFooterTop",
        components: {
            TheLogo,
            TheSocialLinks,
            TheFooterNavigation,
        },
        menu() {
            return menu;
        },
    };
</script>

<template>
    <div class="the-footer-top">
        <div class="the-footer-top__logo">
            <the-logo></the-logo>
        </div>

        <div class="the-footer-top__navigation">
            <the-footer-navigation
                :menu="$options.menu()"
            ></the-footer-navigation>
        </div>
        <div class="the-footer-top__contacts">
            <div class="the-footer-top__social">
                <div class="the-footer-top__title">Наши контакты</div>
                <the-social-links></the-social-links>
            </div>
            <div class="the-footer-top__time">
                <div class="the-footer-top__title">График работы</div>
                <div class="the-footer-top__work">Пн-Вс с 8:00 до 20:00</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .the-footer-top {
        padding: 16px 0;
        @include bp($bp-desktop-sm) {
            display: flex;
            padding: 32px 0;
        }
    }

    .the-footer-top__logo {
        margin-bottom: 12px;
        @include bp($bp-desktop-sm) {
            margin-right: 60px;
            margin-bottom: 0;
        }
    }

    .the-footer-top__navigation {
        margin-bottom: 24px;
        @include bp($bp-desktop-sm) {
            margin-right: auto;
            margin-bottom: 0;
        }
    }

    .the-footer-top__contacts {
        @include bp($bp-desktop-sm) {
            display: flex;
        }
    }

    .the-footer-top__title {
        margin-bottom: 8px;
        font-size: 16px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 12px;
        }
    }

    .the-footer-top__social {
        margin-bottom: 24px;
        @include bp($bp-desktop-sm) {
            margin-right: 60px;
            margin-bottom: 0;
        }
    }

    .the-footer-top__work {
        margin-bottom: 24px;
        font-size: 14px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 0;
        }
    }
</style>
