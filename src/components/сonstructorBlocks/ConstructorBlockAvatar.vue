<template>
  <div class="avatar">
    <img :src="block.value" />
  </div>
</template>

<script>
export default {
  props: {
    block: {
      value: String,
    },
  },
};
</script>

<style></style>
