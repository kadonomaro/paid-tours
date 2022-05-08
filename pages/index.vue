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
        <div class="container">
            <div class="main-page__section"></div>
        </div>
    </div>
</template>

<style lang="scss">
    .main-page__section {
        &:not(:last-child) {
            margin-bottom: 32px;
            @include bp($bp-desktop-sm) {
                margin-bottom: 64px;
            }
        }
    }
</style>
