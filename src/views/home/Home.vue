<template>
    <div id="home">
        <NavBar class="homenav">
            <div slot="center">购物街</div>
        </NavBar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:"Home",
    components:{
        NavBar
    }
}
</script>
<style scoped>
    .homenav{
        background-color: var(--color-tint);
    }
</style>