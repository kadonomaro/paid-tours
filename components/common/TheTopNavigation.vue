<script>
    import { menu } from "~/settings";

    export default {
        name: "TheTopNavigation",
        menu() {
            return menu;
        },
    };
</script>

<template>
    <nav class="the-top-navigation">
        <ul class="the-top-navigation__list">
            <li
                v-for="(item, itemIndex) in $options.menu()"
                :key="itemIndex"
                class="the-top-navigation__item"
            >
                <NuxtLink
                    class="the-top-navigation__link"
                    :to="{ name: item.link, hash: item.hash }"
                >
                    {{ item.name }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .the-top-navigation__list {
        @include bp($bp-desktop-sm) {
            display: flex;
            align-items: center;
            list-style: none;
            padding: 0;
        }
    }

    .the-top-navigation__item {
        @include bp($bp-desktop-sm) {
            margin: 0 3px;
        }
    }

    .the-top-navigation__link {
        @include bp($bp-desktop-sm) {
            display: block;
            padding: 8px 16px;
            color: #fff;
            font-size: 16px;
            line-height: 24px;
            white-space: nowrap;
            text-decoration: none;
            transition: background-color 0.2s ease-in;
            border-radius: 25px;
            &.nuxt-link-exact-active {
                background-color: rgba(#fff, 0.1);
            }
            &:hover:not(.nuxt-link-exact-active) {
                background-color: rgba(#fff, 0.1);
            }
        }
    }
</style>
