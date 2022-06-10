<template>
    <div class="admin blur">
        <div class="container">
            <div class="row">
                <div class="admin__wrapper">
                    <p
                        style="
                            text-align: center;
                            color: white;
                            font-size: 21px;
                        "
                        v-if="!auth"
                    >
                        Только для администраторов !!!
                    </p>
                    <cosmetology-l-admin v-if="auth" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import CosmetologyLAdmin from "../components/admin/CosmetologyLAdmin.vue";
export default {
    components: { CosmetologyLAdmin },
    name: "AdminView",
    computed: {
        ...mapGetters(["auth"]),
    },
};
</script>
<style lang="scss" scoped>
.admin {
    position: relative;
    width: 100%;
    min-height: 100vh;
    /* background-image: url("../assets/photos/IMG_3768.jpg"); */
    background-image: linear-gradient(
        to right top,
        #250537,
        #4a0e62,
        #76158f,
        #a618bd,
        #db12eb
    );
    background-size: cover;
    background-position: left top;
}
.admin__wrapper {
    margin: 0 auto;
    padding-top: 120px;
    width: 100%;
    height: 100%;
}
</style>
