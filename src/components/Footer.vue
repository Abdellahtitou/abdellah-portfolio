<template>
  <footer class="border-t border-slate-800 bg-slate-950">
    <div class="mx-auto max-w-6xl px-6 py-10">
      <div
        class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
      >
        <!-- Brand -->
        <div>
          <a
            href="#home"
            class="text-2xl font-bold text-white"
          >
            Abdellah Titou
          </a>

          <p class="mt-2 text-sm text-slate-500">
            Développeur Web Full Stack Junior
          </p>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-wrap gap-x-6 gap-y-3">
          <a
            href="#home"
            class="text-sm text-slate-400 transition hover:text-blue-500"
          >
            Accueil
          </a>

          <a
            href="#about"
            class="text-sm text-slate-400 transition hover:text-blue-500"
          >
            À propos
          </a>

          <a
            href="#skills"
            class="text-sm text-slate-400 transition hover:text-blue-500"
          >
            Compétences
          </a>

          <a
            href="#experience"
            class="text-sm text-slate-400 transition hover:text-blue-500"
          >
            Expériences
          </a>

          <a
            href="#projects"
            class="text-sm text-slate-400 transition hover:text-blue-500"
          >
            Projet
          </a>

          <a
            href="#contact"
            class="text-sm text-slate-400 transition hover:text-blue-500"
          >
            Contact
          </a>
        </nav>
      </div>

      <div
        class="mt-8 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>
          © {{ new Date().getFullYear() }} Abdellah Titou. Tous droits réservés.
        </p>

        <div class="flex gap-5">
          <a
            href="https://github.com/Abdellahtitou"
            target="_blank"
            rel="noopener noreferrer"
            class="transition hover:text-blue-500"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/titou-abdellah-40b6a1199"
            target="_blank"
            rel="noopener noreferrer"
            class="transition hover:text-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
