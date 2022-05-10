<script>
    import TheAccordion from "~/components/common/TheAccordion";

    export default {
        name: "HomeFaq",
        components: { TheAccordion },
        data() {
            return {
                activeIndex: 0,
            };
        },
        methods: {
            changeIndex(index) {
                this.activeIndex = index;
            },
        },
        faq() {
            return [
                {
                    title: "Title 1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquid at beatae, cumque dignissimos eligendi iste itaque libero modi mollitia nihil obcaecati officiis optio porro provident quidem quod sapiente sit sunt unde ut, vero voluptatem. Aut, ducimus eveniet hic illum reprehenderit sequi? Eaque libero quos repellendus sint, soluta sunt.",
                },
                {
                    title: "Title 2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquid at beatae, cumque dignissimos eligendi iste itaque libero modi mollitia nihil obcaecati officiis optio porro provident quidem quod sapiente sit sunt unde ut, vero voluptatem. Aut, ducimus eveniet hic illum reprehenderit sequi? Eaque libero quos repellendus sint, soluta sunt.",
                },
                {
                    title: "Title 3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquid at beatae, cumque dignissimos eligendi iste itaque libero modi mollitia nihil obcaecati officiis optio porro provident quidem quod sapiente sit sunt unde ut, vero voluptatem. Aut, ducimus eveniet hic illum reprehenderit sequi? Eaque libero quos repellendus sint, soluta sunt.",
                },
                {
                    title: "Title 4",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquid at beatae, cumque dignissimos eligendi iste itaque libero modi mollitia nihil obcaecati officiis optio porro provident quidem quod sapiente sit sunt unde ut, vero voluptatem. Aut, ducimus eveniet hic illum reprehenderit sequi? Eaque libero quos repellendus sint, soluta sunt.",
                },
            ];
        },
    };
</script>

<template>
    <section id="faq" class="home-faq">
        <div class="home-faq__inner">
            <h2 class="home-faq__title">Ответы на частые вопросы</h2>

            <div class="home-faq__accordion">
                <the-accordion
                    v-for="(element, index) in $options.faq()"
                    :key="index"
                    :active-index="activeIndex"
                    :index="index"
                    :accordion="element"
                    @change="changeIndex"
                >
                </the-accordion>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .home-faq {
        padding: 36px 16px;
        background-color: $color-background;
        @include bp($bp-desktop-sm) {
            padding: 60px 0;
        }
    }

    .home-faq__inner {
        @include bp($bp-desktop-sm) {
            max-width: 900px;
            margin: 0 auto;
        }
    }

    .home-faq__title {
        margin-bottom: 16px;
        font-size: 32px;
        line-height: 36px;
        font-weight: 900;
        @include bp($bp-desktop-sm) {
            margin-bottom: 32px;
            font-size: 42px;
            line-height: 48px;
            text-align: center;
        }
    }

    .home-faq__accordion {
        padding: 6px 24px;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 0 12px rgba(#000, 0.05);
        @include bp($bp-desktop-sm) {
            border-radius: 16px;
        }
    }
</style>
