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
        <button class="btn btn-danger mb-3" @click="$emit('removeProduct')">
            Remove
        </button>
    </div>
</template>

<script>
export default {
    name: "beetroot-qty",
    props: {
        qty: Number,
    },
};
</script>
