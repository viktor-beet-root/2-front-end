<template>
    <cosmetology-l-info @click="show = !show" />
    <div v-if="show" class="service-card__back back">
        <p class="back__info">{{ info }}</p>
    </div>
</template>
<script>
import CosmetologyLInfo from "../ui/icons/CosmetologyLInfo.vue";
export default {
    name: "cosmetology-l-info",
    components: {
        CosmetologyLInfo,
    },
    data() {
        return {
            show: false,
        };
    },
    props: {
        info: String,
    },
};
</script>
