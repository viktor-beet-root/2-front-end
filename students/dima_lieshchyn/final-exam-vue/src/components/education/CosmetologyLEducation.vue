<template>
    <div class="education-block">
        <div class="info-wrapper info">
            <va-accordion class="col-md-12" v-model="value" popout>
                <va-collapse
                    v-for="(collapse, index) in collapses"
                    :key="index"
                    :header="collapse.title"
                >
                    <div>
                        <ul>
                            <li>
                                <va-list
                                    style="
                                        background-color: rgb(111,20,135)
                                        );
                                        border-radius: 15px;
                                        padding: 0;
                                    "
                                >
                                    <va-list-item
                                        v-for="(item, index) in collapse.info"
                                        :key="index"
                                    >
                                        <va-list-item-section avatar>
                                            <va-avatar>
                                                <cosmetology-l-syringe />
                                            </va-avatar>
                                        </va-list-item-section>

                                        <va-list-item-section>
                                            <va-list-item-label
                                                style="
                                                    color: var(--va-white);
                                                    font-weight: bold;
                                                    font-size: 14px;
                                                "
                                                caption
                                            >
                                                {{ item.title }}
                                            </va-list-item-label>

                                            <va-list-item-label
                                                style="
                                                    color: var(--va-white);
                                                    font-weight: bold;
                                                "
                                                caption
                                            >
                                                {{ item.text }}
                                            </va-list-item-label>
                                            <va-list-item-label
                                                style="
                                                    color: var(--va-white);
                                                    font-weight: bold;
                                                "
                                                caption
                                            >
                                                {{ item.text1 }}
                                            </va-list-item-label>
                                            <va-list-item-label
                                                style="
                                                    color: var(--va-white);
                                                    font-weight: bold;
                                                "
                                                caption
                                            >
                                                {{ item.text2 }}
                                            </va-list-item-label>
                                            <va-list-item-label
                                                style="
                                                    color: var(--va-white);
                                                    font-weight: bold;
                                                "
                                                caption
                                            >
                                                {{ item.text3 }}
                                            </va-list-item-label>
                                            <va-list-item-label
                                                style="
                                                    color: var(--va-white);
                                                    font-weight: bold;
                                                "
                                                caption
                                            >
                                                {{ item.text4 }}
                                            </va-list-item-label>
                                        </va-list-item-section>
                                    </va-list-item>
                                </va-list>
                            </li>
                        </ul>
                    </div>
                </va-collapse>
            </va-accordion>
        </div>
        <cosmetology-l-contact-form />
    </div>
</template>
<script>
import CosmetologyLSyringe from "../ui/icons/CosmetologyLSyringe.vue";
import CosmetologyLContactForm from "./CosmetologyLContactForm.vue";
export default {
    components: { CosmetologyLSyringe, CosmetologyLContactForm },
    name: "cosmetology-l-education",
    data() {
        return {
            value: [false, false, false],
            collapses: [
                {
                    title: "Знакомство с профессией Косметолог с нуля (0)",
                    content: "first collapse content",
                    info: [
                        {
                            title: "Анатомия",
                            text: "Кожа, что как и к чему(углублённое о эпидермисе, дерме)",
                        },
                        {
                            title: "Типы кожы",
                            text: "",
                        },
                        {
                            title: "Сложные случаи и осложнения",
                            text: "",
                        },
                        {
                            title: "Разбор составов и косметологических компонентов",
                            text: "",
                        },
                        {
                            title: "Химические пилинги и разбор кислот",
                            text: "",
                        },
                        {
                            title: "Процедуры база",
                            text: "Чистки, пилинги, уход(маски, карбокситерапия), массаж лица",
                        },
                        {
                            title: "Как правильно подобрать домашний уход клиенту?",
                            text: "",
                        },
                    ],
                },
                {
                    title: "Мезотерапия лица/тела",
                    content: "second collapse content",
                    info: [
                        {
                            title: "Понятия, теория",
                            text: "",
                        },
                        {
                            title: "Подготовка к процедуре: иглы, шприцы",
                            text: "",
                        },
                        {
                            title: "Биоревитализация",
                            text: "-Показания, противопоказания,осложнения мезотерапии;",
                            text1: "-Техники инъекций: наппаж, классическая, бугорковая, инфильтративная, линейная;",
                            text2: "-Характеристики препаратов и их классификация;",
                            text3: "-Протоколы по различным патологиям",
                            text4: "-Отработка на моделях.",
                        },
                    ],
                },
                {
                    title: "Ботулинотерапия",
                    content: "third collapse content",
                    info: [
                        {
                            title: "Теория касательно зон ведения токсина, анатомических особенностей мышц лица",
                            text: "",
                        },
                        {
                            title: "Обзор препаратов, их разведения и этапы подготовки к процедуре",
                            text: "",
                        },
                        {
                            title: "Выбор точек для проведения инъекций",
                            text: "",
                        },
                        {
                            title: "Отработка инъекций на моделях, демонстрация, разметка, введение препарата",
                            text: "",
                        },
                    ],
                },
                {
                    title: "Контурная пластика губ",
                    content: "third collapse content",
                    info: [
                        {
                            title: "Анатомия/постановка руки",
                            text: "",
                        },
                        {
                            title: "Авторские методики",
                            text: "",
                        },
                        {
                            title: "Разбор асимметрии и методы коррекций для идеального результата ",
                            text: "",
                        },
                        {
                            title: "Как преобразить форму «чайки», тонкие маленькие губы ",
                            text: "",
                        },
                        {
                            title: "«Плоский бант»",
                            text: "",
                        },
                        {
                            title: "Как избежать комков и миграции препарата? ",
                            text: "",
                        },
                        {
                            title: "Растворение губ",
                            text: "",
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        // isList() {
        //     return true;
        // },
    },
};
</script>
<style lang="scss" scoped>
.info {
    overflow-x: hidden;
    /* width: 100%; */
}
.education-block {
    width: 100%;
    height: 100vh;
    padding-top: 100px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
}
ul {
    list-style-type: none;
    padding-inline-start: 0;
    li {
        display: flex;
        align-items: center;
        padding: 10px;
    }
    p {
        padding: 0;
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
    }
}
/* .list-enter-active,
.list-leave-active {
    transition: opacity 0.8s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
} */
</style>
