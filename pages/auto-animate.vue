<template>
  <ul v-auto-animate class="flex gap-2 mx-4">
    <li
      class="border p-1 rounded cursor-pointer hover:bg-gray-200"
      v-for="item in items"
      :key="item"
      @click="removeItem(item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const items = ref(["😉", "😜", "😀", "😃", "🥰", "🤐", "🥵"]);

const removeItem = (item: string) => {
  items.value = items.value.filter((i) => i !== item);
  items.value.push(item);
};
</script>

<style scoped></style>
