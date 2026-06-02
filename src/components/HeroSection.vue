<template>
  <div class="home">

    <!-- Hero -->
    <section class="hero">
      <div class="hero-media">
        <img src="../assets/Page-hero.jpg" alt="Coffee shop" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <p class="hero-eyebrow">Est. 2018 · Madinah</p>
        <h1 class="hero-title">The Coffee<br />Collective</h1>
        <p class="hero-sub">Specialty coffee roasted with intention,<br />served with care.</p>
        <div class="hero-actions">
          <router-link to="/menu" class="btn-primary">Explore Menu</router-link>
          <a href="#about" class="btn-ghost">Our Story</a>
        </div>
      </div>
      <div class="scroll-hint">
        <span></span>
      </div>
    </section>

    <!-- About strip -->
    <section id="about" class="about">
      <div class="about-inner">
        <div class="about-text">
          <span class="section-label">About Us</span>
          <h2>Coffee as a craft,<br />not a commodity</h2>
          <p>We source exceptional beans directly from farmers, roast them in small batches, and brew every cup with precision and care. Quality over volume — always.</p>
          <a href="#contact" class="btn-ghost">Visit Us</a>
        </div>
        <div class="about-images">
          <img src="../assets/Description-of-the-cafe.jpg" alt="Our cafe" class="about-img-1" />
          <img src="../assets/Description-of-coffee2.jpg" alt="Coffee close-up" class="about-img-2" />
        </div>
      </div>
    </section>

    <!-- Beans / Products featured -->
    <section class="beans">
      <div class="beans-header">
        <span class="section-label">Roastery</span>
        <h2>Our Coffees</h2>
      </div>
      <div class="beans-grid">
        <div v-for="(item, i) in coffees" :key="i" class="bean-card">
          <div class="bean-img-wrap">
            <img :src="item.img" :alt="item.name" />
          </div>
          <div class="bean-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.origin }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Packaging showcase -->
    <section class="packaging">
      <div class="packaging-inner">
        <div class="packaging-text">
          <span class="section-label">Take Home</span>
          <h2>Whole Bean &<br />Subscription</h2>
          <p>Our coffees are available as whole bean bags or as a monthly subscription delivered to your door.</p>
          <router-link to="/menu" class="btn-primary">Shop Now</router-link>
        </div>
        <div class="packaging-imgs">
          <img v-for="n in 3" :key="n" :src="packagingImgs[n-1]" :alt="'Packaging ' + n" />
        </div>
      </div>
    </section>

    <!-- Contact footer strip -->
    <section id="contact" class="contact-strip">
      <div class="contact-inner">
        <div class="contact-block">
          <span class="section-label">Find Us</span>
          <p>King Fahd Road<br />Madinah<br />Saudi Arabia</p>
        </div>
        <div class="contact-block">
          <span class="section-label">Hours</span>
          <p>Sat – Thu: 6:00 AM – 1:00 AM<br />Fri – Sat: 7:00 AM – 3:00 AM</p>
        </div>
        <div class="contact-block">
          <span class="section-label">Contact</span>
          <p>hello@coffeecollective.sa<br />+966 50 000 0000</p>
        </div>
        <div class="contact-block center">
          <p class="big-quote">"Good coffee takes time. So do we."</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import img1 from '../assets/Description-of-coffee-beans.jpg'
import img2 from '../assets/Cortado-product5.jpg'
import img3 from '../assets/Espresso-product6.jpg'
import img4 from '../assets/Latte-product4.jpg'
import img5 from '../assets/Turkish-coffee-product1.jpg'
import img6 from '../assets/V60-product3.jpg'

import p1 from '../assets/Coffee-packaging1.jpg'
import p2 from '../assets/Coffee-packaging2.jpg'
import p3 from '../assets/Coffee-packaging3.jpg'

const coffees = [
  { name: 'Ethiopia Yirgacheffe',   origin: 'Floral · Bergamot · Peach',          img: img1 },
  { name: 'Cortado Blend',          origin: 'Caramel · Hazelnut · Dark Chocolate', img: img2 },
  { name: 'Espresso Single Origin', origin: 'Citrus · Brown Sugar · Almond',       img: img3 },
  { name: 'Latte Signature',        origin: 'Milk Chocolate · Vanilla · Smooth',   img: img4 },
  { name: 'Turkish Grind',          origin: 'Bold · Spiced · Traditional',         img: img5 },
  { name: 'V60 Filter',             origin: 'Bright · Clean · Complex',            img: img6 },
]

