<template>
    <div class="education-block">
        <div class="container">
            <div class="row">
                <div class="education-block__controls">
                    <button class="btn btn-secondary">Косметолог с нуля</button>
                    <button class="btn btn-secondary">
                        Мезотерапия лица/тела
                    </button>
                    <button class="btn btn-secondary">Ботулинотерапия</button>
                    <button class="btn btn-secondary">
                        Контурная пластика губ
                    </button>
                    <cosmetology-l-list :items="fromZero" />
                </div>
                <article class="education-block__item first">
                    <div class="education-block-info">
                        <h5 class="education-block-info__title">
                            Знакомство с профессией Косметолог с нуля (0)
                        </h5>
                        <ul class="education-block-info__list">
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe /><strong
                                        >Анатомия. </strong
                                    >Кожа, что как и к чему(углублённо о
                                    эпидермисе, дерме)
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe /><strong
                                        >Типы кожы</strong
                                    >
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe /><strong
                                        >Сложные случаи и осложнения</strong
                                    >
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe /><strong
                                        >Разбор составов и косметологических
                                        компонентов</strong
                                    >
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe /><strong
                                        >Химические пилинги и разбор
                                        кислот</strong
                                    >
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe /><strong
                                        >Процедуры база. </strong
                                    >Чистки, пилинги, уход(маски,
                                    карбокситерапия), массаж лица
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <strong
                                        ><cosmetology-l-syringe />Как правильно
                                        подобрать домашний уход клиенту?</strong
                                    >
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <strong
                                        >Поддержка после обучения в онлайн
                                        режиме!</strong
                                    >
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <strong
                                        >Продолжительность курса 2-3
                                        месяца</strong
                                    >
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article class="education-block__item second">
                    <div class="education-block-info">
                        <h5 class="education-block-info__title">
                            Ботулинотерапия
                        </h5>
                        <ul class="education-block-info__list">
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Теория касательно
                                    зон ведения токсина, анатомических
                                    особенностей мышц лица
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Обзор препаратов,
                                    их разведения и этапы подготовки к процедуре
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Выбор точек для
                                    проведения инъекций
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Отработка инъекций
                                    на моделях, демонстрация, разметка, введение
                                    препарата
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article class="education-block__item third">
                    <div class="education-block-info">
                        <h5 class="education-block-info__title">
                            Контурная пластика губ
                        </h5>
                        <ul class="education-block-info__list">
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Анатомия/постановка
                                    руки
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Авторские методики
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Разбор асимметрии и
                                    методы коррекций для идеального результата
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Как преобразить
                                    форму «чайки», тонкие маленькие губы
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />«Плоский бант»
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Как избежать комков
                                    и миграции препарата?
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Растворение губ
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article class="education-block__item fouth">
                    <div class="education-block-info">
                        <h5 class="education-block-info__title">
                            Контурная пластика губ
                        </h5>
                        <br />
                        <ul class="education-block-info__list">
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Понятия, теория
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Подготовка к
                                    процедуре: иглы, шприцы
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Биоревитализация
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Показания,
                                    противопоказания,осложнения мезотерапии
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Техники инъекций:
                                    наппаж, классическая, бугорковая,
                                    инфильтративная, линейная
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Характеристики
                                    препаратов и их классификация
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Протоколы по
                                    различным патологиям
                                </p>
                            </li>
                            <li class="education-block-info__text">
                                <p class="education-block-info__text">
                                    <cosmetology-l-syringe />Отработка на
                                    моделях
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import "@splidejs/vue-splide/css";
import CosmetologyLSyringe from "./icons/CosmetologyLSyringe.vue";
import CosmetologyLList from "../education/CosmetologyLList.vue";
export default {
    name: "cosmetology-l-education-block",
    components: {
        CosmetologyLSyringe,
        CosmetologyLList,
    },
    data() {
        return {
            first: false,
            second: false,
            third: false,
            fouth: false,
            fromZero: ["asd", "ddsa", "asdasd", "asdasdad"],
        };
    },
};
</script>
<style lang="scss">
@import "../../assets/css/_var.scss";
.education-block {
    margin-top: 100px;
    width: 100%;
    height: 100vh;
    &__item {
        width: 100%;
        height: 80vh;
    }
}
.container {
}
.row {
}
.first {
}
.education-block-info {
    &__title {
    }

    &__list {
    }

    &__text {
    }
}

.second {
}
.third {
}
.fouth {
}
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
