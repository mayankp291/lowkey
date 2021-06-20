<!-- HEROS LIST -->
<template>
  <div class="text-center" style="width:400px">
    <h1 class="text-2xl text-gray-900 font-bold">Heros List {{ heroCount }}</h1>
    <ul>
      <li v-for="(hero, index) in heros" :key="hero.name">
        <div>{{ hero.name }} <button class= "pl-20" @click="remove(index)">x</button></div>
      </li>
    </ul>
    <form class="mt-5 mb-8" @submit.prevent="addHero">
      <input class="border" v-model.lazy="newHero" placeholder="Type Hero Name" />
      <button class="border" type="submit">Add Hero</button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    heroCount() {
      return this.heros.length;
    },
  },

  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.heros.push({ name: this.newHero });
        this.newHero = "";
      }
    },
    remove(index) {
      this.heros = this.heros.filter((hero, i) => i != index);
    },
  },
  data() {
    return {
      isActive: false,
      newHero: "",
      heros: [
        { name: "Flash" },
        { name: "Supergirl" },
        { name: "Arrow" },
        { name: "Batman" },
      ],
    };
  },
};
</script>
