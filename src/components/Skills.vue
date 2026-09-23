<script setup lang="ts">
const frontendSkills = [
  'Vue.js',
  'React.js',
  'JavaScript',
  'HTML5',
  'CSS3',
]

const backendSkills = [
  'Laravel',
  'PHP',
  'Node.js',
  'Express',
]

const databaseSkills = [
  'MySQL',
  'MongoDB',
]

const tools = [
  'REST API',
  'Git',
  'GitHub',
]

const concepts = [
  'CRUD',
  'API REST',
  'Responsive Design',
  'Frontend / Backend',
  'Gestion des bases de données',
  'Git & GitHub',
]
</script>

<template>
  <section id="skills" class="bg-slate-950 px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <!-- Header -->
      <div class="mb-14 text-center">
        <p
          class="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500"
        >
          Compétences
        </p>

        <h2 class="text-4xl font-bold text-white md:text-5xl">
          Mes compétences techniques
        </h2>

        <p class="mx-auto mt-4 max-w-2xl text-slate-400">
          Les principales technologies et outils que j'utilise pour développer
          des applications web modernes.
        </p>
      </div>

      <!-- Skills -->
      <div class="grid gap-6 md:grid-cols-2">
        <!-- Frontend -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-blue-500/30"
        >
          <div class="mb-6 flex items-center gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10"
            >
              <span class="text-xl text-blue-500">&lt;/&gt;</span>
            </div>

            <div>
              <h3 class="text-xl font-bold text-white">
                Frontend
              </h3>

              <p class="text-sm text-slate-500">
                Interfaces web modernes
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in frontendSkills"
              :key="skill"
              class="rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Backend -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-blue-500/30"
        >
          <div class="mb-6 flex items-center gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10"
            >
              <span class="text-xl font-bold text-blue-500">{ }</span>
            </div>

            <div>
              <h3 class="text-xl font-bold text-white">
                Backend
              </h3>

              <p class="text-sm text-slate-500">
                Logique et services web
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in backendSkills"
              :key="skill"
              class="rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Database -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-blue-500/30"
        >
          <div class="mb-6 flex items-center gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10"
            >
              <span class="text-xl text-blue-500">DB</span>
            </div>

            <div>
              <h3 class="text-xl font-bold text-white">
                Bases de données
              </h3>

              <p class="text-sm text-slate-500">
                Gestion et stockage des données
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in databaseSkills"
              :key="skill"
              class="rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Tools -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-blue-500/30"
        >
          <div class="mb-6 flex items-center gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10"
            >
              <span class="text-xl text-blue-500">⚙</span>
            </div>

            <div>
              <h3 class="text-xl font-bold text-white">
                Outils & API
              </h3>

              <p class="text-sm text-slate-500">
                Outils de développement
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in tools"
              :key="skill"
              class="rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Concepts -->
      <div
        class="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-7"
      >
        <h3 class="text-xl font-bold text-white">
          Concepts & pratiques
        </h3>

        <p class="mt-2 text-sm text-slate-500">
          Quelques notions et pratiques utilisées dans mes projets.
        </p>

        <div class="mt-5 flex flex-wrap gap-3">
          <span
            v-for="concept in concepts"
            :key="concept"
            class="rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-400"
          >
            {{ concept }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
