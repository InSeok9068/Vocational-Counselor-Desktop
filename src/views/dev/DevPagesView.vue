<template>
  <div>
    <template v-for="route in $router.options.routes" :key="route">
      <router-link :to="route.path">{{ route.name }}</router-link>
      <br />
    </template>
  </div>
</template>

<script setup lang="ts"></script>
