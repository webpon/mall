<template>
     <div id="tab-bar">
        <slot></slot>
      </div>
</template>
<script>
export default {
    name:'TabBar'
}
</script>
<style scoped>
    #tab-bar{
    display: flex;
    background-color: #dadada;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
 
</style>