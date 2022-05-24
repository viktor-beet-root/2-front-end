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
        <form class="form-order" ref="formE" @submit.prevent="handleSubmit">
            <div class="input-box">
                <va-select v-model="value" :options="options" clear />
            </div>
            <label class="form-order__label">Имя</label>
            <input
                class="form-order__input input-group-text"
                type="text"
                name="from_name"
                v-model="name"
            />
            <label class="form-order__label">Номер телефона</label>
            <input
                class="form-order__input input-group-text"
                type="text"
                name="from_phone"
                v-model="phone"
            />
            <input
                class="btn btn-primary"
                type="submit"
                value="Подать заявку"
            />

            <input
                v-model="value"
                class="form-order__value"
                type="text"
                name="from_order"
            />
        </form>
    </va-modal>
</template>
<script>
import emailjs from "emailjs-com";
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
            if (
                this.value !== "Выбрать" &&
                this.validEmptyName &&
                this.valideEmptyPhone &&
                this.validPhone(this.phone)
            ) {
                this.sendEmail();
                this.showModal = !this.showModal;
            }
        },
        sendEmail() {
            try {
                emailjs.sendForm(
                    "cosmetology_l",
                    "cosmetology_l_template_s",
                    this.$refs.formE,
                    "nIOnRx7mmATjb0vGn"
                );
            } catch (error) {
                console.log({ error });
            }
            this.name = "";
            this.phone = "";
        },
        validPhone(phone) {
            var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            return re.test(phone);
        },
        validEmptyName() {
            if (this.name === "") {
                return false;
            } else {
                return true;
            }
        },
        valideEmptyPhone() {
            if (this.phone !== "") {
                return true;
            } else {
                return false;
            }
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
.form-order {
    width: 100%;
    display: flex;
    flex-direction: column;
    &__label {
        font-size: 12px;
    }

    &__input {
        border-radius: 4px;
    }

    &__value {
        display: none;
        visibility: hidden;
    }
    .btn {
        margin-top: 10px;
    }
}
</style>
