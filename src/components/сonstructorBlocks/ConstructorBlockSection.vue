<template>
  <constructor-block-subTitle :block="block"></constructor-block-subTitle>
  <constructor-block-text :block="block"></constructor-block-text>
</template>

<script>
import ConstructorBlockSubTitle from "@components/сonstructorBlocks/ConstructorBlockSubTitle";
import ConstructorBlockText from "@components/сonstructorBlocks/ConstructorBlockText";

export default {
  props: {
    block: {
      value: String,
      subtitle: String,
    },
  },
  components: {
    "constructor-block-subTitle": ConstructorBlockSubTitle,
    "constructor-block-text": ConstructorBlockText,
  },
};
</script>

<style></style>
