<script>
    export default {
        name: "IndexPage",

        head() {
            return {
                title: "Туры в Горный алтай",
            };
        },
    };
</script>

<template>
    <div class="main-page page">
        <home-hero></home-hero>
        <home-faq></home-faq>
        <home-gallery></home-gallery>
    </div>
</template>

<style lang="scss">
    .main-page {
        overflow: hidden;
    }

    .main-page__section {
        &:not(:last-child) {
            margin-bottom: 32px;
            @include bp($bp-desktop-sm) {
                margin-bottom: 64px;
            }
        }
    }
</style>
