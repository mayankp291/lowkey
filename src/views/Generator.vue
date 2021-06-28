<template>
  <head>
    <title>Password Generator</title>
  </head>

  <body class="bg-gray-300">
    <main id="app">
      <div class="flex flex-col mx-auto my-8 text-base">
        <div
          class="flex flex-col items-between w-96 mx-auto bg-gray-200 shadow-2xl rounded-2xl"
        >
          <h1 class="text-center mt-4 text-gray-500 font-bold text-xl">
            {{ title }}
          </h1>
          <div
            class="flex flex-col mt-4 mb-4 py-6 my-auto items-center justify-center bg-gray-300"
          >
            <div
              v-if="copied"
              class="relative bg-gray-500 text-gray-200 px-6 py-1 rounded-lg shadow"
            >
              Password Copied
            </div>
            <div
              @click="copyPassword"
              class="break-words px-3 py-1 rounded-lg w-64 mx-auto my-3 focus:outline-none bg-gray-400 text-gray-200 text-center placeholder-gray-500"
            >
              {{ password }}
            </div>
            <div
              class="flex flex-col items-center justify-between mx-auto my-3"
            >
              <p class="text-gray-500 font-bold">
                Password length:
                <span class="font-mono font-bold text-lg">{{
                  options.length
                }}</span>
              </p>
              <input
                class="rounded-lg overflow-hidden appearance-none focus:outline-none outline-none bg-gray-400 w-128"
                v-model="options.length"
                type="range"
                min="3"
                max="128"
                id="length"
              />
            </div>
            <div class="flex items-center">
              <label class="mx-3" for="lowercase"
                >Generate lowercase letters?</label
              >
              <input
                v-model="options.isLowercase"
                type="checkbox"
                name="a-z"
                id="lowercase"
              />
            </div>
            <div class="flex items-center">
              <label class="mx-3" for="lowercase"
                >Generate uppercase letters?</label
              >
              <input
                v-model="options.isUppercase"
                type="checkbox"
                name="A-Z"
                id="uppercase"
              />
            </div>
            <div class="flex items-center">
              <label class="mx-3 checkbox-label" for="lowercase"
                >Generate numbers?
                <input v-model="options.isNumbers" type="checkbox" />
                <span class="checkbox-custom"></span>
              </label>
            </div>
            <div class="flex items-center">
              <label class="mx-3" for="lowercase">Generate symbols?</label>
              <input
                v-model="options.isSymbols"
                type="checkbox"
                name="!@#$%^&*()"
                id="symbols"
              />
            </div>
          </div>
          <div class="justify-center items-end">
            <button
              class="inline-block w-full py-3 bg-gray-300 text-gray-600 font-bold rounded-b-lg focus:outline-none"
              v-on:click="generatePassword"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
export default {
  data() {
    return {
      title: "Password Generator",
      password: "",
      copied: false,
      options: {
        length: 69,
        isLowercase: true,
        isUppercase: true,
        isNumbers: true,
        isSymbols: true,
      },
    };
  },
  methods: {
    generatePassword() {
      let generator = "";
      let generated = "";
      if (this.options.isLowercase) generator += "abcdefghijklmnopqrstuvwxyz";
      if (this.options.isUppercase) generator += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (this.options.isNumbers) generator += "0123456789";
      if (this.options.isSymbols) generator += "!@#$%^&*(~)_-+=";

      for (let i = 0; i < this.options.length; i++) {
        generated += generator.charAt(
          Math.floor(Math.random() * generator.length)
        );
      }
      this.password = generated;
    },
    async copyPassword() {
      await navigator.clipboard.writeText(this.password);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 3000);
    },
  },
  beforeMount() {
    this.generatePassword();
  },
};
</script>

<style>
input[type="range"]::-webkit-slider-thumb {
  width: 12px;
  -webkit-appearance: none;
  appearance: none;
  height: 12px;
  background: #FFF;
  box-shadow: -405px 0 0 400px #6B7280;
  border-radius: 50%;
}
</style>
