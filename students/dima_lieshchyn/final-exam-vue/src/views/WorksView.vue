<template>
    <div class="works-block">
        <div class="container">
            <div class="row">
                <cosmetology-l-works />
            </div>
        </div>
    </div>
</template>

<script>
import CosmetologyLWorks from "../components/works/CosmetologyLWorks.vue";
export default {
    name: "WorksView",
    components: { CosmetologyLWorks },
};
</script>
<style lang="scss" scoped>
.works-block {
    overflow-x: hidden;
    width: 100%;
    height: 100vh;
    background-color: rgb(115, 112, 77);
    padding-top: 80px;
    padding-bottom: 50px;
    @media (max-width: 750px) {
        padding-top: 60px;
    }
}
</style>
