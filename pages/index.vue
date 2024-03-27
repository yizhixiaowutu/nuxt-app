<template>
  <button @click="toPage('auto-animate')">auto-animate</button>
</template>

<script setup lang="ts">
const router = useRouter();
const toPage = (route: string) => {
  router.push({
    name: route,
  });
};
</script>

<style scoped></style>
