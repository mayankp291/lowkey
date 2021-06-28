<template>
  <div
    style="height: 50px; width: 360px;"
    class="border bg-white shadow-lg rounded-2xl mt-4 m-2"
  >
    <div class="flex">
      <input
        class="shadow appearance-none border rounded w-2/3 px-3 m-2 flex-auto  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Search"
      />

      <router-link to="/vault/add/">
        <button
          class=" m-2 flex-auto text-grey-lighter font-bold py-1 px-7 border rounded text-xs bg-green hover:bg-green-dark"
        >
          Add
        </button>
      </router-link>
    </div>
  </div>
  <div
    style="height: 400px; width: 360px;"
    class="border bg-white shadow-lg rounded-2xl m-auto mt-4 overflow-y-scroll"
  >
    <table class="table-auto w-full text-left">
      <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->

      <tbody>
        <tr
          class="hover:bg-grey-lighter break-words m-auto"
          v-for="{ id, name, username } in users"
          :key="id"
        >
          <td class="py-4 px-3 border-b border-grey-light text-xs font-bold">
            {{ name }}
          </td>
          <td class="py-4 px-3 border-b border-grey-light text-xs">
            {{ username }}
          </td>
          <td class="py-4 px-3 border-b border-grey-light">
            <router-link :to="`/vault/edit/${id}`">
              <button
                class="text-grey-lighter font-bold py-1 px-10 rounded text-xs bg-green hover:bg-green-dark"
              >
                Edit
              </button>
            </router-link>
            <button
              @click="deleteUser(id)"
              class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark "
            >
              Delete
            </button>
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
    const users = useLoadUsers();
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

<style>
@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);
::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
</style>
