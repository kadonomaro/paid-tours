<script>
    import TheSvgIcon from "~/components/common/TheSvgIcon";
    import TransitionContainer from "~/components/common/TransitionContainer";

    export default {
        name: "TheAccordion",
        components: {
            TransitionContainer,
            TheSvgIcon,
        },
        props: {
            accordion: Object,
            index: [Number, String],
            activeIndex: [Number, String],
        },
        data() {
            return {
                isShow: false,
            };
        },
        methods: {
            showDropdown() {
                if (this.index === this.activeIndex) {
                    this.$emit("change", 999);
                } else {
                    this.isShow = !this.isShow;
                }
            },
        },
    };
</script>

<template>
    <div class="the-accordion">
        <button class="the-accordion__trigger" @click="showDropdown">
            <span class="the-accordion__title">
                {{ accordion.title }}
            </span>

            <span
                class="the-accordion__arrow"
                :class="{
                    'is-rotate': activeIndex === index || isShow,
                }"
            >
                <the-svg-icon name="arrow"></the-svg-icon>
            </span>
        </button>
        <transition-container :show="activeIndex === index || isShow">
            <div class="the-accordion__text">
                {{ accordion.text }}
            </div>
        </transition-container>
    </div>
</template>

<style lang="scss">
    .the-accordion {
        padding: 16px 0;
        margin-top: -1px;
        &:not(:first-child) {
            border-color: $color-border;
            border-width: 1px 0 0 0;
            border-style: solid;
        }
        &:not(:last-child) {
            border-color: $color-border;
            border-width: 0 0 1px 0;
            border-style: solid;
        }
    }

    .the-accordion__trigger {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-right: 40px;
        text-align: left;
        cursor: pointer;
    }

    .the-accordion__title {
        color: $color-base;
        font-size: 16px;
        font-weight: 500;
        line-height: 28px;
        text-align: left;
        @include bp($bp-desktop-sm) {
            letter-spacing: 0.005em;
        }
    }

    .the-accordion__arrow {
        position: absolute;
        right: 0;
        top: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        color: $color-accent;
        flex-shrink: 0;
        transform: translateY(-50%);
        transition: background-color 0.2s ease-in;
        svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            fill: $color-accent;
            transform: rotate(-90deg);
            transition: transform 0.2s ease-in;
        }
        &.is-rotate {
            color: #fff;
            background-color: $color-accent;
            svg {
                transform: rotate(90deg);
                fill: #fff;
            }
        }
    }

    .the-accordion__text {
        padding-top: 16px;
        color: #4f5464;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        a {
            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>
