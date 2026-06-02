<template>
  <div class="menu-page">

    <!-- Page Header -->
    <section class="menu-header">
      <p class="menu-eyebrow">Our Selection</p>
      <h1 class="menu-title">Menu</h1>
      <p class="menu-subtitle">What We Brew</p>

      <!-- Filter tabs داخل الهيدر -->
      <div class="filter-bar">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="['filter-btn', { active: activeCategory === cat }]"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </section>

    <!-- Items grid -->
    <section class="menu-grid-section">
      <div class="menu-grid">
        <div
          v-for="item in filteredItems"
          :key="item.name"
          class="menu-item"
        >
          <div class="menu-item-img">
            <img :src="item.img" :alt="item.name" />
          </div>
          <div class="menu-item-body">
            <div class="menu-item-top">
              <h3>{{ item.name }}</h3>
              <span class="price">{{ item.price }}</span>
            </div>
            <p class="menu-desc">{{ item.description }}</p>
            <span class="menu-tag">{{ item.tag }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Beans for sale -->
    <section class="beans-sale">
      <div class="beans-sale-inner">
        <span class="section-label">Take Home</span>
        <h2>Whole Bean Bags</h2>
        <div class="beans-sale-grid">
          <div v-for="b in bags" :key="b.name" class="bag-card">
            <img :src="b.img" :alt="b.name" />
            <div class="bag-info">
              <h4>{{ b.name }}</h4>
              <p>{{ b.notes }}</p>
              <span class="price">{{ b.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import espresso  from '../assets/Espresso product6.jpg'
import latte     from '../assets/Latte product4.jpg'
import cortado   from '../assets/Cortado product5.jpg'
import turkish   from '../assets/Turkish coffee product1.jpg'
import v60       from '../assets/V60 product3.jpg'
import icedLatte from '../assets/Iced Latte Product2.jpg'
import coldBrew  from '../assets/Cold Brew.jpg'
import alfredo   from '../assets/Alfredo coffee product7.jpg'
import pkg1      from '../assets/Coffee packaging1.jpg'
import pkg2      from '../assets/Coffee packaging2.jpg'
import pkg3      from '../assets/Coffee packaging3.jpg'
import pkg4      from '../assets/Coffee packaging4.jpg'
import pkg5      from '../assets/Coffee packaging5.jpg'

const categories = ['All', 'Espresso', 'Filter', 'Cold', 'Beans']
const activeCategory = ref('All')

const menuItems = [
  { name: 'Espresso',       price: '18 SAR', description: 'A concentrated shot of our single-origin blend. Bright, clean, and sweet.',  tag: 'Espresso', img: espresso  },
  { name: 'Alfredo Coffee', price: '22 SAR', description: 'Double ristretto with silky microfoam. The everyday coffee.',                 tag: 'Espresso', img: alfredo   },
  { name: 'Latte',          price: '24 SAR', description: 'Smooth and comforting. Perfectly steamed milk over espresso.',               tag: 'Espresso', img: latte     },
  { name: 'Cortado',        price: '20 SAR', description: 'Equal parts espresso and warm milk. Balance in a cup.',                      tag: 'Espresso', img: cortado   },
  { name: 'V60 Filter',     price: '25 SAR', description: 'Hand-brewed pour-over. Lighter body, complex and aromatic.',                 tag: 'Filter',   img: v60       },
  { name: 'Turkish Coffee', price: '19 SAR', description: 'Finely ground, slowly brewed, powerfully flavoured.',                       tag: 'Filter',   img: turkish   },
  { name: 'Iced Latte',     price: '26 SAR', description: 'Cold milk, espresso poured over ice. Refreshing.',                          tag: 'Cold',     img: icedLatte },
  { name: 'Cold Brew',      price: '28 SAR', description: '18-hour slow steep. Smooth with low acidity.',                              tag: 'Cold',     img: coldBrew  },
]

const bags = [
  { name: 'Ethiopia Natural', notes: 'Berry · Rose · Dark Chocolate',        price: '55 SAR / 250g', img: pkg1 },
  { name: 'Colombia Washed',  notes: 'Caramel · Apple · Walnut',             price: '52 SAR / 250g', img: pkg2 },
  { name: 'Seasonal Blend',   notes: 'Changing monthly · Always surprising',  price: '48 SAR / 250g', img: pkg3 },
  { name: 'Espresso Blend',   notes: 'Chocolate · Almond · Balanced',        price: '50 SAR / 250g', img: pkg4 },
  { name: 'Decaf Process',    notes: 'Honey Process · Sweet · Clean',        price: '58 SAR / 250g', img: pkg5 },
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'All') return menuItems
  if (activeCategory.value === 'Beans') return []
  return menuItems.filter(i => i.tag === activeCategory.value)
})
</script>

<style scoped>
.menu-page {
  padding-top: 0;
}

/* ── Page Header ── */
.menu-header {
  padding-top: 10rem;
  padding-bottom: 4rem;
  text-align: center;
  background: var(--color-bg);
  position: relative;
}

.menu-header::after {
  content: '';
  display: block;
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(200,169,110,0.4), transparent);
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
}

