<template>
    <td @click="show = !show">{{ value }}</td>
    <input v-if="show" v-model="text" type="text" />
</template>
<script>
export default {
    name: "cosmetology-l-admin-product-node",
    data(){
        return {
            show: false,
            text: "",
        }
    }
    props: {
        value: {
            type: String,
            default() {
                return "";
            },
        },
    },
};
</script>
