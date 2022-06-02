<script>
    import Swiper from "swiper/swiper-bundle.min";
    import HomeGalleryCard from "~/components/HomeGalleryCard";

    export default {
        name: "HomeGallerySlider",
        components: {
            HomeGalleryCard,
        },
        props: {
            slides: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                slider: null,
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.slider = new Swiper(".js-gallery-slider", {
                    spaceBetween: 8,
                    slidesPerView: 1.2,
                    direction: "horizontal",
                    grabCursor: true,
                    mousewheel: {
                        forceToAxis: true,
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        type: "progressbar",
                    },
                });
            });
        },
    };
</script>

<template>
    <div class="home-gallery-slider desktop-hidden">
        <div class="swiper-container js-gallery-slider">
            <div class="swiper-wrapper">
                <div
                    v-for="(slide, index) in slides"
                    :key="index"
                    class="home-gallery-slider__slide swiper-slide"
                >
                    <home-gallery-card :image="slide"></home-gallery-card>
                </div>
            </div>
        </div>

        <div v-if="slides.length > 1" class="home-gallery__slider-pagination">
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<style lang="scss">
    .home-gallery-slider {
        position: relative;
        .swiper-pagination {
            width: calc(100% - 32px);
            height: 2px;
            margin: 16px 16px 0;
            border-radius: 3px;
            overflow: hidden;
            background-color: rgba(#fff, 0.3);
        }
        .swiper-slide {
            height: auto;
        }
        .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
            background-color: #fff;
        }
    }
</style>
