<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    name:'NavBar'
}
</script>
<style scoped>
    .nav-bar{
        display: flex;
        height: 44px;
        line-height: 44px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
    }
    .nav-bar .left,.right{
        width: 60px;
        height: 44px;
    }
   .nav-bar .center{
        height: 44px;
        flex: 1;
        text-align: center;;
        box-shadow: 0 1px 1px rgba(100,100,100,.1);

    }
</style>