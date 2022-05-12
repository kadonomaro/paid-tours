<script>
    export default {
        name: "HomeGallery",
        computed: {
            images() {
                return [
                    {
                        preview: "/images/gallery/gallery-1--preview.jpg",
                        detail: "/images/gallery/gallery-1.jpg",
                    },
                    {
                        preview: "/images/gallery/gallery-2--preview.jpg",
                        detail: "/images/gallery/gallery-2.jpg",
                    },
                    {
                        preview: "/images/gallery/gallery-3--preview.jpg",
                        detail: "/images/gallery/gallery-3.jpg",
                    },
                    {
                        preview: "/images/gallery/gallery-4--preview.jpg",
                        detail: "/images/gallery/gallery-4.jpg",
                    },
                    {
                        preview: "/images/gallery/gallery-5--preview.jpg",
                        detail: "/images/gallery/gallery-5.jpg",
                    },
                    {
                        preview: "/images/gallery/gallery-6--preview.jpg",
                        detail: "/images/gallery/gallery-6.jpg",
                    },
                ];
            },
        },
    };
</script>

<template>
    <section id="gallery" class="home-gallery">
        <h2 class="home-gallery__title page-title">Фотографии местности</h2>

        <img
            class="home-gallery__background mobile-hidden"
            src="/images/gallery/mountains.svg"
            alt=""
        />
        <div class="home-gallery__inner">
            <div class="home-gallery__images mobile-hidden">
                <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="home-gallery__image"
                >
                    <home-gallery-card :image="image"></home-gallery-card>
                </div>
            </div>

            <div class="home-gallery__slider desktop-hidden">
                <home-gallery-slider :slides="images"></home-gallery-slider>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .home-gallery {
        position: relative;
        padding: 50px 16px 100px;
        background-color: $color-background;
        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 5%;
            left: -10%;
            width: 120%;
            height: 90%;
            transform: rotate(-3deg);
        }
        &::before {
            z-index: 1;
            margin-top: -20px;
            background: linear-gradient(172deg, #172940 20%, #64f 300%);
        }
        &::after {
            margin-bottom: -50px;
            background: linear-gradient(135deg, #64f 50%, #f9d 150%);
        }
        @include bp($bp-desktop-sm) {
            padding: 90px 0 140px;
        }
    }

    .home-gallery__background {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 0;
        width: 100%;
        transform: translateY(-50%);
        opacity: 0.02;
        pointer-events: none;
    }

    .home-gallery__title {
        position: relative;
        z-index: 2;
        margin-bottom: 16px;
        color: #fff;
        @include bp($bp-desktop-sm) {
            margin-bottom: 32px;
        }
    }

    .home-gallery__inner {
        @include bp($bp-desktop-sm) {
            max-width: 900px;
            margin: 0 auto;
        }
    }

    .home-gallery__images {
        @include bp($bp-desktop-sm) {
            position: relative;
            z-index: 3;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 1fr);
            grid-gap: 32px;
            grid-auto-rows: auto;
            grid-auto-flow: dense;
        }
    }

    .home-gallery__image {
        @include bp($bp-desktop-sm) {
            &:first-child,
            &:nth-child(5) {
                grid-column-end: span 2;
                grid-row-end: span 2;
            }
            .home-gallery-card {
                height: 100%;
            }
        }
    }

    .home-gallery__slider {
        margin: 0 -16px;
    }
</style>
