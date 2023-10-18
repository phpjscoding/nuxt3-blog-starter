<template lang="">
    <div>
        <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div v-for="blog in 6 " class="rounded overflow-hidden shadow-lg relative" >

            <NuxtLink :to="`categories/post-${blog}`" class="">
            <div class="relative">
                <a href="#">
                    <nuxt-img :src="`https://picsum.photos/750/500?random=${blog}`" placeholder />

                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Photos
                    </div>
                </a>

                <a href="!#">
                    <div
                        class="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <span class="font-bold">2{{blog}}</span>
                        <small>March</small>
                    </div>
                </a>
            </div>
        </NuxtLink>


          
        </div>
       
    </div>
</div>
         
    </div>
</template>
<script setup>
const route = useRoute()
console.log(route.params.slug)
</script>
<style lang="">
    
</style>