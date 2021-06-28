<template>
  <div id="nav" class="px-7 bg-white shadow-lg rounded-2xl">
    <div class="flex">
      <router-link to="/">
        <div class="flex-1 group">
          <a
            class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
          >
            <span class="block px-1 pt-1 pb-1">
              <i class="far fa-home text-2xl pt-1 mb-1 block"></i>
              <span class="block text-xs pb-2">Home</span>
              <span
                class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"
              ></span>
            </span>
          </a>
        </div>
      </router-link>
      <router-link to="/about">
        <div class="flex-1 group">
          <a
            class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
          >
            <span class="block px-1 pt-1 pb-1">
              <i class="far fa-lock text-2xl pt-1 mb-1 block"></i>
              <span class="block text-xs pb-2">Vault</span>
              <span
                class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"
              ></span>
            </span>
          </a>
        </div>
      </router-link>
      <router-link to="/vault">
        <div class="flex-1 group">
          <a
            href="#"
            class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
          >
            <span class="block px-1 pt-1 pb-1">
              <i class="far fa-key text-2xl pt-1 mb-1 block"></i>
              <span class="block text-xs pb-2">Generator</span>
              <span
                class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"
              ></span>
            </span>
          </a>
        </div>
      </router-link>
      <router-link to="/testing">
        <div class="flex-1 group">
          <a
            href="#"
            class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
          >
            <span class="block px-1 pt-1 pb-1">
              <i class="far fa-cog text-2xl pt-1 mb-1 block"></i>
              <span class="block text-xs pb-2">Settings</span>
              <span
                class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"
              ></span>
            </span>
          </a>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap");
body {
  font-family: "Poppins", sans-serif;
}
.hover\:w-full:hover {
  width: 100%;
}
.group:hover .group-hover\:w-full {
  width: 100%;
}
.group:hover .group-hover\:inline-block {
  display: inline-block;
}
.group:hover .group-hover\:flex-grow {
  flex-grow: 1;
}
#nav {
  position: fixed;
  left: 12px;
  right: 12px;
  bottom: 12px;
}
</style>
