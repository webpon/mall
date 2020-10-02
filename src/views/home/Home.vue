<template>
    <div id="home">
        <NavBar class="homenav">
            <div slot="center">购物街</div>
        </NavBar>
        <!-- 轮播图 -->
        <HomeSwiper :banners='banners'/>
        <RecommendView :recommends="recommends"/>
        <FeatureView/>
        <TabControl :titles="['流行','新款','精选']" class="tab-control" @tabclick="tabClick"/>
        <GoodsList :goods="goods[currentType].list"/>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import GoodsListItem from 'components/content/goods/GoodsListItem'

import {getHomeMultidata,getHomeGoods} from 'network/home'
export default {
    name:"Home",
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        GoodsListItem
    },
    data(){
        return{
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},
            },
            currentType:'pop'
        }
    },
    created(){
        // 1、请求多个数据
        this.getHomeMultidata()

        // 2、请求商品数据
         this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    methods:{
        getHomeMultidata(){
             getHomeMultidata().then(res=>{
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
        })
        },
        getHomeGoods(type){
            const page=this.goods[type].page+1
            getHomeGoods(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list)
            
            this.goods[type].page++
            console.log(this.goods[type].list);
           
        })
        },
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType='pop'
                    break;
                case 1:
                    this.currentType='new'
                    break;
                case 2:
                    this.currentType='sell'
                    break;
                    
            }
        }
       
    }
}
</script>
<style scoped>
    .homenav{
        background-color: var(--color-tint);
    }
    #home{
        padding-top:44px;
    }
    .tab-control{
        position: sticky;
        top:43.5px;

    }
</style>