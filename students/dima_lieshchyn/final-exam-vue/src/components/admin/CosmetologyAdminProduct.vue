<template>
    <tr>
        <td>{{ productIndex + 1 }}</td>
        <td>
            <img
                class="admin_img"
                :src="require('../../assets/store_photos/' + product.img)"
                :alt="product.name"
            />
        </td>
        <td>{{ product.name }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.type }}</td>
        <td>{{ product.info }}</td>
        <td>{{ product.qty }} шт.</td>
        <td>{{ product.price }}</td>
        <td>{{ product.specialPrice }}</td>
        <td @click="removeProductfromList">Удалить продукт</td>
    </tr>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "cosmetology-l-admin-product",
    props: {
        product: {
            type: Object,
            default() {
                return {};
            },
        },
        productIndex: Number,
    },
    methods: {
        ...mapActions(["removeProduct", "addToProductList"]),
        removeProductfromList() {
            this.removeProduct(this.productIndex);
        },
    },
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/_var.scss";
.admin_img {
    width: 50px;
}
td {
    cursor: pointer;
    text-align: center !important;
    &:hover {
        transition: background-color 0.5s ease;
        background-color: $background-nav-item-hover;
    }
}
</style>
