<template>
  <li class="list-item">
    <div>
      <p>
        <strong>{{ comment.email }}</strong>
      </p>
      <small>{{ comment.body }}</small>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    comment: {
      body: String,
      email: String,
    },
  },
};
</script>

<style></style>
