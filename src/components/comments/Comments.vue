<template>
  <div class="container">
    <p v-if="comments.length === 0 && !isLoadComments">
      <button class="btn primary" @click="getComments">
        Загрузить комментарии
      </button>
    </p>

    <loader-view v-if="isLoadComments"></loader-view>

    <template v-if="comments.length > 0">
      <div class="card">
        <h2>Комментарии</h2>
        <ul class="list">
          <comments-item
            v-for="comment in comments"
            :key="comment.id"
            :comment="comment"
          ></comments-item>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import Loader from "@components/Loader";
import CommentsItem from "@components/comments/CommentsItem";
import { mapActions, mapState } from "vuex";

export default {
  name: "Comments",
  components: {
    "loader-view": Loader,
    "comments-item": CommentsItem,
  },
  computed: {
    ...mapState(["comments", "isLoadComments"]),
  },
  methods: {
    ...mapActions(["getComments"]),
  },
};
</script>

<style></style>
