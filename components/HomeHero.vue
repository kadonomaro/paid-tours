<script>
    export default {
        name: "HomeHero",
    };
</script>

<template>
    <section class="home-hero">
        <div class="container">
            <div class="home-hero__inner">
                <div class="home-hero__text">
                    <h1 class="home-hero__title">
                        Туры в <span>Горный Алтай</span>
                    </h1>
                    <div class="home-hero__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consectetur dolor esse fugiat impedit molestiae
                        nemo praesentium. Accusamus adipisci assumenda cumque
                        dolor dolorem facere illo laboriosam nostrum nulla
                        numquam obcaecati officia optio pariatur porro, quia quo
                        saepe suscipit unde voluptas voluptatum!
                    </div>

                    <button
                        class="home-hero__button"
                        @click="$popup.show('modal-callback')"
                    >
                        <span>Узнать подробнее</span>
                    </button>
                </div>
                <div class="home-hero__image">
                    <img src="/images/home/hero.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .home-hero {
        min-height: calc(100vh - 55px);
        padding: 24px 0;
        background-color: #f0f4f9;
        @include bp($bp-desktop-sm) {
            position: relative;
            min-height: calc(100vh - 75px);
            padding: 0;
            &::before {
                content: "";
                position: absolute;
                z-index: 2;
                left: 0;
                right: 0;
                bottom: 0;
                height: 200px;
                background-image: linear-gradient(
                    to bottom,
                    transparent 0%,
                    transparent 30%,
                    #fff 100%
                );
                pointer-events: none;
            }
        }
    }

    .home-hero__inner {
        @include bp($bp-desktop-sm) {
            display: flex;
            align-items: center;
            min-height: calc(100vh - 75px);
        }
    }

    .home-hero__text {
        @include bp($bp-desktop-sm) {
            flex-basis: 50%;
            max-width: 50%;
        }
    }

    .home-hero__image {
        @include bp($bp-desktop-sm) {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            img {
                height: 100%;
            }
        }
    }

    .home-hero__title {
        margin-bottom: 20px;
        font-size: 32px;
        line-height: 40px;
        font-weight: 900;
        letter-spacing: -0.5px;
        span {
            color: $color-accent;
        }
        @include bp($bp-desktop-sm) {
            font-size: 52px;
            line-height: 58px;
        }
    }

    .home-hero__description {
        margin-bottom: 32px;
        max-width: 480px;
        color: #4f5464;
        font-size: 14px;
        line-height: 24px;
        @include bp($bp-desktop-sm) {
            font-size: 18px;
            line-height: 28px;
        }
    }

    .home-hero__button {
        position: relative;
        display: block;
        margin: 0 auto;
        padding: 12px 24px;
        color: #fff;
        background-color: $color-accent;
        border-radius: 25px;
        transition: background-color 0.2s ease-in;
        span {
            position: relative;
        }
        &:hover {
            background-color: $color-base;
        }
        &::before {
            content: "";
            position: absolute;
            top: -4px;
            bottom: -4px;
            left: -4px;
            right: -4px;
            border-radius: 25px;
            background-color: $color-accent;
            opacity: 0.3;
            animation: ripple 3s ease-in-out infinite;
        }
        @include bp($bp-desktop-sm) {
            margin: 0;
        }
    }

    @keyframes ripple {
        0%,
        100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.03, 1.1);
        }
    }
</style>
