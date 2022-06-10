<template>
    <div class="cart-count-icon">
        <span>{{ countData }}</span>
    </div>
</template>
<script>
export default {
    name: "cosmetology-l-count-icon",
    props: {
        countData: Number,
    },
};
</script>
<style lang="scss" scoped>
.cart-count-icon {
    position: fixed;
    top: 75px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    z-index: 150;
    @media (max-width: 750px) {
        top: 45px;
    }

    & > span,
    & a {
        width: 25px !important;
        height: 25px;
        color: black;
        display: block;
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
    }
}
</style>
