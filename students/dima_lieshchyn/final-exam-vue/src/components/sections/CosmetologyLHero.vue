<template>
    <div class="bg_hero" :class="{ blur: this.browser }">
        <div class="container">
            <div class="row">
                <div class="hero-block col-12">
                    <div class="hero-block__wrapper">
                        <div class="hero-block__info-block">
                            <h1 class="hero-block__title">Твой Косметолог</h1>
                            <p class="second">
                                Меня зовут Ирина и я твой проводник в мир
                                Косметологии.
                            </p>
                            <p class="third">
                                Со мной можно усовершенствовать свою красоту,
                                устранить недостатки, подобрать домашний уход,
                                быть вечно молодой, здоровой, освоить новую
                                професию по эстетической и инъекционной
                                косметологии
                            </p>
                            <p class="water">
                                Без воды, только самый ценный опыт и знания.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "cosmetology-l-hero",
    data() {
        return {
            mobile: false,
            browser: "",
        };
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }

            this.mobile = false;
            return;
        },

        detectBrowser() {
            let temp = navigator.userAgent.slice(0, 7);
            console.log(temp);
            if (temp === "Mozilla") {
                this.browser = false;
            } else {
                this.browser = true;
            }
        },
    },
    created() {
        this.detectBrowser();
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
};
</script>
<style lang="scss">
@import "../../assets/css/_var.scss";
@import "../../assets/css/addons.scss";
.bg_hero,
.blur {
    @include blur;
}

::-webkit-scrollbar {
    -webkit-appearance: none;
}
::-webkit-scrollbar:vertical {
    width: 11px;
}
::-webkit-scrollbar:horizontal {
    height: 11px;
}
::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
}
.bg_hero {
    background-image: url("../../assets/photos/hero-2-photo_1.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
    min-height: 100vh;
}
.hero-block {
    padding-top: 120px;
    /* height: 100%; */
    opacity: 1;
    transition: opacity 0.5s ease-out;
    @media (max-width: 750px) {
        padding-top: 60px;
    }

    &__title {
        color: white;
        font-style: italic;
        padding-bottom: 50px;
        @media (max-width: 750px) {
            padding-bottom: 0;
        }
    }
    &__info-block {
        width: 100%;
        height: 100%;
        & p {
            font-size: 21px;
            font-weight: 700;
            font-style: italic;
            @media (max-width: 750px) {
                font-size: 15px;
            }
        }
        @media (max-width: 750px) {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            height: 80vh;
        }
    }
    .second {
        padding-bottom: 30px;
        color: white;
        @media (max-width: 750px) {
            padding-bottom: 0;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
        }
    }
    .third {
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 4px;
        padding: 15px;
        box-shadow: $box-shadow;
    }
    .water {
        box-shadow: $box-shadow;
        margin-top: 30px;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 4px;
        padding: 15px;
        width: 40%;
        text-align: center;
        @media (max-width: 750px) {
            margin-top: 0;
            width: 100%;
        }
    }
}
</style>
