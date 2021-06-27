<template>
  <div
    style="height: 180px; width: 360px;"
    class="border bg-white shadow-lg rounded-2xl m-auto mt-2 overflow-y-scroll"
  >
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="onSubmit"
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
    class="border bg-white shadow-lg rounded-2xl m-auto mt-2 overflow-y-scroll"
  >
    <table class="text-left w-full border-collapse">
      <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
      <tbody>
        <tr
          class="hover:bg-grey-lighter"
          v-for="{ id, name, username } in users"
          :key="id"
        >
          <td class="py-4 px-3 border-b border-grey-light">{{ name }}</td>
          <td class="py-4 px-3 border-b border-grey-light">{{ username }}</td>
          <td class="py-4 px-3 border-b border-grey-light">
            <button
             
              class="text-grey-lighter font-bold py-1 px-10 rounded text-xs bg-green hover:bg-green-dark"
              >Edit</button
            >
            <button
              @click="deleteUser(id)"
              class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark"
              >Delete</button 
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { createUser, useLoadUsers, deleteUser } from "../../firebase";
import { reactive } from "vue";
export default {
  setup() {
    const users= useLoadUsers()
    const form = reactive({
      name: "",
      website: "",
      username: "",
      password: "",
    });

    const onSubmit = async () => {
      await createUser({ ...form });
      form.name = "";
      form.website = "";
      form.username = "";
      form.password = "";
    };
    return { form, onSubmit, users, deleteUser };
  },
};
</script>

<style></style>
