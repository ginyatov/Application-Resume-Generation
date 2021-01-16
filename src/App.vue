<template>
  <div class="container column">
    <div class="card card-w30">
      <constructor-form></constructor-form>
    </div>
    <div class="card card-w70">
      <loader-view theme="dark" v-if="isLoadBlocks"></loader-view>
      <template v-else>
        <h3 v-if="isEmptyBlocks">
          Добавьте первый блок, чтобы увидеть результат
        </h3>
        <constructor-view v-else></constructor-view>
      </template>
    </div>
  </div>
  <comments-view></comments-view>
</template>

<script>
import ConstructorForm from "@components/ConstructorForm.vue";
import ConstrucorView from "@components/ConstrucorView";
import Loader from "@components/Loader";
import Comments from "@components/comments/Comments";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: {
    "constructor-form": ConstructorForm,
    "constructor-view": ConstrucorView,
    "loader-view": Loader,
    "comments-view": Comments,
  },
  created() {
    this.initConnectionToFireBase();
  },
  computed: {
    ...mapState(["isLoadBlocks"]),
    ...mapGetters(["isEmptyBlocks"]),
  },
  methods: {
    ...mapActions(["initConnectionToFireBase"]),
  },
};
</script>
