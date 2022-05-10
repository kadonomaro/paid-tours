<script>
    export default {
        name: "HomeGalleryCard",
        props: {
            image: {
                type: Object,
                default: () => ({}),
            },
        },
    };
</script>

<template>
    <div
        class="home-gallery-card"
        @click="$popup.show('ModalGallery', { imageUrl: image.detail })"
    >
        <img :src="image.preview" alt="" />
    </div>
</template>

<style lang="scss">
    .home-gallery-card {
        position: relative;
        &::before {
            content: "";
            display: block;
            padding-bottom: 75%;
        }
        img {
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @include bp($bp-desktop-sm) {
            cursor: pointer;
            img {
                transition: transform 0.2s ease-in;
            }
            &::after {
                content: "";
                position: absolute;
                z-index: 1;
                top: -8px;
                bottom: -8px;
                left: -8px;
                right: -8px;
                border: 2px solid rgba(#fff, 0.1);
                transition: transform 0.2s ease-in;
            }
            &:hover {
                img {
                    transform: translate(-5px, 5px);
                }
                &::after {
                    transform: translate(5px, -5px);
                }
            }
        }
    }
</style>
