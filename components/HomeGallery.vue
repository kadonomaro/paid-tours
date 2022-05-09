<script>
    export default {
        name: "HomeGallery",
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
                {
                    preview: "/images/gallery/gallery-7--preview.jpg",
                    detail: "/images/gallery/gallery-7.jpg",
                },
                {
                    preview: "/images/gallery/gallery-8--preview.jpg",
                    detail: "/images/gallery/gallery-8.jpg",
                },
                {
                    preview: "/images/gallery/gallery-9--preview.jpg",
                    detail: "/images/gallery/gallery-9.jpg",
                },
            ];
        },
    };
</script>

<template>
    <section id="gallery" class="home-gallery">
        <img
            class="home-gallery__background mobile-hidden"
            src="/images/gallery/mountains.svg"
            alt=""
        />
        <div class="home-gallery__inner">
            <div class="home-gallery__images">
                <div
                    v-for="(image, index) in $options.images()"
                    :key="index"
                    class="home-gallery__image"
                    @click="
                        $popup.show('ModalGallery', { imageUrl: image.detail })
                    "
                >
                    <img :src="image.preview" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .home-gallery {
        position: relative;
        padding: 90px 16px 140px;
        background-color: #f0f4f9;
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
            padding: 120px 0 180px;
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

    .home-gallery__inner {
        @include bp($bp-desktop-sm) {
            max-width: 900px;
            margin: 0 auto;
        }
    }

    .home-gallery__images {
        position: relative;
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        margin: 0 -3px;
        @include bp($bp-desktop-sm) {
            margin: 0 -8px;
        }
    }

    .home-gallery__image {
        position: relative;
        flex-basis: calc(50% - 6px);
        max-width: calc(50% - 6px);
        margin: 3px;
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
            flex-basis: calc(33.3333% - 16px);
            max-width: calc(33.3333% - 16px);
            margin: 8px;
            cursor: pointer;
            img {
                transition: transform 0.2s ease-in;
            }
            &::after {
                content: "";
                position: absolute;
                z-index: 1;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                border: 3px solid rgba(#fff, 0.3);
                background-color: rgba(#fff, 0.2);
                opacity: 0.2;
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
