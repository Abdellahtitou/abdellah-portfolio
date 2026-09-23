<script setup lang="ts">
const project = {
  title: 'Application de gestion de location de voitures',
  category: 'Projet Full Stack',
  period: '2025 — 2026',

  description:
    "Application web complète dédiée à la gestion d'une activité de location de voitures. Le projet permet de centraliser la gestion des véhicules, clients, locations, contrats et opérations de maintenance à travers une architecture Frontend / Backend.",

  features: [
    'Gestion des véhicules',
    'Gestion des clients',
    'Gestion des locations',
    'Gestion des contrats',
    'Gestion de la maintenance',
    'Gestion des rendez-vous',
    'Authentification sécurisée',
    'API REST',
  ],

  technologies: [
    'Vue 3',
    'TypeScript',
    'Vite',
    'Laravel',
    'PHP',
    'MySQL',
    'REST API',
    'JWT',
    'Postman',
    'Git',
    'GitHub',
  ],

  github:
  'https://github.com/Abdellahtitou/Gestion-de-location-de-voiture',
}
</script>

<template>
  <section id="projects" class="bg-slate-900 px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <!-- Header -->
      <div class="mb-16 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500"
        >
          Projet principal
        </p>

        <h2 class="text-4xl font-bold text-white md:text-5xl">
          Mon projet
        </h2>

        <p class="mx-auto mt-4 max-w-2xl text-slate-400">
          Un projet Full Stack réalisé autour d'une application réelle de
          gestion de location de voitures.
        </p>
      </div>

      <!-- Project Card -->
      <article
        class="overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-950 shadow-2xl shadow-blue-950/20"
      >
        <!-- Top -->
        <div
          class="border-b border-slate-800 bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950 p-8 md:p-10"
        >
          <div
            class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
          >
            <div>
              <div class="mb-4 flex flex-wrap items-center gap-3">
                <span
                  class="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400"
                >
                  {{ project.category }}
                </span>

                <span
                  class="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-400"
                >
                  {{ project.period }}
                </span>
              </div>

              <h3
                class="max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl"
              >
                {{ project.title }}
              </h3>

              <p
                class="mt-5 max-w-3xl text-base leading-8 text-slate-400 md:text-lg"
              >
                {{ project.description }}
              </p>
            </div>

            <!-- Project Icon -->
            <div
              class="hidden h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 lg:flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-10 w-10 text-blue-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h8.25m-11.25 0H3.75a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5h11.25a1.5 1.5 0 0 1 1.5 1.5v10.5m0 0h2.25a1.5 1.5 0 0 0 1.5-1.5v-3.75a1.5 1.5 0 0 0-.44-1.06l-2.25-2.25a1.5 1.5 0 0 0-1.06-.44h-1.5V6.75"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="grid gap-10 p-8 md:p-10 lg:grid-cols-2">
          <!-- Features -->
          <div>
            <div class="mb-5 flex items-center gap-3">
              <div
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>

              <h4 class="text-lg font-semibold text-white">
                Fonctionnalités
              </h4>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <div
                v-for="feature in project.features"
                :key="feature"
                class="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3"
              >
                <span
                  class="h-2 w-2 shrink-0 rounded-full bg-blue-500"
                ></span>

                <span class="text-sm text-slate-400">
                  {{ feature }}
                </span>
              </div>
            </div>
          </div>

          <!-- Technologies -->
          <div>
            <div class="mb-5 flex items-center gap-3">
              <div
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m6.75 7.5 3-3 3 3m0 0 3-3 3 3m-9 9 3 3 3-3m0 0 3 3 3-3M3.75 12h16.5"
                  />
                </svg>
              </div>

              <h4 class="text-lg font-semibold text-white">
                Technologies utilisées
              </h4>
            </div>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="technology in project.technologies"
                :key="technology"
                class="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-400 transition hover:border-blue-500/40 hover:text-blue-400"
              >
                {{ technology }}
              </span>
            </div>
          </div>
        </div>

        <!-- Architecture -->
        <div class="border-t border-slate-800 p-8 md:p-10">
          <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500"
            >
              Architecture
            </p>

            <div
              class="mt-5 flex flex-col items-center justify-between gap-4 md:flex-row"
            >
              <div
                class="w-full rounded-xl border border-slate-700 bg-slate-950 p-5 text-center md:w-auto md:flex-1"
              >
                <p class="font-semibold text-white">Frontend</p>
                <p class="mt-2 text-sm text-slate-500">
                  Vue 3 · TypeScript · Vite
                </p>
              </div>

              <span class="text-blue-500">→</span>

              <div
                class="w-full rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 text-center md:w-auto md:flex-1"
              >
                <p class="font-semibold text-white">API REST</p>
                <p class="mt-2 text-sm text-slate-500">
                  HTTP · JSON · JWT
                </p>
              </div>

              <span class="text-blue-500">→</span>

              <div
                class="w-full rounded-xl border border-slate-700 bg-slate-950 p-5 text-center md:w-auto md:flex-1"
              >
                <p class="font-semibold text-white">Backend</p>
                <p class="mt-2 text-sm text-slate-500">
                  Laravel · PHP
                </p>
              </div>

              <span class="text-blue-500">→</span>

              <div
                class="w-full rounded-xl border border-slate-700 bg-slate-950 p-5 text-center md:w-auto md:flex-1"
              >
                <p class="font-semibold text-white">Database</p>
                <p class="mt-2 text-sm text-slate-500">
                  MySQL
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div
          class="flex flex-col gap-4 border-t border-slate-800 bg-slate-950 p-8 sm:flex-row sm:items-center sm:justify-between md:px-10"
        >
          <div>
            <p class="font-semibold text-white">
              Projet disponible sur GitHub
            </p>

            <p class="mt-1 text-sm text-slate-500">
              Consultez le code source et l'évolution du projet.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Voir sur GitHub

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H19.5M19.5 6v6M19.5 6 10.5 15"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 13.5V18a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 18V8a1.5 1.5 0 0 1 1.5-1.5H11"
                />
              </svg>
            </a>

            <a
              href="#contact"
              class="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              Me contacter
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
