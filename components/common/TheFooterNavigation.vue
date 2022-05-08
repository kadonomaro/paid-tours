<script>
    export default {
        name: "TheFooterNavigation",
        props: {
            menu: {
                type: Array,
                default: () => [],
            },
        },
    };
</script>

<template>
    <nav class="the-footer-navigation">
        <ul class="the-footer-navigation__list">
            <li
                v-for="(item, i) in menu"
                :key="i"
                class="the-footer-navigation__item"
            >
                <NuxtLink
                    class="the-footer-navigation__link"
                    :to="{ name: item.link, hash: item.hash }"
                >
                    {{ item.name }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .the-footer-navigation__list {
        @include bp($bp-desktop-sm) {
            display: flex;
            margin: 0 -8px;
        }
    }

    .the-footer-navigation__item {
        @include bp($bp-desktop-sm) {
            margin: 0 8px;
        }
    }

    .the-footer-navigation__link {
        display: block;
        margin-bottom: 8px;
        color: #fff;
        font-size: 16px;
        text-decoration: none;
        transition: color 0.2s ease-in;
        &:hover,
        &.nuxt-link-exact-active {
            color: $color-accent;
        }
        @include bp($bp-desktop-sm) {
            margin-bottom: 0;
        }
    }
</style>
