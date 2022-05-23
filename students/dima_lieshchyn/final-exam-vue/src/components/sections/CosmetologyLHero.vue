<template>
    <div class="bg_hero blur">
        <div class="container">
            <div class="row">
                <div class="hero-block col-12">
                    <div class="hero-block__wrapper">
                        <div class="hero-block__info-block">
                            <h1 class="hero-block__title">Твой Косметолог</h1>
                            <p>
                                Меня зовут Ирина и я твой проводник в мир
                                Косметологии.
                            </p>
                            <p>
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
            mobile: null,
        };
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
    }
    &__info-block {
        width: 40%;
        height: 100%;
        & p {
            font-size: 21px;
            font-weight: 700;
            font-style: italic;
            @media (max-width: 750px) {
                font-size: 15px;
            }
        }
    }
    .water {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
        width: 80%;
        text-align: center;
    }
}
</style>
