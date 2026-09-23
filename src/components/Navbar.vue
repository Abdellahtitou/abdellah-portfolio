<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav
    class="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md"
  >
    <div
      class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
    >
      <!-- Logo -->
      <a
        href="#home"
        class="text-2xl font-bold text-white"
        @click="closeMenu"
      >
        Abdellah Titou
      </a>

      <!-- Desktop Menu -->
      <div class="hidden items-center gap-8 md:flex">
        <a
          href="#about"
          class="text-sm text-slate-300 transition hover:text-blue-500"
        >
          À propos
        </a>

        <a
          href="#skills"
          class="text-sm text-slate-300 transition hover:text-blue-500"
        >
          Compétences
        </a>

        <a
          href="#experience"
          class="text-sm text-slate-300 transition hover:text-blue-500"
        >
          Expériences
        </a>

        <a
          href="#education"
          class="text-sm text-slate-300 transition hover:text-blue-500"
        >
          Formation
        </a>

        <a
          href="#projects"
          class="text-sm text-slate-300 transition hover:text-blue-500"
        >
          Projets
        </a>

        <a
          href="#contact"
          class="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Contact
        </a>
      </div>

      <!-- Mobile Button -->
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-blue-500 hover:text-blue-500 md:hidden"
        aria-label="Ouvrir le menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="border-t border-slate-800 bg-slate-950 md:hidden"
    >
      <div class="mx-auto flex max-w-6xl flex-col px-6 py-4">

        <a
          href="#about"
          class="border-b border-slate-800 py-4 text-slate-300 transition hover:text-blue-500"
          @click="closeMenu"
        >
          À propos
        </a>

        <a
          href="#skills"
          class="border-b border-slate-800 py-4 text-slate-300 transition hover:text-blue-500"
          @click="closeMenu"
        >
          Compétences
        </a>

        <a
          href="#experience"
          class="border-b border-slate-800 py-4 text-slate-300 transition hover:text-blue-500"
          @click="closeMenu"
        >
          Expériences
        </a>

        <a
          href="#education"
          class="border-b border-slate-800 py-4 text-slate-300 transition hover:text-blue-500"
          @click="closeMenu"
        >
          Formation
        </a>

        <a
          href="#projects"
          class="border-b border-slate-800 py-4 text-slate-300 transition hover:text-blue-500"
          @click="closeMenu"
        >
          Projets
        </a>

        <a
          href="#contact"
          class="mt-4 rounded-lg bg-blue-600 px-5 py-3 text-center font-medium text-white transition hover:bg-blue-700"
          @click="closeMenu"
        >
          Me contacter
        </a>

      </div>
    </div>
  </nav>
</template>
