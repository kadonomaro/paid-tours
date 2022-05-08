<script>
    import TheLogo from "~/components/common/TheLogo";
    import TheCallbackButton from "~/components/common/TheCallbackButton";

    export default {
        name: "TheHeaderTop",
        components: { TheCallbackButton, TheLogo },
    };
</script>

<template>
    <div class="the-header-top">
        <div class="container">
            <div class="the-header-top__inner">
                <div class="the-header-top__logo">
                    <the-logo></the-logo>
                </div>

                <a href="tel:79785860623" class="the-header-top__phone">
                    +7 (978) 586 06-23
                </a>
                <div class="the-header-top__callback">
                    <the-callback-button></the-callback-button>
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

    .the-header-top__phone {
        position: relative;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        white-space: nowrap;
        text-decoration: none;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            height: 1px;
            background-color: currentColor;
            opacity: 0;
            transition: opacity 0.2s ease;
        }
        &:hover {
            &::before {
                opacity: 1;
            }
        }
        @include bp($bp-desktop-sm) {
            font-size: 18px;
        }
    }

    .the-header-top__callback {
        display: none;
        @include bp($bp-desktop-sm) {
            display: block;
            margin-left: 30px;
        }
    }
</style>
