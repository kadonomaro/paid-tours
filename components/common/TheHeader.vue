<script>
    import TheHeaderTop from "~/components/common/TheHeaderTop";
    import TheHeaderMobile from "~/components/common/TheHeaderMobile";
    export default {
        name: "TheHeader",
        components: { TheHeaderMobile, TheHeaderTop },
    };
</script>

<template>
    <header class="the-header">
        <the-header-top></the-header-top>
        <the-header-mobile></the-header-mobile>
    </header>
</template>

<style lang="scss">
    .the-header {
    }
</style>
