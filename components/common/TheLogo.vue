<script>
    export default {
        name: "TheLogo",
    };
</script>

<template>
    <NuxtLink class="the-logo" :to="{ name: 'index' }">
        <picture>
            <source
                media="(max-width: 991px)"
                srcset="/images/logo--mobile.svg"
            />
            <img src="/images/logo.svg" alt="Туры в Горный Алтай" />
        </picture>
    </NuxtLink>
</template>

<style lang="scss">
    .the-logo {
        display: block;
        img {
            height: 40px;
            @include bp($bp-desktop-sm) {
                height: 50px;
            }
        }
        &.nuxt-link-exact-active {
            pointer-events: none;
            cursor: default;
        }
    }
</style>
