<template>
  <div
    style="height: 470px; width: 360px;"
    class="border bg-white shadow-lg rounded-2xl m-auto mt-6 overflow-hidden"
  >
    <div class="m-32">
      <button
        type="submit"
        @click="logout"
        class="bg-blue-500 hover:bg-blue-700 self-center text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
    },
  },
};
</script>
