<template>
    
        <div class="bg-gray-100 px-2 text-center">
    <div class="h-screen flex flex-col justify-center items-center">
        <h1 class="text-8xl font-extrabold text-red-500">500</h1>
        <p class="text-4xl font-medium text-gray-800">Internal Server Error</p>
        <p class="text-xl text-gray-800 mt-4">We apologize for the inconvenience. Please try again later.</p>
        <small>
          <i>  {{ error.message }}</i>

        </small>
        <button class="px-8 py-4 text-xl font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200" @click="handleError">Back to homepage</button>

    </div>
</div>
  
  </template>

<script setup>
const error = useError();
const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>