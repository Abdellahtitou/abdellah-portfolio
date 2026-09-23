<template>
  <section id="about" class="bg-slate-950 px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <!-- Header -->
      <div class="mb-14 text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500"
        >
          À propos
        </p>

        <h2 class="text-4xl font-bold text-white md:text-5xl">
          Qui suis-je ?
        </h2>

        <p class="mx-auto mt-4 max-w-2xl text-slate-400">
          Découvrez mon parcours, mes compétences et ma façon d'aborder le
          développement web.
        </p>
      </div>

      <!-- Main content -->
      <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <!-- Presentation -->
        <div
          class="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:p-10"
        >
          <div
            class="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-7 w-7 text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>

          <h3 class="text-2xl font-bold text-white">
            Abdellah Titou
          </h3>

          <p class="mt-1 font-medium text-blue-500">
            Développeur Web Full Stack Junior
          </p>

          <div class="mt-6 space-y-4 text-base leading-8 text-slate-400">
            <p>
              Je suis un développeur web Full Stack Junior passionné par la
              création d'applications web modernes, fonctionnelles et
              adaptées aux besoins des utilisateurs.
            </p>

            <p>
              Ma formation en
              <span class="font-medium text-slate-300">
                Développement Digital — Full Stack
              </span>
              à l'ISTA Hay Riad m'a permis d'acquérir des bases solides en
              développement Frontend et Backend.
            </p>

            <p>
              À travers mes différentes expériences en stage, j'ai eu
              l'occasion de travailler avec
              <span class="font-medium text-blue-400">Vue.js</span>,
              <span class="font-medium text-blue-400">React.js</span>,
              <span class="font-medium text-blue-400">Laravel</span>,
              <span class="font-medium text-blue-400">Node.js</span>,
              ainsi qu'avec les bases de données
              <span class="font-medium text-blue-400">MySQL</span> et
              <span class="font-medium text-blue-400">MongoDB</span>.
            </p>

            <p>
              Je recherche aujourd'hui une opportunité en tant que
              <span class="font-medium text-slate-200">
                Développeur Web Full Stack Junior
              </span>
              afin de mettre en pratique mes compétences, participer à des
              projets concrets et continuer à progresser techniquement.
            </p>
          </div>
        </div>

        <!-- Quick information -->
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <!-- Formation -->
          <div
            class="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-blue-500/30"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10"
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
                    d="M4.26 10.147 12 6l7.74 4.147a.75.75 0 0 1 0 1.306L12 15.6l-7.74-4.147a.75.75 0 0 1 0-1.306ZM6.75 12.75v4.125c0 .621.504 1.125 1.125 1.125h8.25c.621 0 1.125-.504 1.125-1.125V12.75M19.5 11.25v5.25"
                  />
                </svg>
              </div>

              <div>
                <p class="text-sm text-slate-500">
                  Formation
                </p>

                <h4 class="mt-1 font-semibold text-white">
                  Développement Digital
                </h4>

                <p class="mt-1 text-sm text-slate-400">
                  Full Stack · ISTA Hay Riad
                </p>

                <p class="mt-1 text-xs text-slate-500">
                  2022 — 2024
                </p>
              </div>
            </div>
          </div>

          <!-- Experience -->
          <div
            class="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-blue-500/30"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10"
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
                    d="M20.25 14.15v4.073a2.25 2.25 0 0 1-2.25 2.25h-12a2.25 2.25 0 0 1-2.25-2.25V14.15m16.5 0a48.108 48.108 0 0 1-16.5 0m16.5 0v-2.647a2.25 2.25 0 0 0-2.25-2.25h-12a2.25 2.25 0 0 0-2.25 2.25v2.647m12-5.147V6.75a2.25 2.25 0 0 0-2.25-2.25h-3A2.25 2.25 0 0 0 9.75 6.75v2.25"
                  />
                </svg>
              </div>

              <div>
                <p class="text-sm text-slate-500">
                  Expérience pratique
                </p>

                <h4 class="mt-1 font-semibold text-white">
                  3 stages
                </h4>

                <p class="mt-1 text-sm text-slate-400">
                  Full Stack Web
                </p>
              </div>
            </div>
          </div>

          <!-- Specialization -->
          <div
            class="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-blue-500/30"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10"
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
                    d="M17.25 6.75 19.5 9l-2.25 2.25m-10.5-4.5L4.5 9l2.25 2.25m6.75-6.75-3 9m7.5 7.5H6a2.25 2.25 0 0 1-2.25-2.25V5.25A2.25 2.25 0 0 1 6 3h12a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 18 21Z"
                  />
                </svg>
              </div>

              <div>
                <p class="text-sm text-slate-500">
                  Spécialisation
                </p>

                <h4 class="mt-1 font-semibold text-white">
                  Frontend & Backend
                </h4>

                <p class="mt-1 text-sm text-slate-400">
                  Applications Web Full Stack
                </p>
              </div>
            </div>
          </div>

          <!-- Location -->
          <div
            class="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-blue-500/30"
          >
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10"
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>

              <div>
                <p class="text-sm text-slate-500">
                  Localisation
                </p>

                <h4 class="mt-1 font-semibold text-white">
                  Rabat, Maroc
                </h4>

                <p class="mt-1 text-sm text-slate-400">
                  Disponible pour une opportunité
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom quote -->
      <div
        class="mt-8 rounded-2xl border border-blue-500/10 bg-blue-500/5 p-6 text-center"
      >
        <p class="text-base font-medium text-slate-300 md:text-lg">
          « Développer, apprendre et progresser à travers des projets
          concrets. »
        </p>
      </div>
    </div>
  </section>
</template>
