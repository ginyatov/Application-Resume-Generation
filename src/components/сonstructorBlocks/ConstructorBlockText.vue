<template>
  <p>{{ block.value }}</p>
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
