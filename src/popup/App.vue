<template>
  <div
    style="height: 600px; width: 380px;"
    class=" overflow-hidden shadow-lg bg-gray-300 border-0"
  >
    <div v-show="!$store.state.isLogged">
      <appheader />
    </div>
    <div v-show="$store.state.isLogged"><login /></div>
  </div>
</template>

<script>
import login from "../views/Login.vue";
import appheader from "../components/AppHeader.vue";

export default {
  components: { login, appheader },
};
</script>
