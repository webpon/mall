<template>
    <div class="tab-control">
        <div v-for='(item,index) in titles' :key="item.index" class="tab-control-item" :class="{active:index===currentIndex}" 
        @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index
            this.$emit('tabclick',index)
        }
    }
}
</script>
<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        background-color: #fff;
        z-index: 100;
    }
    .tab-control-item{
        flex: 1;
        line-height: 40px;
        font-size: 15px;
    }
    .active{
        color: var(--color-high-text);
       
    }
    .active span{
         padding: 5px;
        border-bottom:3px solid var(--color-high-text);
    }
</style>