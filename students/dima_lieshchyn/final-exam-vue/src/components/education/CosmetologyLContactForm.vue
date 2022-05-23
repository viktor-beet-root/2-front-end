<template>
    <va-button
        icon-right="create"
        text-color="#fff"
        @click="showModal = !showModal"
    >
        Записаться
    </va-button>
    <va-modal
        v-model="showModal"
        :message="message"
        title="Запись на обучение"
        hide-default-actions
    >
        <va-form tag="form" @submit.prevent="handleSubmit" style="width: 300px">
            <div class="input-box">
                <va-select
                    v-model="value"
                    :options="options"
                    :rules="[
                        (value) =>
                            value === this.value ||
                            'Поле не должно быть пустым',
                    ]"
                    clear
                />
            </div>
            <va-input
                class="mb-4"
                label="Ваше имя"
                v-model="name"
                required-mark="true"
            />
            <va-input
                class="mb-4"
                label="Номер телефона"
                v-model="phone"
                :rules="[
                    (value) =>
                        (value && value.length > 0) ||
                        'Поле не должно быть пустым',
                ]"
                required-mark="true"
            />
            <va-button @click="show = !show" type="submit" class="mt-2"
                >Записаться</va-button
            >
        </va-form>
        <!-- <div style="max-width: 300px"></div> -->
    </va-modal>
</template>
<script>
// import message from "./popup-message";

export default {
    name: "cosmetology-l-contact-form",
    data() {
        return {
            value: "Выбрать",
            name: "",
            phone: "",
            options: [
                "Косметолог с нуля",
                "Мезотерапия лица/тела",
                "Ботулинотерапия",
                "Контурная пластика губ",
            ],
            showModal: false,
            message: "",
            show: false,
        };
    },
    methods: {
        handleSubmit() {
            alert("-- form submit --");
        },
    },
};
</script>
<style lang="scss" scoped>
.input-box {
    margin-bottom: 20px;
}
input {
    height: 50px;
}
</style>
