<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Projects from './components/Projects.vue'
import ProjectArchitecture from './components/ProjectArchitecture.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

import { onMounted } from "vue";

onMounted(() => {
  fetch("/api/visitor", {
    method: "POST",
  }).catch((error) => {
    console.error("Visitor notification error:", error);
  });
});
</script>

<template>
  <Navbar />

  <main class="relative overflow-hidden bg-[#07131f]">
    <div class="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.12),_transparent_60%)]" />
    <div class="absolute inset-x-0 top-[30rem] h-96 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.08),_transparent_60%)]" />

    <div class="relative z-10">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <ProjectArchitecture />
      <Contact />
    </div>
  </main>

  <Footer />
</template>
