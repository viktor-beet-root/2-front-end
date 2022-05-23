<template>
    <div class="grid-wrapper">
        <div>
            <img src="../../assets/works/1.jpg" alt="" />
        </div>
        <div>
            <img src="../../assets/works/2.jpg" alt="" />
        </div>
        <div class="tall">
            <img src="../../assets/works/3.jpg" alt="" />
        </div>
        <div class="wide">
            <img src="../../assets/works/4.jpg" alt="" />
        </div>
        <div>
            <img src="../../assets/works/5.jpg" alt="" />
        </div>
        <div class="tall">
            <img src="../../assets/works/6.jpg" alt="" />
        </div>
        <div class="big">
            <img src="../../assets/works/7.jpg" alt="" />
        </div>
        <div>
            <img src="../../assets/works/8.jpg" alt="" />
        </div>
        <div class="wide">
            <img src="../../assets/works/9.jpg" alt="" />
        </div>
        <div class="big">
            <img src="../../assets/works/10.jpg" alt="" />
        </div>
        <div class="tall">
            <img src="../../assets/works/11.jpg" alt="" />
        </div>
        <div>
            <img src="../../assets/works/12.jpg" alt="" />
        </div>
        <div>
            <img src="../../assets/works/13.jpg" alt="" />
        </div>
        <div>
            <img src="../../assets/works/14.jpg" alt="" />
        </div>
        <div>
            <img src="../../assets/works/15.jpg" alt="" />
        </div>
        <div class="wide">
            <img src="../../assets/works/16.jpg" alt="" />
        </div>
        <div>
            <img src="../../assets/works/17.jpg" alt="" />
        </div>
        <div>
            <img src="../../assets/works/18.jpg" alt="" />
        </div>
    </div>
</template>
<script>
export default {
    name: "cosmetology-l-works",
};
</script>
<style lang="scss" scoped>
img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    display: inline-block;
    border: 1px solid white;
}
div {
    transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.grid-wrapper > div {
    display: flex;
    justify-content: center;
    align-items: center;
}
.grid-wrapper > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.grid-wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
}
.grid-wrapper .wide {
    grid-column: span 2;
}
.grid-wrapper .tall {
    grid-row: span 2;
}
.grid-wrapper .big {
    grid-column: span 2;
    grid-row: span 2;
}
</style>
