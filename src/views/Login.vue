<template>
  <div
    class="text-4xl text-center pt-10 filter drop-shadow-lg font-bold tracking-wide text-grey-500 antialiased"
  >
    LOWKEY
  </div>
  <!-- LOGIN STARTS HERE -->
  <div class="container mx-auto px-4 h-full -mt-20">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4 pt-32">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-600 text-sm font-bold">Sign in with</h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                type="button"
                style="transition: all 0.15s ease 0s;"
              >
                <img
                  alt="..."
                  class="w-5 mr-1"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
                />Github
              </button>
              <button
                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                type="button"
                style="transition: all 0.15s ease 0s;"
              >
                <img
                  alt="..."
                  class="w-5 mr-1"
                  src="https://developers.google.com/identity/images/g-logo.png"
                />Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-gray-500 text-center text-xs mb-3 font-bold">
              <label>Or sign in with credentials</label>
            </div>
            <form @submit.prevent="doLogin">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                  >Email</label
                >
                <input
                  type="email"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Email"
                  v-model="email"
                  style="transition: all 0.15s ease 0s;"
                />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                  >Password</label
                >
                <input
                  type="password"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                  placeholder="Password"
                  v-model="password"
                  style="transition: all 0.15s ease 0s;"
                />
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox text-gray-800 ml-1 w-5 h-5"
                    style="transition: all 0.15s ease 0s;"
                  /><span class="ml-2 text-sm font-semibold text-gray-700"
                    >Remember me</span
                  ></label
                >
              </div>
              <div class="text-center mt-6">
                <button
                  class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style="transition: all 0.15s ease 0s;"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6">
          <div class="w-1/2">
            <a href="#pablo" class="text-gray-300"
              ><small>Forgot password?</small></a
            >
          </div>
          <div class="w-1/2 text-right">
            <a href="#pablo" class="text-gray-300"
              ><small>Create new account</small></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../../firebase";

export default {
  data() {
    return {
      email: "noreply@example.com",
      password: "password",
    };
  },
  methods: {
    doLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log(res);
          this.$store.commit("login");
          alert("Success");
        })
        .catch((e) => {
          console.log(e);
          this.$store.commit("logout");
          alert("Error");
        });
    },
  },
};
</script>

<style>
@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);
</style>
