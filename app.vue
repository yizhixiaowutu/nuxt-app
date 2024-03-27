<template>
  <!-- <div>
    <NuxtWelcome />
  </div> -->
  <NuxtPage :page-key="(route) => route.fullPath" />
</template>
<script lang="ts" setup></script>
