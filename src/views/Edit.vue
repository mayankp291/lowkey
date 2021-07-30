<template>
  <div style="height: 480px; width: 360px;"
    class="border bg-white shadow-lg rounded-2xl m-auto mt-4 overflow-y-scroll">
    <form
      class="bg-white rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="update"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="website">
          Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          v-model="form.name"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="website">
          Website
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Website"
          v-model="form.website"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          v-model="form.username"
        />
      </div>
       <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          v-model="form.password"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="website">
          TOTP Secret
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="totp"
          type="text"
          placeholder="TOTP Secret"
          v-model="form.totp"
        />
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         >
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getUser, updateUser } from "../../firebase";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const userId = computed(() => route.params.id);
    const form = reactive({
      name: "",
      website: "",
      username: "",
      password: "",
      totp:"",
    });
    onMounted(async () => {
      const user = await getUser(userId.value);
      console.log(user, userId.value);
      form.name = user.name;
      form.website = user.website;
      form.username = user.username;
      form.password = user.password;
      form.totp = user.totp;
    });
    const update = async () => {
      await updateUser(userId.value, { ...form });
      router.push("/vault");
      form.name = "";
      form.website = "";
      form.username = "";
      form.password = "";
      form.totp = "";
    };
    return { form, update };
  },
};
</script>
