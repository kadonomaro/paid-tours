<script>
    import { menu } from "~/settings";
    import TheSvgIcon from "~/components/common/TheSvgIcon";

    export default {
        name: "TheHeaderMobileNavigation",
        components: { TheSvgIcon },
        methods: {
            closeMenu() {
                this.$emit("on-close");
            },
        },
        menu() {
            return menu;
        },
    };
</script>

<template>
    <nav class="the-header-mobile-navigation">
        <ul class="the-header-mobile-navigation__list">
            <li
                v-for="(item, itemIndex) in $options.menu()"
                :key="itemIndex"
                class="the-header-mobile-navigation__item"
            >
                <NuxtLink
                    class="the-header-mobile-navigation__link"
                    :to="{ name: item.link, hash: item.hash }"
                    @click.native="closeMenu"
                >
                    {{ item.name }}
                </NuxtLink>
                <the-svg-icon name="arrow"></the-svg-icon>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .the-header-mobile-navigation__item {
        position: relative;
        padding: 12px 0;
        svg {
            position: absolute;
            top: 16px;
            right: 0;
            width: 12px;
            height: 12px;
            transform: rotate(180deg);
            transition: transform 0.2s ease-in;
            pointer-events: none;
        }
    }

    .the-header-mobile-navigation__link {
        color: inherit;
        font-weight: 500;
        text-decoration: none;
        transition: color 0.2s ease-in;
        &.nuxt-link-exact-active {
            color: $color-accent;
        }
    }
</style>
