<template>
  <div
    class="constructor-item"
    v-for="block in сonstructorBlocks"
    :key="block.ID"
  >
    <div class="constructor-item__content">
      <component
        :is="`constructor-block-${block.type}`"
        :block="block"
      ></component>
    </div>
    <div class="constructor-item__controllers">
      <button @click="deleteBlock(block.ID)"><img :src="iconDelete" /></button>
    </div>
  </div>
</template>

<script>
import ConstructorBlockAvatar from "@components/сonstructorBlocks/ConstructorBlockAvatar.vue";
import ConstructorBlockSubTitle from "@components/сonstructorBlocks/ConstructorBlockSubTitle";
import ConstructorBlockText from "@components/сonstructorBlocks/ConstructorBlockText";
import ConstructorBlockTitle from "@components/сonstructorBlocks/ConstructorBlockTitle";
import ConstructorBlockSection from "@components/сonstructorBlocks/ConstructorBlockSection";

import iconDelete from "@img/delete.svg";

import { mapActions, mapState } from "vuex";

export default {
  components: {
    "constructor-block-avatar": ConstructorBlockAvatar,
    "constructor-block-subTitle": ConstructorBlockSubTitle,
    "constructor-block-text": ConstructorBlockText,
    "constructor-block-title": ConstructorBlockTitle,
    "constructor-block-section": ConstructorBlockSection,
  },

  data() {
    return {
      iconDelete,
    };
  },

  methods: {
    ...mapActions(["deleteBlock"]),
  },

  computed: {
    ...mapState(["сonstructorBlocks"]),
  },
};
</script>

<style scoped>
.constructor-item {
  display: flex;
  align-items: center;
}

.constructor-item__content {
  width: 100%;
}

.constructor-item__controllers button {
  cursor: pointer;
}
</style>
