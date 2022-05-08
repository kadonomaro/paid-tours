<script>
    export default {
        name: "TheCallbackButton",
    };
</script>

<template>
    <button class="the-callback-button" @click="$popup.show('ModalCallback')">
        Перезвоните мне
    </button>
</template>

<style lang="scss">
    .the-callback-button {
        padding: 6px 14px;
        color: #fff;
        font-size: 14px;
        line-height: 20px;
        border-radius: 25px;
        border: 2px solid #fff;
        transition: background-color 0.2s ease-in, color 0.2s ease-in;
        &:hover {
            background-color: #fff;
            color: $color-base;
        }
        @include bp($bp-desktop-sm) {
            font-size: 16px;
            line-height: 24px;
        }
    }

    .the-callback-button__icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        margin-right: 6px;
        background-color: $color-accent;
        border-radius: 50%;
        transition: transform 0.2s ease;
        svg {
            width: 16px;
            height: 16px;
        }
    }
</style>
