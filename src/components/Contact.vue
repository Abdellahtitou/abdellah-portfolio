<script setup lang="ts">
const email = "titou.abdellah2004@gmail.com";

const handleSubmit = (event: Event) => {
  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const name = String(formData.get("name") || "");
  const senderEmail = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");

  const subject = encodeURIComponent(`Contact Portfolio - ${name}`);

  const body = encodeURIComponent(
    `Bonjour Abdellah,\n\n` +
      `Nom : ${name}\n` +
      `Email : ${senderEmail}\n\n` +
      `Message :\n${message}`
  );

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};
</script>

<template>
  <section id="contact" class="bg-slate-900 px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <!-- Header -->
      <div class="mb-14 text-center">
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          Contact
        </p>

        <h2 class="text-4xl font-bold text-white md:text-5xl">Parlons de votre projet</h2>

        <p class="mx-auto mt-4 max-w-2xl text-slate-400">
          Vous recherchez un développeur Web Full Stack Junior ? N'hésitez pas à me
          contacter pour échanger sur une opportunité.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <!-- Contact information -->
        <div class="rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-10">
          <h3 class="text-2xl font-bold text-white">Mes coordonnées</h3>

          <p class="mt-3 leading-7 text-slate-400">
            Je suis actuellement à la recherche d'une opportunité en tant que Développeur
            Web Full Stack Junior.
          </p>

          <div class="mt-8 space-y-5">
            <!-- Email -->
            <a
              :href="`mailto:${email}`"
              class="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4 transition hover:border-blue-500/40"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500"
              >
                <svg
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75"
                  />
                </svg>
              </div>

              <div class="min-w-0">
                <p class="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Email
                </p>

                <p
                  class="mt-1 truncate text-sm font-medium text-slate-200 transition group-hover:text-blue-400"
                >
                  {{ email }}
                </p>
              </div>
            </a>

            <!-- Phone -->
            <a
              href="tel:+212669266600"
              class="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4 transition hover:border-blue-500/40"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500"
              >
                <svg
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293c-.252.336-.69.477-1.086.337a12.035 12.035 0 0 1-7.176-7.176c-.14-.396.001-.834.337-1.086l1.293-.97c.363-.272.525-.73.417-1.173L7.01 3.102A1.125 1.125 0 0 0 5.919 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>

              <div>
                <p class="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Téléphone
                </p>

                <p
                  class="mt-1 text-sm font-medium text-slate-200 transition group-hover:text-blue-400"
                >
                  06 69 26 66 00
                </p>
              </div>
            </a>

            <!-- Location -->
            <div
              class="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-4"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500"
              >
                <svg
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 10.5-7.5 10.5S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>

              <div>
                <p class="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Localisation
                </p>

                <p class="mt-1 text-sm font-medium text-slate-200">
                  Yaacoub Al Mansour, Rabat
                </p>
              </div>
            </div>
          </div>

          <!-- Social -->
          <div class="mt-8 border-t border-slate-800 pt-7">
            <p class="text-sm font-medium text-slate-400">Retrouvez-moi également sur</p>

            <div class="mt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/Abdellahtitou"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/titouabdellah"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
              >
                LinkedIn
              </a>

              <a
                href="https://wa.me/212669266600"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-green-500 hover:text-green-400"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="rounded-3xl border border-slate-800 bg-slate-950 p-8 md:p-10">
          <h3 class="text-2xl font-bold text-white">Envoyer un message</h3>

          <p class="mt-2 text-sm text-slate-500">
            Remplissez le formulaire et votre application email s'ouvrira automatiquement.
          </p>

          <form class="mt-8 space-y-5" @submit.prevent="handleSubmit">
            <!-- Name -->
            <div>
              <label for="name" class="mb-2 block text-sm font-medium text-slate-300">
                Nom
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Votre nom"
                class="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="votre@email.com"
                class="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                required
                placeholder="Écrivez votre message..."
                class="w-full resize-none rounded-xl border border-slate-800 bg-slate-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              class="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Envoyer le message

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12 3.27 3.125A.75.75 0 0 1 4.2 2.2l16.6 9.1a.75.75 0 0 1 0 1.3L4.2 21.8a.75.75 0 0 1-.93-.925L6 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
