<template>
  <header :class="['header', { 'is-scroll': isScrolled }]">
    <div class="header__logo">
      <span>Food</span>
      <span>now</span>
    </div>
    <nav class="header__nav">
      <BaseButton to="#" variant="link">Home</BaseButton>
      <BaseButton to="#" variant="link">About</BaseButton>
      <BaseButton to="#" variant="link">Blog</BaseButton>
      <BaseButton to="#" variant="link">Contact Us</BaseButton>
    </nav>
    <div class="header__cta">
      <BaseButton to="#" variant="link">Login</BaseButton>
      <BaseButton to="#" variant="btn">Register</BaseButton>
    </div>
  </header>
</template>

<script setup lang="ts">
// Vue
import { ref, onMounted, onUnmounted } from 'vue'

// Components
import BaseButton from '@/components/ui/BaseButton.vue'

const isScrolled = ref(false)

const handleScroll = () => {
  const half = window.innerHeight / 2
  isScrolled.value = window.scrollY > half
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped lang="scss">
@use '@/assets/styles/utils/vars' as v;
@use '@/assets/styles/utils/functions' as f;

header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.5rem 10rem;
  transition:
    padding 200ms ease-in,
    background-color 200ms ease-in-out;

  color: v.$c-text-light;
  z-index: f.z('nav');

  &.is-scroll {
    padding: calc(3.5rem / 2) 10rem;
    background-color: v.$c-background;

    .header {
      &__logo {
        color: v.$c-text-dark;
      }

      &__nav {
        color: v.$c-text-dark;
      }

      &__cta a:first-child {
        color: v.$c-text-dark;
      }
    }
  }
}

.header {
  &__logo,
  &__nav,
  &__cta {
    transition: color 200ms ease-in;
  }

  &__logo {
    span {
      font-size: 3.2rem;
      font-weight: 700;

      &:first-child {
        color: v.$c-accent;
      }
    }
  }

  &__nav,
  &__cta {
    display: flex;
    align-items: baseline;
    column-gap: 5rem;
  }

  &__logo,
  &__cta {
    flex-basis: 20%;
  }
}
</style>
