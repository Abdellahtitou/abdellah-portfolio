<script setup lang="ts">
const experiences = [
  {
    company: 'IBN MAROC',
    period: 'Septembre 2024 — Janvier 2025',
    duration: '4 mois',
    role: 'Stagiaire Développeur Full Stack',
    description:
      "Développement et maintenance d'applications web avec Laravel et Vue.js, avec participation aux projets Frontend et Backend en équipe.",
    missions: [
      "Développement et maintenance d'applications web",
      'Développement Frontend avec Vue.js',
      'Développement Backend avec Laravel',
      'Implémentation de fonctionnalités avec des bases de données SQL',
      'Participation au travail en équipe',
      'Application des bonnes pratiques de développement',
      'Participation aux code reviews',
    ],
    technologies: [
      'Laravel',
      'PHP',
      'Vue.js',
      'JavaScript',
      'MySQL',
      'SQL',
      'Git',
    ],
    featured: false,
  },

  {
    company: 'ERYX',
    period: 'Mai 2024 — Août 2024',
    duration: '3 mois',
    role: 'Stagiaire Développeur Full Stack',
    location: 'Rabat',
    description:
      "Développement d'une application web de gestion complète avec une architecture Frontend / Backend et une API REST.",
    missions: [
      "Développement d'une application web de gestion",
      "Création et intégration d'API REST avec Laravel",
      'Développement d’interfaces utilisateur dynamiques avec Vue.js',
      'Conception et optimisation de bases de données relationnelles',
      'Gestion des versions avec Git',
      'Collaboration via GitHub',
    ],
    technologies: [
      'Laravel',
      'PHP',
      'Vue.js',
      'JavaScript',
      'MySQL',
      'REST API',
      'Git',
      'GitHub',
    ],
    featured: true,
  },

  {
    company: 'École Hello Life',
    period: 'Mars 2024 — Avril 2024',
    duration: '1 mois',
    role: 'Stagiaire Développeur Full Stack',
    description:
      "Développement d'un site web complet de A à Z avec une partie Frontend moderne et un Backend basé sur Node.js.",
    missions: [
      "Développement d'un site web complet",
      'Création d’interfaces modernes et responsives avec React.js',
      'Développement Backend avec Node.js et Express',
      "Création et intégration d'API REST",
      'Gestion des données avec MongoDB',
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'REST API',
    ],
    featured: false,
  },
]
</script>

<template>
  <section id="experience" class="bg-slate-900 px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <!-- Header -->
      <div class="mb-16 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500"
        >
          Parcours professionnel
        </p>

        <h2 class="text-4xl font-bold text-white md:text-5xl">
          Mes expériences
        </h2>

        <p class="mx-auto mt-4 max-w-2xl text-slate-400">
          Mes différentes expériences en développement web Full Stack à
          travers plusieurs environnements professionnels.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline line -->
        <div
          class="absolute left-4 top-0 hidden h-full w-px bg-slate-800 md:left-1/2 md:block"
        ></div>

        <div class="space-y-12">
          <article
            v-for="(experience, index) in experiences"
            :key="experience.company"
            class="relative"
          >
            <!-- Timeline point -->
            <div
              class="absolute left-4 top-8 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue-500 bg-slate-950 md:left-1/2 md:block"
            ></div>

            <div
              class="grid gap-8 md:grid-cols-2 md:gap-16"
              :class="index % 2 === 0 ? '' : 'md:[&>div:first-child]:order-2'"
            >
              <!-- Date -->
              <div
                class="hidden md:flex"
                :class="
                  index % 2 === 0
                    ? 'justify-end text-right'
                    : 'justify-start text-left'
                "
              >
                <div class="max-w-sm pt-6">
                  <span
                    class="text-sm font-semibold uppercase tracking-wider text-blue-500"
                  >
                    {{ experience.period }}
                  </span>

                  <p class="mt-2 text-sm text-slate-500">
                    {{ experience.duration }}
                  </p>
                </div>
              </div>

              <!-- Card -->
              <div>
                <div
                  class="rounded-2xl border p-7 transition duration-300 md:p-8"
                  :class="
                    experience.featured
                      ? 'border-blue-500/30 bg-blue-950/20 shadow-xl shadow-blue-950/10'
                      : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                  "
                >
                  <!-- Mobile date -->
                  <div class="mb-5 md:hidden">
                    <span
                      class="text-xs font-semibold uppercase tracking-wider text-blue-500"
                    >
                      {{ experience.period }}
                    </span>

                    <span class="ml-2 text-xs text-slate-600">
                      · {{ experience.duration }}
                    </span>
                  </div>

                  <!-- Company -->
                  <div
                    class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div>
                      <div class="flex flex-wrap items-center gap-3">
                        <h3 class="text-2xl font-bold text-white">
                          {{ experience.company }}
                        </h3>

                        <span
                          v-if="experience.featured"
                          class="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                        >
                          Expérience principale
                        </span>
                      </div>

                      <p class="mt-2 font-medium text-blue-400">
                        {{ experience.role }}
                      </p>
                    </div>

                    <span
                      v-if="experience.location"
                      class="text-sm text-slate-500"
                    >
                      {{ experience.location }}
                    </span>
                  </div>

                  <!-- Description -->
                  <p class="mt-5 leading-7 text-slate-400">
                    {{ experience.description }}
                  </p>

                  <!-- Missions -->
                  <div class="mt-7">
                    <h4
                      class="text-sm font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Missions
                    </h4>

                    <ul class="mt-4 space-y-3">
                      <li
                        v-for="mission in experience.missions"
                        :key="mission"
                        class="flex items-start gap-3 text-sm leading-6 text-slate-400"
                      >
                        <span
                          class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                        ></span>

                        <span>{{ mission }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Technologies -->
                  <div class="mt-7 border-t border-slate-800 pt-6">
                    <h4
                      class="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Technologies
                    </h4>

                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="technology in experience.technologies"
                        :key="technology"
                        class="rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-400"
                      >
                        {{ technology }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="mt-14 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center"
      >
        <p class="text-sm text-slate-500">
          Expérience acquise à travers des projets et environnements de
          développement web différents.
        </p>
      </div>
    </div>
  </section>
</template>
