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
</script>

<template>
  <Navbar />

  <main class="bg-slate-950">
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Projects />
    <ProjectArchitecture />
    <Contact />
  </main>

  <Footer />
</template>
