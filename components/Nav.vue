<template lang="">
    <div>
         <ul class="flex bg-gray-400">
             <li v-for="link in links" :key="link.name" class="p-4 bg-green-400"> <nuxt-link :to="link.link">
                {{link.name}}
            </nuxt-link> </li>
         </ul>
    </div>
</template>
<script setup>
 const links = [
    {name:'home',link:'/'},
    {name:'categories',link:'/categories'},
    {name : 'blog',link:'/blog'}
 ]

</script>
<style lang="">
    
</style>