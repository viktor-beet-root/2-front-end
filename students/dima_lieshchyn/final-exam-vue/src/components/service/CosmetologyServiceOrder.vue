<template>
    <va-button
        class="service_btn"
        icon-right="create"
        text-color="#fff"
        @click="showModal = !showModal"
    >
        Записаться
    </va-button>
    <va-modal
        v-model="showModal"
        :message="message"
        title="Запись на процедуры"
        hide-default-actions
    >
        <va-form
            tag="form"
            @submit.prevent="handleSubmit"
            style="width: 600px @media (max-width: 600px) {width: 300px}"
        >
            <div class="input-box">
                <va-select
                    label="Выбрать"
                    v-model="value"
                    :options="options"
                    multiple
                />
            </div>
            <va-input class="mb-4" label="Ваше имя" v-model="name" />
            <va-input
                class="mb-4"
                label="Номер телефона"
                v-model="phone"
                :rules="[
                    (value) =>
                        (value && value.length > 0) ||
                        'Поле не должно быть пустым',
                ]"
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
    name: "cosmetology-l-service-order",
    props: {
        options: Array,
    },
    data() {
        return {
            value: "",
            name: "",
            phone: "",
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
.service_btn {
    position: absolute;
    z-index: 40;
    top: 65px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
.input-box {
    margin-bottom: 20px;
}
input {
    height: 50px;
}
</style>
