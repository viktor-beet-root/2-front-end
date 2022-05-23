<template>
    <div class="cart__qty qty">
        <div class="input-group mb-3">
            <button
                class="btn btn-light btn-outline-secondary"
                @click="$emit('setQty', false)"
            >
                -
            </button>
            <input class="form-control" :value="qty" type="text" />
            <button
                class="btn btn-light btn-outline-secondary"
                @click="$emit('setQty', true)"
            >
                +
            </button>
        </div>
        <cosmetology-l-trash-icon
            @click="$emit('removeProduct')"
            class="remove"
        />
    </div>
</template>

<script>
import CosmetologyLTrashIcon from "../ui/icons/CosmetologyLTrashIcon.vue";
export default {
    components: { CosmetologyLTrashIcon },
    name: "cosmetology-l-qty",
    props: {
        qty: Number,
    },
    methods: {},
};
</script>
<style lang="scss" scoped>
.cart__qty {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
}
.remove {
    position: absolute;
    top: 10px;
    right: 15px;
    @media (max-width: 500px) {
        top: -15px;
        right: -15px;
    }
}
.input-group {
    position: absolute;
    top: 20px;
    right: 70px;
    width: 120px;
    @media (max-width: 500px) {
        top: 70px;
        right: 15px;
    }
}
.form-control {
    text-align: center;
}
</style>
