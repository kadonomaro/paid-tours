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
            margin: 0 -16px;
        }
    }

    .the-footer-navigation__item {
        @include bp($bp-desktop-sm) {
            margin: 0 16px;
        }
    }

    .the-footer-navigation__link {
        display: block;
        margin-bottom: 12px;
        color: #fff;
        font-size: 16px;
        text-decoration: none;
        @include bp($bp-desktop-sm) {
            position: relative;
            margin-bottom: 0;
            &:hover,
            &.nuxt-link-exact-active {
                &::before {
                    transform: scaleX(1);
                }
            }
            &::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: -3px;
                width: 100%;
                height: 1px;
                background-color: #fff;
                transition: transform 0.2s ease-in;
                transform-origin: left;
                transform: scaleX(0);
            }
        }
    }
</style>
