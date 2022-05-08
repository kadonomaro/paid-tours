<script>
    import TheLogo from "~/components/common/TheLogo";
    import TheCallbackButton from "~/components/common/TheCallbackButton";
    import TheTopNavigation from "~/components/common/TheTopNavigation";

    export default {
        name: "TheHeaderTop",
        components: { TheTopNavigation, TheCallbackButton, TheLogo },
    };
</script>

<template>
    <div class="the-header-top">
        <div class="container">
            <div class="the-header-top__inner">
                <div class="the-header-top__logo">
                    <the-logo></the-logo>
                </div>

                <div class="the-header-top__navigation">
                    <the-top-navigation></the-top-navigation>

                    <a href="tel:79111111111" class="the-header-top__phone">
                        +7 (911) 111 11-11
                    </a>
                    <div class="the-header-top__callback mobile-hidden">
                        <the-callback-button></the-callback-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .the-header-top {
        display: none;
        @include bp($bp-desktop-sm) {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            display: block;
            padding: 12px 0;
            background-color: #64f;
            background: linear-gradient(
                172deg,
                #172940 -50%,
                #64f 30%,
                #64f 50%,
                #f9d 200%
            );
            box-shadow: 0 4px 7px rgba(#000, 0.1);
        }
    }

    .the-header-top__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .the-header-top__logo {
        @include bp($bp-desktop-sm) {
            margin-right: 24px;
        }
    }

    .the-header-top__navigation {
        display: flex;
        align-items: center;
    }

    .the-header-top__phone {
        padding: 8px 16px;
        color: #fff;
        font-size: 14px;
        line-height: 20px;
        white-space: nowrap;
        text-decoration: none;
        transition: background-color 0.2s ease-in;
        border-radius: 25px;
        &:hover {
            background-color: rgba(#fff, 0.1);
        }
        @include bp($bp-desktop-sm) {
            font-size: 16px;
            line-height: 24px;
        }
    }

    .the-header-top__callback {
        display: none;
        @include bp($bp-desktop-sm) {
            display: block;
            margin-left: 10px;
        }
    }
</style>