const packagingImgs = [p1, p2, p3]
</script>

<style scoped>
/* ── Hero ── */
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 8vh;
}
.hero-media {
  position: absolute;
  inset: 0;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(13,13,11,0.3) 0%,
    rgba(13,13,11,0.1) 40%,
    rgba(13,13,11,0.7) 100%
  );
}
.hero-content {
  position: relative;
  z-index: 2;
  padding: 0 6vw;
  max-width: 800px;
}
.hero-eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 1rem;
}
.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 400;
  line-height: 1.05;
  color: var(--color-text);
  margin-bottom: 1.2rem;
}
.hero-sub {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  max-width: 420px;
}
.hero-actions {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  right: 3rem;
  z-index: 2;
}
.scroll-hint span {
  display: block;
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, transparent, var(--color-accent));
  animation: scrollLine 2s ease-in-out infinite;
}
@keyframes scrollLine {
  0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
  50% { opacity: 1; transform: scaleY(1); }
}

/* ── Buttons ── */
.btn-primary {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: var(--color-accent);
  color: #0d0d0b;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 500;
  transition: background 0.3s;
}
.btn-primary:hover { background: var(--color-accent-hover); }

.btn-ghost {
  display: inline-block;
  padding: 0.75rem 2rem;
  border: 1px solid rgba(240, 236, 228, 0.3);
  color: var(--color-text);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 400;
  transition: border-color 0.3s, color 0.3s;
}
.btn-ghost:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

/* ── Section label ── */
.section-label {
  display: block;
  font-size: 0.68rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

/* ── About ── */
.about {
  padding: 10rem 6vw;
  background: var(--color-bg-2);
}
.about-inner {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}
.about-text h2 {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}
.about-text p {
  color: var(--color-text-muted);
  max-width: 440px;
  margin-bottom: 2rem;
  font-size: 0.95rem;
}
.about-images {
  position: relative;
  height: 500px;
}
.about-img-1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 75%;
  height: 80%;
  object-fit: cover;
}
.about-img-2 {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 55%;
  height: 55%;
  object-fit: cover;
  border: 4px solid var(--color-bg-2);
}

/* ── Beans grid ── */
.beans {
  padding: 8rem 6vw;
}
.beans-header {
  max-width: 1300px;
  margin: 0 auto 3.5rem;
}
.beans-header h2 {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 2.5vw, 2.4rem);
  font-weight: 400;
}
.beans-grid {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
}
.bean-card { cursor: pointer; }
.bean-img-wrap {
  overflow: hidden;
  aspect-ratio: 3/4;
  margin-bottom: 1rem;
}
.bean-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.bean-card:hover .bean-img-wrap img {
  transform: scale(1.05);
}
.bean-info h3 {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.3rem;
}
.bean-info p {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
}

/* ── Packaging ── */
.packaging {
  padding: 8rem 6vw;
  background: var(--color-bg-2);
}
.packaging-inner {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: center;
}
.packaging-text h2 {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}
.packaging-text p {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  max-width: 380px;
  margin-bottom: 2rem;
}
.packaging-imgs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.packaging-imgs img {
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
}

/* ── Contact strip ── */
.contact-strip {
  padding: 6rem 6vw;
  border-top: 1px solid rgba(200, 169, 110, 0.12);
}
.contact-inner {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  align-items: start;
}
.contact-block p {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.9;
}
.contact-block.center { display: flex; align-items: center; }
.big-quote {
  font-family: var(--font-serif);
  font-size: 1.2rem !important;
  font-style: italic;
  color: var(--color-text) !important;
  line-height: 1.5 !important;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .about-inner,
  .packaging-inner { grid-template-columns: 1fr; gap: 3rem; }
  .about-images { height: 340px; }
  .contact-inner { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .packaging-imgs { grid-template-columns: repeat(3, 1fr); }
  .contact-inner { grid-template-columns: 1fr; }
  .hero-content { padding: 0 1.5rem; }
}
</style>