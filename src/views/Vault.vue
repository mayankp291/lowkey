<template>
  <div
    style="height: 180px; width: 360px;"
    class="border bg-white shadow-lg rounded-2xl m-auto mt-2 overflow-y-scroll"
  >
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="onSubmit">
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
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          v-model="form.password"
        />
        <p class="text-red-500 text-xs italic">Enter password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  <div
    style="height: 300px; width: 360px;"
    class="border bg-white shadow-lg rounded-2xl m-auto mt-2"
  ></div>
</template>

<script>
import { createUser } from "../../firebase";
import { reactive } from "vue";
export default {
  setup() {
    const form = reactive({ website: "", username: "", password: "" });

    const onSubmit = async () => {
      await createUser({ ...form });
      form.website = "";
      form.username = "";
      form.password = "";
    };
    return { form, onSubmit };
  },
};
</script>

<style></style>
