<script setup lang="ts">
const architecture = [
  {
    step: '01',
    title: 'Frontend',
    subtitle: 'Interface utilisateur',
    technologies: ['Vue 3', 'TypeScript', 'Vite'],
    description:
      'Interface moderne et dynamique permettant de gérer les véhicules, clients, locations et différentes opérations.',
    icon: 'frontend',
  },
  {
    step: '02',
    title: 'API REST',
    subtitle: 'Communication',
    technologies: ['REST API', 'JSON', 'JWT'],
    description:
      'Communication entre le Frontend et le Backend à travers des requêtes HTTP sécurisées.',
    icon: 'api',
  },
  {
    step: '03',
    title: 'Backend',
    subtitle: 'Logique métier',
    technologies: ['Laravel', 'PHP'],
    description:
      "Gestion de la logique métier, de l'authentification, des utilisateurs et des opérations de l'application.",
    icon: 'backend',
  },
  {
    step: '04',
    title: 'Base de données',
    subtitle: 'Stockage',
    technologies: ['MySQL', 'SQL'],
    description:
      "Stockage et organisation des données liées aux véhicules, clients, locations, contrats et maintenance.",
    icon: 'database',
  },
]
</script>

<template>
  <section class="bg-slate-950 px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <!-- Header -->
      <div class="mb-16 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500"
        >
          Architecture
        </p>

        <h2 class="text-4xl font-bold text-white md:text-5xl">
          Architecture du projet
        </h2>

        <p class="mx-auto mt-4 max-w-2xl text-slate-400">
          Une architecture Frontend / Backend basée sur une API REST pour
          assurer une communication claire entre les différentes parties de
          l'application.
        </p>
      </div>

      <!-- Architecture flow -->
      <div class="relative">
        <!-- Connection line desktop -->
        <div
          class="absolute left-[12%] right-[12%] top-24 hidden h-px bg-gradient-to-r from-blue-500/10 via-blue-500/50 to-blue-500/10 lg:block"
        ></div>

        <div class="grid gap-6 lg:grid-cols-4">
          <article
            v-for="item in architecture"
            :key="item.step"
            class="group relative rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-slate-900"
          >
            <!-- Step -->
            <div class="mb-6 flex items-center justify-between">
              <span
                class="text-xs font-bold tracking-widest text-blue-500"
              >
                {{ item.step }}
              </span>

              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-blue-500 transition group-hover:border-blue-500/40 group-hover:bg-blue-500/10"
              >
                <!-- Frontend -->
                <svg
                  v-if="item.icon === 'frontend'"
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
                    d="M17.25 6.75 21 12l-3.75 5.25M6.75 6.75 3 12l3.75 5.25M14.25 4.5l-4.5 15"
                  />
                </svg>

                <!-- API -->
                <svg
                  v-else-if="item.icon === 'api'"
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
                    d="M13.5 4.5 21 12l-7.5 7.5M3 12h18"
                  />
                </svg>

                <!-- Backend -->
                <svg
                  v-else-if="item.icon === 'backend'"
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
                    d="M12 6.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.25 21a6.75 6.75 0 0 1 13.5 0M12 6.75v7.5m-4.5-3.75h9"
                  />
                </svg>

                <!-- Database -->
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <ellipse
                    cx="12"
                    cy="5"
                    rx="7.5"
                    ry="3"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 5v7c0 1.657 3.358 3 7.5 3s7.5-1.343 7.5-3V5M4.5 12v7c0 1.657 3.358 3 7.5 3s7.5-1.343 7.5-3v-7"
                  />
                </svg>
              </div>
            </div>

            <!-- Content -->
            <h3 class="text-xl font-bold text-white">
              {{ item.title }}
            </h3>

            <p class="mt-1 text-sm font-medium text-blue-500">
              {{ item.subtitle }}
            </p>

            <p class="mt-4 text-sm leading-7 text-slate-400">
              {{ item.description }}
            </p>

            <!-- Technologies -->
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="technology in item.technologies"
                :key="technology"
                class="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                {{ technology }}
              </span>
            </div>
          </article>
        </div>
      </div>

      <!-- Architecture explanation -->
      <div
        class="mt-10 overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-900"
      >
        <div class="grid lg:grid-cols-2">
          <!-- Left -->
          <div class="p-8 md:p-10">
            <p
              class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500"
            >
              Flux de données
            </p>

            <h3 class="mt-3 text-2xl font-bold text-white md:text-3xl">
              Comment fonctionne l'application ?
            </h3>

            <p class="mt-5 leading-8 text-slate-400">
              L'utilisateur interagit avec l'interface Vue.js. Les actions
              sont envoyées au Backend Laravel à travers l'API REST. Laravel
              traite les données et communique avec MySQL avant de retourner
              une réponse au Frontend.
            </p>

            <div class="mt-7 space-y-4">
              <div class="flex items-start gap-4">
                <div
                  class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-500"
                >
                  1
                </div>

                <div>
                  <h4 class="font-semibold text-white">
                    Action utilisateur
                  </h4>
                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    L'utilisateur effectue une action depuis l'interface.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-500"
                >
                  2
                </div>

                <div>
                  <h4 class="font-semibold text-white">
                    Requête API
                  </h4>
                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    Vue.js envoie une requête HTTP vers l'API Laravel.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-500"
                >
                  3
                </div>

                <div>
                  <h4 class="font-semibold text-white">
                    Traitement Backend
                  </h4>
                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    Laravel traite la logique métier et les données.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-500"
                >
                  4
                </div>

                <div>
                  <h4 class="font-semibold text-white">
                    Réponse
                  </h4>
                  <p class="mt-1 text-sm leading-6 text-slate-500">
                    Les données sont retournées au Frontend et affichées à
                    l'utilisateur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right diagram -->
          <div
            class="flex items-center justify-center border-t border-slate-800 bg-slate-950/50 p-8 lg:border-l lg:border-t-0 md:p-10"
          >
            <div class="w-full max-w-sm space-y-4">
              <!-- Frontend -->
              <div
                class="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5 text-center"
              >
                <p class="text-xs font-semibold uppercase tracking-wider text-blue-500">
                  Frontend
                </p>
                <p class="mt-2 text-lg font-bold text-white">
                  Vue 3 + TypeScript
                </p>
              </div>

              <!-- Arrow -->
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6 text-slate-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m0 0 6-6m-6 6-6-6"
                  />
                </svg>
              </div>

              <!-- API -->
              <div
                class="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-5 text-center"
              >
                <p class="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  API REST
                </p>
                <p class="mt-2 text-lg font-bold text-white">
                  HTTP + JSON + JWT
                </p>
              </div>

              <!-- Arrow -->
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6 text-slate-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m0 0 6-6m-6 6-6-6"
                  />
                </svg>
              </div>

              <!-- Backend -->
              <div
                class="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-5 text-center"
              >
                <p class="text-xs font-semibold uppercase tracking-wider text-purple-400">
                  Backend
                </p>
                <p class="mt-2 text-lg font-bold text-white">
                  Laravel + PHP
                </p>
              </div>

              <!-- Arrow -->
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6 text-slate-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m0 0 6-6m-6 6-6-6"
                  />
                </svg>
              </div>

              <!-- Database -->
              <div
                class="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 text-center"
              >
                <p class="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Database
                </p>
                <p class="mt-2 text-lg font-bold text-white">
                  MySQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom note -->
      <div
        class="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center"
      >
        <p class="text-sm leading-7 text-slate-400">
          <span class="font-semibold text-white">Architecture Full Stack :</span>
          Vue 3 pour le Frontend,
          <span class="text-blue-400">Laravel</span> pour le Backend,
          une <span class="text-cyan-400">API REST</span> pour la communication
          et <span class="text-emerald-400">MySQL</span> pour la gestion des
          données.
        </p>
      </div>
    </div>
  </section>
</template>
