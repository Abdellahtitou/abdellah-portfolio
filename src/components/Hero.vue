<template>
  <section
    id="home"
    class="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 py-28"
  >
    <!-- Background effects -->
    <div
      class="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
    ></div>

    <div
      class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
    ></div>

    <div
      class="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]"
    >
      <!-- Left -->
      <div class="animate-fade-up">
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2"
        >
          <span class="h-2 w-2 rounded-full bg-green-500"></span>

          <span class="text-sm font-medium text-green-400">
           Disponible pour une opportunité junior
          </span>
        </div>

        <p class="mb-4 text-lg font-medium text-blue-500">Bonjour, je suis</p>

        <h1
          class="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Abdellah
          <span class="text-blue-500">Titou</span>
        </h1>

        <h2
          class="mt-5 text-2xl font-semibold leading-relaxed text-slate-300 md:text-3xl"
        >
          Développeur Web
          <span class="text-blue-500">Full Stack Junior</span>
        </h2>

        <p class="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
          Je développe des applications web modernes avec une approche
          <span class="font-medium text-slate-300">Frontend & Backend</span>. Je travaille
          principalement avec <span class="font-medium text-blue-400">Vue.js</span>,
          <span class="font-medium text-blue-400">React.js</span>,
          <span class="font-medium text-blue-400">Laravel</span> et
          <span class="font-medium text-blue-400">Node.js</span>.
        </p>

        <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
          Diplômé en Développement Digital — Full Stack à l'ISTA Hay Riad, avec une
          expérience pratique acquise à travers trois stages en développement web.
        </p>

        <!-- Buttons -->
        <div class="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Voir mon projet
          </a>

          <a
            href="#contact"
            class="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-400"
          >
            Me contacter
          </a>

          <a
            href="/CV-Abdellah-Titou.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg border border-slate-800 px-6 py-3 font-medium text-slate-400 transition hover:border-slate-600 hover:text-white"
          >
            Voir mon CV
          </a>
        </div>

        <!-- Social links -->
        <div class="mt-8 flex flex-wrap items-center gap-6">
          <a
            href="https://github.com/Abdellahtitou"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-slate-400 transition hover:text-blue-500"
          >
            GitHub →
          </a>

          <a
            href="https://www.linkedin.com/in/titouabdellah"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-slate-400 transition hover:text-blue-500"
          >
            LinkedIn →
          </a>

          <a
            href="https://wa.me/212669266600"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-slate-400 transition hover:text-green-400"
          >
            WhatsApp →
          </a>

          <a
            href="mailto:titou.abdellah2004@gmail.com"
            class="text-sm font-medium text-slate-400 transition hover:text-blue-500"
          >
            Email →
          </a>
        </div>
      </div>

      <!-- Right / Photo -->
      <div class="flex justify-center lg:justify-end">
        <div class="relative">
          <!-- Glow -->
          <div class="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

          <!-- Outer circle -->
          <div
            class="relative flex h-72 w-72 animate-float items-center justify-center rounded-full border border-blue-500/30 bg-slate-900 p-2 shadow-2xl shadow-blue-500/10 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
          >
            <!-- Photo -->
            <div
              class="h-full w-full overflow-hidden rounded-full border-4 border-slate-800"
            >
              <img
                src="/images/abdellah-titou.jpg"
                alt="Abdellah Titou - Développeur Web Full Stack Junior"
                class="h-full w-full object-cover"
              />
            </div>
          </div>

          <!-- Floating badge -->
          <div
            class="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-blue-500/30 bg-slate-900 px-5 py-2.5 shadow-xl"
          >
            <span class="text-sm font-semibold text-blue-400">
              Full Stack Developer
            </span>
          </div>

          <!-- Tech badge -->
          <div
            class="absolute -right-4 top-10 hidden rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 shadow-xl sm:block"
          >
            <p class="text-xs text-slate-500">Stack principale</p>
            <p class="mt-1 text-sm font-semibold text-white">Laravel · Vue.js</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
