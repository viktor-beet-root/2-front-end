<template>
    <div class="va-table-responsive col-12">
        <table class="va-table">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Фото</th>
                    <th>Товар</th>
                    <th>Группа</th>
                    <th>Тип</th>
                    <th>Описание</th>
                    <th>Колличество</th>
                    <th>Цена</th>
                    <th>Специальная цена</th>
                    <th>Удалить</th>
                </tr>
            </thead>
            <tbody>
                <cosmetology-admin-product
                    v-for="(product, index) in productList"
                    :product="product"
                    :key="index"
                    :productIndex="index"
                />
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import CosmetologyAdminProduct from "./CosmetologyAdminProduct.vue";
export default {
    components: { CosmetologyAdminProduct },
    computed: {
        ...mapGetters(["productList", "countProducts"]),
    },
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/_var.scss";
.va-table-responsive {
    overflow: auto;
    width: 100%;
    color: white;
    position: relative;

    tr:hover {
        box-shadow: $box-shadow;
    }
    th {
        font-size: 12px;
        text-align: center;
    }
    thead {
        background-color: white;
    }
    .controls {
        width: 100%;
        display: flex;
    }
    .btn {
        margin-bottom: 10px;
    }
}
</style>
