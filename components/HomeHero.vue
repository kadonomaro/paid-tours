<script>
    export default {
        name: "HomeHero",
    };
</script>

<template>
    <div class="home-hero">
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
    </div>
</template>

<style lang="scss">
    .home-hero {
        background-image: url("/images/home/hero.svg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .home-hero__inner {
        @include bp($bp-desktop-sm) {
            display: flex;
            align-items: center;
            min-height: calc(100vh - 75px);
        }
    }

    .home-hero__text {
        flex-basis: 50%;
        max-width: 50%;
    }

    .home-hero__image {
        flex-basis: 50%;
        max-width: 50%;
        margin-top: -10%;
    }

    .home-hero__title {
        margin-bottom: 20px;
        font-size: 52px;
        font-weight: 900;
        line-height: 58px;
        letter-spacing: -0.5px;
        span {
            color: $color-accent;
        }
    }

    .home-hero__description {
        margin-bottom: 32px;
        max-width: 480px;
        color: #4f5464;
        font-size: 18px;
        line-height: 28px;
    }

    .home-hero__button {
        position: relative;
        padding: 12px 20px;
        color: #fff;
        background-color: $color-accent;
        border-radius: 25px;
        span {
            position: relative;
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
