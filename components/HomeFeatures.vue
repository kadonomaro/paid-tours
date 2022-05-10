<script>
    export default {
        name: "HomeFeatures",
        list() {
            return [
                { title: "100% комфорт", icon: "" },
                { title: "Все включено", icon: "" },
                { title: "Гарантия возврата", icon: "" },
                { title: "Насыщенная программа", icon: "" },
            ];
        },
    };
</script>

<template>
    <div class="home-features">
        <div class="container">
            <div class="home-features__list">
                <div
                    v-for="(item, index) in $options.list()"
                    :key="index"
                    class="home-features__item"
                >
                    <div class="home-features__image">
                        <img src="" alt="" />
                    </div>
                    <span v-html="item.title"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .home-features {
        padding: 80px 0;
        @include bp($bp-desktop-sm) {
            padding: 160px 0;
        }
    }

    .home-features__list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 -12px -24px;
        @include bp($bp-desktop-sm) {
            margin: 0 -18px;
        }
    }

    .home-features__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-basis: calc(50% - 24px);
        max-width: calc(50% - 24px);
        margin: 0 12px 24px;
        padding: 16px 12px;
        font-size: 12px;
        font-weight: 400;
        text-align: right;
        border-radius: 12px;
        background-color: $color-background;
        @include bp($bp-desktop-sm) {
            position: relative;
            display: block;
            flex-basis: calc(25% - 36px);
            max-width: calc(25% - 36px);
            margin: 0 18px;
            padding: 24px 36px;
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            border-radius: 16px;
        }
    }

    .home-features__image {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        margin-right: 6px;
        border: 2px solid $color-accent;
        border-radius: 50%;
        @include bp($bp-desktop-sm) {
            position: absolute;
            top: -20px;
            left: -20px;
            width: 60px;
            height: 60px;
            margin-right: 0;
        }
    }
</style>
