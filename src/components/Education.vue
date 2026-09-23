<script setup lang="ts">
const education = [
  {
    school: 'ISTA Hay Riad',
    location: 'Rabat',
    diploma: 'Diplôme Développement Digital',
    option: 'Option Full Stack',
    period: '2022 — 2024',
    type: 'Diplôme',
    featured: true,
  },
  {
    school: 'Lycée Ibn Rochd',
    location: 'Rabat',
    diploma: 'Baccalauréat',
    option: 'Sciences de la Vie',
    period: '',
    type: 'Baccalauréat',
    featured: false,
  },
]
</script>

<template>
  <section id="education" class="bg-slate-950 px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <!-- Header -->
      <div class="mb-16 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500"
        >
          Formation
        </p>

        <h2 class="text-4xl font-bold text-white md:text-5xl">
          Mon parcours académique
        </h2>

        <p class="mx-auto mt-4 max-w-2xl text-slate-400">
          Une formation orientée vers le développement d'applications web
          Full Stack.
        </p>
      </div>

      <!-- Education -->
      <div class="relative mx-auto max-w-4xl">
        <!-- Vertical line -->
        <div
          class="absolute bottom-0 left-5 top-0 hidden w-px bg-slate-800 md:block"
        ></div>

        <div class="space-y-8">
          <article
            v-for="(item, index) in education"
            :key="item.school"
            class="relative md:pl-16"
          >
            <!-- Timeline point -->
            <div
              class="absolute left-5 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue-500 bg-slate-950 md:block"
            ></div>

            <!-- Card -->
            <div
              class="rounded-2xl border p-7 transition duration-300 md:p-8"
              :class="
                item.featured
                  ? 'border-blue-500/30 bg-blue-950/20 shadow-xl shadow-blue-950/10'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              "
            >
              <div
                class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between"
              >
                <div class="flex gap-4">
                  <!-- Icon -->
                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147 12 6l7.74 4.147a.75.75 0 0 1 0 1.306L12 15.6l-7.74-4.147a.75.75 0 0 1 0-1.306ZM6.75 12.75v4.125c0 .621.504 1.125 1.125 1.125h8.25c.621 0 1.125-.504 1.125-1.125V12.75M19.5 11.25v5.25"
                      />
                    </svg>
                  </div>

                  <div>
                    <div class="flex flex-wrap items-center gap-3">
                      <h3 class="text-xl font-bold text-white md:text-2xl">
                        {{ item.school }}
                      </h3>

                      <span
                        v-if="item.featured"
                        class="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                      >
                        Formation principale
                      </span>
                    </div>

                    <p class="mt-2 text-sm text-slate-500">
                      {{ item.location }}
                    </p>
                  </div>
                </div>

                <span
                  v-if="item.period"
                  class="shrink-0 text-sm font-medium text-blue-500"
                >
                  {{ item.period }}
                </span>
              </div>

              <!-- Details -->
              <div class="mt-7 border-t border-slate-800 pt-6">
                <p class="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {{ item.type }}
                </p>

                <h4 class="mt-2 text-lg font-semibold text-slate-200">
                  {{ item.diploma }}
                </h4>

                <p class="mt-2 text-slate-400">
                  {{ item.option }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Continuous learning -->
      <div
        class="mx-auto mt-12 max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-7"
      >
        <div class="flex items-start gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9.75v2.25l1.5 1.5"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 3.75h7.5M8.25 20.25h7.5"
              />
            </svg>
          </div>

          <div>
            <h3 class="text-lg font-bold text-white">
              Apprentissage continu
            </h3>

            <p class="mt-2 leading-7 text-slate-400">
              Je continue à développer mes compétences techniques à travers
              la pratique, les projets personnels et l'apprentissage de
              nouvelles technologies du développement web.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
