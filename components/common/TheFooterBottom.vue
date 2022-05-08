<script>
    export default {
        name: "TheFooterBottom",
        computed: {
            getCurrentYear() {
                return new Date().getFullYear();
            },
        },
    };
</script>

<template>
    <div class="the-footer-bottom">
        <div class="the-footer-bottom__copy">
            © 2019—{{ getCurrentYear }} «Туры в Горный Алтай». Все права
            защищены
        </div>
        <div class="the-footer-bottom__developer">
            Разработка сайта - Airsoftware
        </div>
    </div>
</template>

<style lang="scss">
    .the-footer-bottom {
        padding: 16px 0;
        font-size: 12px;
        border-top: 1px solid #fff;
        @include bp($bp-desktop-sm) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 24px 0;
            font-size: 14px;
        }
    }

    .the-footer-bottom__copy {
        margin-bottom: 12px;
        @include bp($bp-desktop-sm) {
            margin-bottom: 0;
        }
    }
</style>