.menu-eyebrow {
  font-size: 0.68rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 1rem;
  font-family: var(--font-sans);
}

.menu-title {
  font-family: var(--font-serif);
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 400;
  color: var(--color-text);
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 0.4rem;
}

.menu-subtitle {
  font-family: var(--font-serif);
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-style: italic;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
  margin-bottom: 0;
}

/* ── Section label ── */
.section-label {
  display: block;
  font-size: 0.68rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.8rem;
}

/* ── Filter bar — داخل الهيدر ── */
.filter-bar {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  padding: 0 6vw;
}

.filter-btn {
  padding: 0.5rem 1.6rem;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  border: 1px solid rgba(240,236,228,0.15);
  color: var(--color-text-muted);
  background: transparent;
  font-family: var(--font-sans);
  transition: all 0.3s;
  cursor: pointer;
}

.filter-btn.active,
.filter-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

/* ── Menu grid ── */
.menu-grid-section {
  padding: 4rem 6vw 6rem;
  max-width: 1300px;
  margin: 0 auto;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.menu-item {
  background: var(--color-bg-2);
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;
}

.menu-item:hover { transform: translateY(-4px); }

.menu-item-img {
  overflow: hidden;
  aspect-ratio: 4/3;
}

.menu-item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.menu-item:hover .menu-item-img img {
  transform: scale(1.06);
}

.menu-item-body {
  padding: 1.4rem;
}

.menu-item-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.6rem;
}

.menu-item-top h3 {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 400;
}

.price {
  font-size: 0.8rem;
  color: var(--color-accent);
  letter-spacing: 0.05em;
}

.menu-desc {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.menu-tag {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  border: 1px solid rgba(240,236,228,0.1);
  padding: 0.25rem 0.7rem;
}

/* ── Beans for sale ── */
.beans-sale {
  padding: 6rem 6vw;
  background: var(--color-bg-2);
  border-top: 1px solid rgba(200,169,110,0.1);
}

.beans-sale-inner {
  max-width: 1300px;
  margin: 0 auto;
}

.beans-sale h2 {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 400;
  margin-bottom: 3rem;
}

.beans-sale-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.bag-card { cursor: pointer; }

.bag-card img {
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  margin-bottom: 1rem;
  transition: transform 0.5s;
}

.bag-card:hover img { transform: scale(1.04); }

.bag-info h4 {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 400;
  margin-bottom: 0.3rem;
}

.bag-info p {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
}

.bag-info .price { font-size: 0.8rem; }

@media (max-width: 768px) {
  .menu-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }
  .beans-sale-grid { grid-template-columns: repeat(2, 1fr); }
  .filter-bar { justify-content: center; }
}
</style>