<template>
  <header :class="['navbar', { scrolled: isScrolled }]">
    <nav class="nav-inner">
      <router-link to="/" class="logo">The Coffee Collective</router-link>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/menu">Menu</router-link></li>
        <li><a href="#about" @click.prevent="goTo('about')">About</a></li>
        <li><a href="#contact" @click.prevent="goTo('contact')">Contact</a></li>
      </ul>
      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div :class="['mobile-menu', { open: menuOpen }]">
      <ul>
        <li><router-link to="/" @click="menuOpen = false">Home</router-link></li>
        <li><router-link to="/menu" @click="menuOpen = false">Menu</router-link></li>
        <li><a href="#about" @click.prevent="goTo('about'); menuOpen = false">About</a></li>
        <li><a href="#contact" @click.prevent="goTo('contact'); menuOpen = false">Contact</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const isScrolled = ref(false)
const menuOpen = ref(false)
const router = useRouter()
const route = useRoute()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const goTo = async (sectionId) => {
  if (route.path !== '/') {
    await router.push('/')
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  } else {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.5rem 2rem;
  transition: background 0.4s ease, padding 0.4s ease;
}

.navbar.scrolled {
  background: rgba(13, 13, 11, 0.95);
  backdrop-filter: blur(12px);
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(200, 169, 110, 0.15);
}

.nav-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  letter-spacing: 0.05em;
  color: var(--color-accent);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2.5rem;
}

.nav-links a {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--color-text);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--color-text);
  transition: 0.3s;
}

.mobile-menu {
  display: none;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease;
  background: rgba(13, 13, 11, 0.98);
}

.mobile-menu.open {
  max-height: 300px;
}

.mobile-menu ul {
  list-style: none;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.mobile-menu a {
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: block; }
}
</style>