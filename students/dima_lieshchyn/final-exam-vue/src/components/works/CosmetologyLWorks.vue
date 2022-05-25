<template>
    <div class="grid-wrapper">
        <div>
            <img src="../../assets/works/1.jpg" alt="1" />
        </div>
        <div>
            <img src="../../assets/works/2.jpg" alt="2" />
        </div>
        <div class="tall">
            <img src="../../assets/works/3.jpg" alt="3" />
        </div>
        <div class="wide">
            <img src="../../assets/works/4.jpg" alt="4" />
        </div>
        <div>
            <img src="../../assets/works/5.jpg" alt="5" />
        </div>
        <div class="tall">
            <img src="../../assets/works/6.jpg" alt="6" />
        </div>
        <div class="big">
            <img src="../../assets/works/7.jpg" alt="7" />
        </div>
        <div>
            <img src="../../assets/works/8.jpg" alt="8" />
        </div>
        <div class="wide">
            <img src="../../assets/works/9.jpg" alt="9" />
        </div>
        <div class="big">
            <img src="../../assets/works/10.jpg" alt="10" />
        </div>
        <div class="tall">
            <img src="../../assets/works/11.jpg" alt="11" />
        </div>
        <div>
            <img src="../../assets/works/12.jpg" alt="12" />
        </div>
        <div>
            <img src="../../assets/works/13.jpg" alt="13" />
        </div>
        <div>
            <img src="../../assets/works/14.jpg" alt="14" />
        </div>
        <div>
            <img src="../../assets/works/15.jpg" alt="15" />
        </div>
        <div class="wide">
            <img src="../../assets/works/16.jpg" alt="16" />
        </div>
        <div>
            <img src="../../assets/works/17.jpg" alt="17" />
        </div>
        <div>
            <img src="../../assets/works/18.jpg" alt="18" />
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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
