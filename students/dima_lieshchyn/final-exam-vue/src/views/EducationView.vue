<template>
    <div class="education blur">
        <div class="container">
            <div class="row">
                <div class="education_wrapper">
                    <!-- <cosmetology-l-carousel /> -->
                    <cosmetology-l-education />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CosmetologyLEducation from "../components/education/CosmetologyLEducation.vue";
export default {
    components: { CosmetologyLEducation },
    name: "EducationView",
};
</script>
<style lang="scss" scoped>
.education {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-image: url("../assets/photos/IMG_3768.jpg");
    background-size: cover;
    background-position: left top;
}
.education__wrapper {
    width: 100%;
    height: 100%;
}
</style>
