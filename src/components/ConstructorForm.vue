<template>
  <form @submit.prevent="handleSubmit" ref="form">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="type">
        <option value="title">Заголовок</option>
        <option value="section">Секция</option>
        <option value="subTitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control" v-if="isSection">
      <label for="subtitle">Подзаголовок</label>
      <input id="subtitle" v-model="subtitle" />
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model="value"></textarea>
    </div>
    <button
      class="btn primary"
      type="submit"
      :disabled="!isValidForm || isSubmitting"
    >
      {{ buttonText }}
    </button>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ConstructorForm",
  data() {
    return {
      value: "",
      type: "title",
      subtitle: "",
      isSubmitting: false,
    };
  },
  computed: {
    isValidForm() {
      if (this.type === "section") {
        return this.value.length > 3 && this.subtitle.length > 3;
      }
      return this.value.length > 3;
    },
    buttonText() {
      if (this.type === "title" && this.hasTitle) {
        return "Изменить";
      }

      if (this.type === "avatar" && this.hasAvatar) {
        return "Изменить";
      }

      return "Добавить";
    },
    hasTitle() {
      return !!this.сonstructorBlocks.find((block) => block.type === "title");
    },
    hasAvatar() {
      return !!this.сonstructorBlocks.find((block) => block.type === "avatar");
    },
    isSection() {
      return this.type === "section";
    },
    ...mapState(["сonstructorBlocks"]),
  },
  methods: {
    handleSubmit() {
      const data = {
        type: this.type,
        value: this.value,
        ...(this.isSection && { ...{ subtitle: this.subtitle } }),
      };

      if (this.buttonText === "Изменить") {
        const { ID } = this.сonstructorBlocks.find(
          (block) => block.type === this.type
        );
        this.updateBlock({
          ID,
          value: this.value,
        });
      } else {
        this.createBlock(data);
      }

      this.value = "";
      this.subtitle = "";
      this.type = "title";

      this.$refs.form.reset();
    },
    ...mapActions(["createBlock", "updateBlock"]),
  },
};
</script>

<style scoped></style>
