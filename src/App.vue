<template>
  <HeaderSection />
  <main>
    <HeroBanner />
    <PizzaBuilder />
  </main>
  <FooterSection />
</template>

<script setup lang="ts">
// Layout
import HeaderSection from '@/components/layout/HeaderSection.vue'
import FooterSection from '@/components/layout/FooterSection.vue'

// Templates
import HeroBanner from '@/components/templates/HeroBanner.vue'
import PizzaBuilder from '@/components/templates/PizzaBuilder.vue'
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

main {
  z-index: f.z('content');
}
</style>
